## Data Type

```js
{
  tasks: Array<{
    name: string,
    date: dateTime, // ISOString
    description: string, //textarea
    time: number, // time (in minutes)
    timeType: string, // timeTypeId
    employee: string, // employeeId
  }>,
  employees: Array<{
    name: string,
    email: string,
    lastestActivity: dataTime, // ISOString
  }>,
  timeTypes: Array<{
    name: string,
    shortName: string,
    color: string, // color picker
  }>
}
```