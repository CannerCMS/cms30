import CannerScript, {Body} from 'canner-script';
import Bookings from './schema/bookings.schema';
import Rooms from './schema/rooms.schema';
import Calendar from './schema/calendar.schema';
import CalendarBody from './components/layouts/CalendarBody';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';

const schema = (
  <root>
    <Body component={CalendarBody}>
      <Calendar />
    </Body>
    <Bookings />
    <Rooms />
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '04roombooking'
})
schema.connector = connector;

export default schema
