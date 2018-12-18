import CannerScript from 'canner-script';
import {imageStorage} from './utils';
import React from 'react';
import renderRecruting from '../components/columns/renderRecruiting'

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Logo',
  dataIndex: 'logo',
  render: (text) => {
    return React.createElement('img', {height: '50px', src: text.url});
  }
}, {
  title: 'Recruiting',
  dataIndex: 'recruiting',
  render: renderRecruting
}]

export default () => (
  <array keyName="companies" title="Companies"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns,
      bordered: true
  }}>
    <toolbar>
      <filter>
        <textFilter field="name" label="Name" alwaysDisplay/>
      </filter>
    </toolbar>
    <string keyName="name" title="Company Name" required/>
    <image keyName="logo" title="Company Logo" required/>
    <object keyName="description" ui="editor" title="Description"/>
  </array>
);