import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Active',
  dataIndex: 'active'
}]

export default () => (
  <array
    keyName="groups"
    title="Groups"
    uiParams={{
      columns,
      size: "middle",
      bordered: true
    }}
  >
    <string keyName="name" title="Name" required/>
    <object ui="editor" keyName="description" title="Description"/>
    <boolean keyName="active" title="Active"/>
    <relation keyName="groupType" title="Group Type"
      relation={{
        to: 'groupTypes',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }, {
          title: 'Color',
          dataIndex: 'color',
          render: text => {
            return React.createElement('div', {style: {
            width: '30px',
            height: '30px',
            borderRadius: '15px',
            backgroundColor: text
            }})
          }
        }]
      }} required/>
  </array>
)