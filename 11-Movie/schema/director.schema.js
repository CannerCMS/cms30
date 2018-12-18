import CannerScript from 'canner-script';
import {imageStorage} from './utils';
import React from 'react';
const columns = [{
  title: 'Thumb',
  dataIndex: 'thumb'
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text, data) => {
    return `${data.firstName} ${data.lastName}`
  }
}, {
  title: 'Birth',
  dataIndex: 'birth'
}, {
  title: 'Nationality',
  dataIndex: 'nationality'
}]

export default () => (
  <array keyName="directors" title="Directors"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns
    }}>
    <string keyName="firstName" title="First Name" required/>
    <string keyName="lastName" title="Last Name" required/>
    <image keyName="thumb" title="Thumb" required/>
    <string keyName="nationality" title="Nationality" required/>
    <object keyName="intro" ui="editor" title="Introduction"/>
    <dateTime keyName="birth" title="Birth" required/>
  </array>
);