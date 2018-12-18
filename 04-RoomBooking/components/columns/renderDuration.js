import moment from 'moment';

export default function(value, record) {
  const {bookingDate, bookingStart, bookingEnd} = record;
  if (!bookingDate || !bookingStart || !bookingEnd) {
    return `Invalid Date`;
  }
  const date = moment(bookingDate).format('YYYY/MM/DD');
  return `${date} ${bookingStart} - ${bookingEnd}`;
}