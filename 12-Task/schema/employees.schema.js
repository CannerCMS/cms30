import CannerScript from 'canner-script';
import React from 'react';
import {Tag} from 'antd';

const columns = [{
  title: 'Team',
  dataIndex: 'team',
  render: text => {
    return React.createElement(Tag, {color: text.color}, text.name)
  }
}, {
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Position',
  dataIndex: 'position'
}]

export default () => (
  <array
    keyName="employees"
    title="Employees"
    description="Manage your employees here to list all position and get track their latest activities"
    uiParams={{
      columns,
      bordered: true,
      size: 'middle'
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="email" title="Email" uiParams={{type: 'email'}} required/>
    <string keyName="position" title="Position" required/>
    <relation keyName="team" title="Team"
      relation={{
        to: 'teams',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }}/>
  </array>
)