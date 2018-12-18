/**
 * @flow
 */

import * as React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {groupBy, mapValues, merge} from 'lodash';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

type Props = {
  expenses: Object,
  incomes: Object
}

class MergedBar extends React.Component<Props> {
  render() {
    const {expenses, incomes} = this.props;

    if (expenses.loading || incomes.loading) {
      return null;
    }
    const data = resolveData2({
      data1: expenses.expenses || [],
      data2: incomes.incomes || [],
      data1Key: 'expense',
      data2Key: 'income'
    });
    return (
      <ResponsiveContainer aspect={3}>
        <BarChart data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" />
          <Bar dataKey="income" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

function resolveData2({
  data1,
  data2,
  data1Key,
  data2Key
}) {
  const grouped1 = groupBy(data1, v => moment(v.date).format('YYYY/MM'));
  const grouped2 = groupBy(data2, v => moment(v.date).format('YYYY/MM'));
  const reduced1 = mapValues(grouped1, v => ({[data1Key]: v.reduce((prev, cur) => prev + cur.amount, 0)}));
  const reduced2 = mapValues(grouped2, v => ({[data2Key]: v.reduce((prev, cur) => prev + cur.amount, 0)}));
  const merged = merge(reduced1, reduced2);
  return Object.keys(merged).map(key => {
    return {
      name: key,
      ...merged[key],
    };
  }).sort((a, b) => moment(a.name).unix() - moment(b.name).unix());
}

export default compose(
  withApollo,
  graphql(gql`
    query {
      expenses {
        id
        amount
        date
      }
    }
  `, {name: 'expenses'}),
  graphql(gql`
    query {
      incomes {
        id
        amount
        date
      }
    }
  `, {name: 'incomes'})
)(MergedBar)