/**
 * @flow
 */

import * as React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import {groupBy, mapValues} from 'lodash';
import {PieChart, Pie, Sector, ResponsiveContainer} from 'recharts';

type Props = {
  expenses: Object,
  incomes: Object,
  dataKey: 'string'
}

class Pies extends React.Component<Props> {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const {expenses, incomes, dataKey} = this.props;

    if (expenses.loading || incomes.loading) {
      return null;
    }

    let data = [];

    if (dataKey === 'expenses') {
      data = expenses.expenses || [];
    } else {
      data = incomes.incomes || [];
    }
    data = resolveToPie(data);

    return (
      <ResponsiveContainer aspect={1}>
        <PieChart>
          <Pie 
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape} 
            data={data} 
            innerRadius={40}
            outerRadius={60} 
            fill="#8884d8"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

function resolveToPie(data) {
  const groupMap = groupBy(data, v => v.category && v.category.name);
  const reducedMap = mapValues(groupMap, v => v.reduce((prev, cur) => prev + cur.amount, 0));
  return Object.keys(reducedMap).map(key => {
    return {
      name: key,
      value: reducedMap[key]
    }
  })
}

export default compose(
  withApollo,
  graphql(gql`
    query {
      expenses {
        id
        amount
        date
        category {
          id
          name
        }
      }
    }
  `, {name: 'expenses'}),
  graphql(gql`
    query {
      incomes {
        id
        amount
        date
        category {
          id
          name
        }
      }
    }
  `, {name: 'incomes'})
)(Pies)

function renderActiveShape(props: any) {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`$ ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}
