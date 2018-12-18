import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Name',
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

export default () => (
  <array
    keyName="teams"
    title="Teams"
    description="Create a team, to manage your employees into teams"
    uiParams={{
      columns,
      bordered: true,
      size: 'middle'
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="color" title="Color" packageName="../components/input/customize-string-colorCircle" required/>
  </array>
)