## Data Type

```js
{
  groups: Array<{
    name: string,
    description: string,
    active: boolean,
    groupType: string, // groupTypeId
  }>,
  groupTypes: Array<{
    name: string,
    color: string, // color
  }>,
  members: Array<{
    name: string,
    nickName: string,
    homePhoneNumber: string,
    cellPhoneNumber: string,
    email: string,
    gender: 'FEMALE' | 'MALE',
    birthDate: dateTime.
    createdDate: dateTime
  }>,
  groupMembers: Array<{
    role: string,
    member: string, // memberId
    group: string, // groupId
    status: 'JOIN' | 'EXIT'
    joinDate: dateTime,
    exitDate: dateTime
  }>
}
```