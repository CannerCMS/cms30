import CannerScript from 'canner-script';
import React from 'react';
import {Tag} from 'antd';

const columns = [{
  title: 'Room Number',
  dataIndex: 'roomNo'
}, {
  title: 'Capacity',
  dataIndex: 'capacity'
}, {
  title: 'Department',
  dataIndex: 'department',
  render: text => {
    return React.createElement(Tag, {color: text.color}, text.name)
  }
}]

export default () => (
  <array
    keyName="rooms"
    title="Rooms"
    uiParams={{
      columns,
      size: 'middle',
      bordered: true
    }}
  >
    <number keyName="roomNo" title="Room Number" required/>
    <number keyName="capacity" title="Capacity" required/>
    <relation keyName="department" title="Department"
      relation={{
        to: 'deps',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }, {
          title: 'Color',
          dataIndex: 'color',
          render: (text) => {
            return React.createElement('div', {style: {
              backgroundColor: text,
              width: '30px',
              height: '20px',
              border: '1px solid #CCC',
              margin: '3px'
            }});
          }
        }]
      }} required/>
  </array>
)