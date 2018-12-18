## Data type

```js
{
  complaints: Array<{
    category: string, // categoryId
    type: 'Complaint' | 'Suggestion' | 'Seeking Information',
    status: 'NEW' | 'OPEN' | 'SOLVED',
    lastUpdated: string, //ISOString
    dueDate: string, //ISOString
    assignedTo: string, // memberId
    raisedBy: string, // memberId
    priority: 'LOW' | 'MEDIUM' | 'HIGH',
    title: string,
    content: string, // textarea
  },
  categories: Array<{
    name: string,
    color: string
  }>,
  members: Array<{
    name: string
  }>
}