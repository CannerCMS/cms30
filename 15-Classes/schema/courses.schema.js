import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Course Number',
  dataIndex: 'courseNo'
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text) => {
    return React.createElement('b', {}, text)
  }
}, {
  title: 'Room',
  dataIndex: 'room',
  render: (text) => {
    return `${text.roomNo} (${text.capacity} people)`
  }
}, {
  title: 'Total students',
  dataIndex: 'student',
  render: (text) => {
    return text.length;
  }
}]

export default () => (
  <array
    keyName="courses"
    title="Courses"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle',
      bordered: true
    }}
  >
    <toolbar>
      <actions>
        <filter /> 
      </actions>
      <sorter
        defaultField="courseNo"
        options={[
          { label: "Course No", field: "courseNo", defaultOrder: "desc" }
        ]}
      />
      <filter>
        <textFilter
          label="Name"
          field="name"
          placeholder="Enter Name"
        />
        <textFilter
          label="Course No"
          field="courseNo"
          placeholder="Course No"
        />
      </filter>
    </toolbar>
    <number keyName="courseNo" title="Course Number" required/>
    <string keyName="name" title="Name" required/>
    <string ui="textarea" keyName="description" title="Description"/>
    <relation keyName="room" title="Room"
      relation={{
        to: 'rooms',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'roomNo',
        columns: [{
          title: "Room No",
          key: 'roomNo',
          dataIndex: 'roomNo'
        }, {
          title: 'Capacity',
          dataIndex: 'capacity'
        }]
      }} required/>
    <relation keyName="student" title="Students"
      relation={{
        to: 'students',
        type: 'toMany'
      }}
      ui="multipleSelect"
      uiParams={{
        textCol: (data) => `${data.firstName} ${data.lastName}`,
        columns: [{
          title: "Student No",
          key: 'studentNumber',
          dataIndex: 'studentNumber'
        }, {
          title: 'Name',
          dataIndex: 'name',
          render: (text, data) => {
            return `${data.firstName} ${data.lastName}`;
          }
        }]
      }} required/>
      <relation keyName="department" title="Department"
        relation={{
          to: 'deps',
          type: 'toOne'
        }}
        uiParams={{
          textCol: (data) => data && data.name,
          columns: [{
            title: 'Name',
            dataIndex: 'name',
            render: (text, data) => {
              return data && data.name;
            }
          }]
        }} required/>
  </array>
)