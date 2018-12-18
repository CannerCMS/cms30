import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import TimeTypes from './schema/timeTypes.schema';
import Team from './schema/teams.schema';
import Employees from './schema/employees.schema';
import Tasks from './schema/tasks.schema';

const schema = (
  <root>
    <Tasks/>
    <Team/>
    <Employees/>
    <TimeTypes/>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '12'
})
schema.connector = connector;

export default schema
