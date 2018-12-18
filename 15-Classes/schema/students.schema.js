import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Student ID',
  dataIndex: 'studentNumber'
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text, data) => {
    return `${data.firstName} ${data.lastName}`;
  }
}, {
  title: 'Cell Number',
  dataIndex: 'cell'
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Gender',
  dataIndex: 'gender'
}, {
  title: 'Birth Date',
  dataIndex: 'birthDate'
}]

export default () => (
  <array
    keyName="students"
    title="Students"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle',
      bordered: true
    }}
  >
    <number keyName="studentNumber" title="Student ID" required/>
    <string keyName="firstName" title="First Name" required/>
    <string keyName="lastName" title="Last Name" required/>
    <string keyName="address" title="Address" />
    <string keyName="phoneNumber" title="Phone"/>
    <string keyName="cell" title="Cell Phone" required/>
    <string
      required
      keyName="gender"
      title="Gender"
      ui="select"
      uiParams={{options: [{text: 'Female', value: 'FEMALE'}, {text: 'Male', value: 'MALE'}]}}/>
    <string keyName="email" title="Email" required/>
    <dateTime keyName="birthDate" title="Birth Date" required/>
  </array>
)