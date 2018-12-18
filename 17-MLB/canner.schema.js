import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Players from './schema/players.schema';

const schema = (
  <root>
    <Players />
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '17-MLB'
})
schema.connector = connector;

export default schema
