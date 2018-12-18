import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
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

export default () => (
  <array
    keyName="deps"
    title="Departments"
    uiParams={{
      columns,
      size: 'middle',
      bordered: true
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="color" title="Color" uiParams={{type: 'color'}} required/>
  </array>
)