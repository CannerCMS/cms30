import CannerScript from 'canner-script';
import React from 'react';
import {Tag} from 'antd';

const columns = [{
  title: 'Time (hours)',
  dataIndex: 'time'
}, {
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Date',
  dataIndex: 'date',
}, {
  title: 'Employee',
  dataIndex: 'employee',
  render: text => {
    return React.createElement(Tag, {color: text.color}, text.name)
  }
}, {
  title: 'TimeType',
  dataIndex: 'timeType',
  render: text => {
    return React.createElement(Tag, {color: text.color}, text.name)
  }

}]

export default () => (
  <array
    keyName="tasks"
    title="Tasks"
    description="Manage your tasks time slot for your employees"
    uiParams={{
      columns
    }}
  >
    <string keyName="name" title="Task Name" required/>
    <dateTime keyName="date" title="Date" required/>
    <number keyName="time" title="Time (hours)" required/>
    <object keyName="desc" title="Description" ui="editor"/>
    <relation keyName="timeType" title="Time Type"
      relation={{
        to: 'timeTypes',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }} required/>
    <relation keyName="employee" title="Employee"
      relation={{
        to: 'employees',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }} required/>
  </array>
)