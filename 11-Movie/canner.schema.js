import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Movies from './schema/movies.schema';
import Actors from './schema/actors.schema';
import Directors from './schema/director.schema';
import Genres from './schema/genres.schema';
const schema = (
  <root>
    <Movies/>
    <Actors/>
    <Directors/>
    <Genres/>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '11'
})
schema.connector = connector;

export default schema
