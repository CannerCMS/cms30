import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'color',
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

export default () => (
  <array
    keyName="groupTypes"
    title="Group Types"
    uiParams={{
      columns,
      size: "middle",
      bordered: true
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="color" title="Color" packageName="../components/input/customize-string-color"/>
  </array>
)