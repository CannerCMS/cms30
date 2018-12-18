## Data type

```js
{
  students: Array<{
    studentNumber: number,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    cellphoneNUmber: string,
    email: string,
    gender: 'FEMALE' | 'MALE',
    dateOfBirth: dateTime, 
  }>,
  courses: Array<{
    courseNumber: number,
    name: string,
    description: string,
    room: string, // roomId
    students: Array<string>, // studentIds
  }>,
  departments: Array<{
    name: string,
    color: string
  }>,
  rooms: Array<{
    department: string, // depId
    roomNo: number,
    capacity: number
  }>
}
```