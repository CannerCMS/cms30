import moment from 'moment';

export default function renderDate(ISOString) {
  return moment(ISOString).format('YYYY MM/DD');
}