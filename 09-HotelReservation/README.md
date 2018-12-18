## Data model
```js
{
  reservations: Array<{
    dateIn: string,
    dataOut: string,
    total: number,
    status: 'CONFIRMED' | 'CANCELLED',
    guest: string, // guestId
    rooms: Array<string>, // roomIds
  }>,
  rooms: Array<{
    name: string,
    description: string,
    capacity: number,
    type: string, // roomTypeId
  }>,
  roomTypes: Array<{
    name: string,
    description: string,
    price: string,
    images: Array<Image>
  }>,
  guests: Array<{
    firstName: string,
    lastName: string
  }>
}
```