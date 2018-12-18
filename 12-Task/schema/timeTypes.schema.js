import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Short Name',
  dataIndex: 'shortName',
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
    keyName="timeTypes"
    title="Time Types"
    uiParams={{
      columns,
      bordered: true,
      size: 'middle'
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="shortName" title="Short Name" description="A short naming of your time type" required/>
    <string keyName="color" title="Color" packageName="../components/input/customize-string-color"/>
  </array>
)