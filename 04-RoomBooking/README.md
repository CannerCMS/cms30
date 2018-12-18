## Data Type

``` js
{
  rooms: Array<{
    capacity: number,
    name: string,
    assets: Array<string>,
  }>,
  bookings: Array<{
    room: string, // room ID
    bookingStart: string, // ISO String
    bookingEnd: string, //ISO string
    status: 'RESERVED' | 'CANCELLED',
    cancelReason?: string, // exists when status === 'canceled
    purpose: string,
    user: {
      name: string,
      email: string,
      phone: string
    }
  }>,
}
```