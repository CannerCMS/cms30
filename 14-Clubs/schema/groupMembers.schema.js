import CannerScript from 'canner-script';
import React from 'react';

const columns = [{
  title: 'Role',
  dataIndex: 'role'
}, {
  title: 'Member Name',
  dataIndex: 'member.name'
}, {
  title: 'Group',
  dataIndex: 'group.name'
}, {
  title: 'Join Date',
  dataIndex: 'joinDate'
}, {
  title: 'Exit Date',
  dataIndex: 'exitDate'
}]

export default () => (
  <array
    keyName="groupMembers"
    title="Group Members"
    ui="tableRoute"
    uiParams={{
      columns,
      bordered: true,
      size: 'middle'
    }}
  >
    <toolbar>
      <actions></actions>
      <filter>
        <textFilter field="group.name" label="Search Group Name" placeholder="group name" alwaysDisplay />
        <textFilter field="member.name" label="Search Member Name" placeholder="member name" alwaysDisplay />
        <textFilter field="role" label="Search Role" placeholder="role" alwaysDisplay />
      </filter>
      <sorter
        defaultField="joinDate"
        options={[
          { label: "Join Date", field: "joinDate", defaultOrder: "desc" },
          { label: "Exit Date", field: "exitDate", defaultOrder: "desc" },
        ]}      
      />
    </toolbar>
    <string keyName="role" title="Role" required/>
    <relation keyName="member" title="Member"
      relation={{
        to: 'members',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }, {
          title: "Email",
          key: 'email',
          dataIndex: 'email'
        }]
      }} required/>
    <relation keyName="group" title="Group"
      relation={{
        to: 'groups',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }} required/>
    <string
      keyName="status"
      title="Status"
      ui="select"
      uiParams={{options: [{text: 'Join', value: 'JOIN'}, {text: 'Exit', value: 'EXIT'}]}}/>
    <dateTime keyName="joinDate" title="Join Date" required/>
    <dateTime keyName="exitDate" title="Exit Date"/>
  </array>
)