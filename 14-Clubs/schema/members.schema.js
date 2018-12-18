import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Nick Name',
  dataIndex: 'nickName'
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Gender',
  dataIndex: 'gender'
}, {
  title: 'Birth Date',
  dataIndex: 'birthDate'
}, {
  title: 'Create Date',
  dataIndex: 'createDate'
}]

export default () => (
  <array
    keyName="members"
    title="Members"
    ui="tableRoute"
    uiParams={{
      columns,
      size: "middle",
      bordered: true
    }}
  >
    <string keyName="name" title="Name" required/>
    <string keyName="nickName" title="Nick Name" required/>
    <string keyName="homePhoneNumber" title="Home Phone" />
    <string keyName="cellPhoneNumber" title="Cell Phone" />
    <string
      keyName="gender"
      title="Gender"
      ui="select"
      uiParams={{options: [{text: 'Female', value: 'FEMALE'}, {text: 'Male', value: 'MALE'}]}}/>
    <string keyName="email" title="Email"/>
    <dateTime keyName="birthDate" title="Birth Date" required/>
    <dateTime keyName="createDate" title="Create Date" required/>
  </array>
)