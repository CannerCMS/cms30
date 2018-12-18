// @flow

import React from 'react';
import moment from 'moment';
import {List, Button, Icon, Row, Col} from 'antd';
import {groupBy} from 'lodash';

type Props ={
  goTo: Function,
  value: Array<Object>
}

export default class ArrayList extends React.Component<Props> {
  add = () => {
    const {goTo} = this.props;
    goTo({
      pathname: `/matches`,
      operator: 'create'
    });
  }

  onClick = item => {
    const {goTo} = this.props;
    goTo({
      pathname: `/matches/${item.id}`
    })
  }

  render() {
    const {value} = this.props;
    const dataSource = splitByDate(value);
    return (
      <React.Fragment>
        <Button ghost type="primary" dashed style={{width: '100%', marginBottom: 16}} onClick={this.add}>
          <Icon type="plus" /> Add
        </Button>
        {
          dataSource.map(item => (
            <React.Fragment key={item.dateString}>
              <div style={{
                background: '#f4f4f4',
                padding: '28px'
              }}>
                {item.dateString}
              </div>
              <List
                itemLayout="vertical"
                size="large"
                pagination={false}
                dataSource={item.sources}
                renderItem={item => renderItem(item, this.onClick)}
              />
            </React.Fragment>
          ))
        }
        
      </React.Fragment>
    );
  }
}

function renderItem(item, onClick) {
  return (
    <List.Item
      key={item.id}
      actions={[]}
      extra={renderResult(item)}
    >
      <div style={{cursor: 'pointer'}} onClick={() => onClick(item)}>
        {renderContent(item)}
      </div>
    </List.Item>
  )
}

function renderResult(item) {
  return (
    <Row type="flex" gutter={16} align="middle" justify="center" style={{height: '100%', width: '300px'}}>
      <Col span={8} style={{textAlign: 'center'}}>
        {item.homeTeam.name}
        <img src={item.homeTeam.flag && item.homeTeam.flag.url}
          width={50}
        />
      </Col>
      <Col span={8} style={{textAlign: 'center'}}>{item.homeStatistics.goals} - {item.awayStatistics.goals}</Col>
      <Col span={8} style={{textAlign: 'center'}}>
        {item.awayTeam.name}
        <img src={item.awayTeam.flag && item.awayTeam.flag.url}
          width={50}
        />
      </Col>
    </Row>
  );
}

function renderContent(item) {
  return <div>
    <div>{`${item.dateString} - ${item.startAt}`}</div>
    <div>{item.group.name}</div>
    <div>{item.place}</div>
  </div>
}

function splitByDate(value) {
  const dataSource = value.sort((a, b) => moment(b.date).unix() - moment(a.date).unix())
    .map(v => ({...v, dateString: moment(v.date).format('DD MMMM YYYY')}));
  const grouped = groupBy(dataSource, 'dateString');
  return Object.keys(grouped).map(dateString => {
    return {
      dateString,
      sources: grouped[dateString]
    }
  });
}