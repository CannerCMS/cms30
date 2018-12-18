import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import Reservations from './schema/reservations.schema';
import Rooms from './schema/rooms.schema';
import RoomTypes from './schema/roomTypes.schema';
import Guests from './schema/guests.schema';

import defaultData from './data.json';
const schema = (
  <root>
    <Reservations />
    <Rooms />
    <RoomTypes />
    <Guests />
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '09hotelreservation'
})
schema.connector = connector;

export default schema
