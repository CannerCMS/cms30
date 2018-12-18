import CannerScript, {Body} from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import Countries from './schema/countries.schema';
import Matches from './schema/matches.schema';
import Groups from './schema/groups.schema';
import BodyComponent from './components/layouts/body';
import defaultData from './data.json';

const schema = (
  <root>
    <Body component={BodyComponent}>
      <Matches />
      <Countries />
      <Groups />
    </Body>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '07worldcup'
});
schema.connector = connector;

export default schema
