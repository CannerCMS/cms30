import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Categories from './schema/categories.schema.js';
import Members from './schema/members.schema.js';
import Complaints from './schema/complaints.schema';

const schema = (
  <root>
    <Complaints />
    <Categories />
    <Members />
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: "20-Complaints"
})
schema.connector = connector;

export default schema
