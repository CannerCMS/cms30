import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import CV from './schema/cv.schema';

const schema = (
  <root>
    <CV />
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: "18-CV"
})
schema.connector = connector;

export default schema
