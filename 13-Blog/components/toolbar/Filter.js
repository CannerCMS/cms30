// @flow

import React from 'react';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;
type Props = {
  options: Array<Object>,
  changeFilter: Function
}

export default class Filter extends React.Component<Props> {
  changeTab = (key: string) => {
    const {options, changeFilter} = this.props;
    const filter = options.find(item => item.key === key);
    changeFilter(filter.condition);
  }

  render() {
    const {options} = this.props;
    return (
      <div
        style={{
          background: '#fff',
          border: '1px solid #ddd',
          width: '100%'
        }}
      >
        <Tabs defaultActiveKey={options[0].key} onChange={this.changeTab}>
          {options.map(filter => (
            <TabPane tab={filter.label} key={filter.key} />
          ))}
        </Tabs>
      </div>
    );
  }
}