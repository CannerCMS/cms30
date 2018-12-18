import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Students from './schema/students.schema';
import Courses from './schema/courses.schema';
import Deps from './schema/deps.schema';
import Rooms from './schema/rooms.schema';

const schema = (
  <root>
    <Courses/>
    <Rooms/>
    <Students/>
    <Deps/>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '15'
})
schema.connector = connector;

export default schema
