import moment from 'moment';

export default function renderDate(date) {
  return moment(date).format('YYYY/MM/DD');
}