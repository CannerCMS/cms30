import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import Amount from '@canner/antd-indicator-amount';

class Balance extends React.Component {
  render() {
    const {incomes, expenses, title, note, uiParams} = this.props;
    const income = (incomes.incomes || []).reduce((pre, cur) => pre + cur.amount, 0);
    const expense = (expenses.expenses || []).reduce((pre, cur) => pre + cur.amount, 0);
    return (
      <Amount title={title} note={note} value={income - expense} uiParams={uiParams} />
    )
  }
}

export default compose(
  withApollo,
  graphql(gql`
    query {
      expenses {
        id
        amount
      }
    }
  `, {name: 'expenses'}),
  graphql(gql`
    query {
      incomes {
        id
        amount
      }
    }
  `, {name: 'incomes'})
)(Balance)