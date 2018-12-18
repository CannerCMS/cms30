import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import GroupTypes from './schema/groupTypes.schema';
import Groups from './schema/groups.schema';
import Members from './schema/members.schema';
import GroupMembers from './schema/groupMembers.schema';

const schema = (
  <root>
    <GroupMembers/>
    <Members/>
    <Groups/>
    <GroupTypes/>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData
})
schema.connector = connector;

export default schema
