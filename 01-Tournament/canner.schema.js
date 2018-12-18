import CannerScript, {Body} from 'canner-script';
import Matches from './schema/matches.schema';
import Players from './schema/players.schema';
import Teams from './schema/teams.schema';
import ArrayBody from './components/layouts/ArrayBody';
import {LocalStorageConnector} from 'canner-graphql-interface';
import dataDefault from './data.json';

const schema = (
  <root>
    <Body component={ArrayBody}>
      <Matches />
      <Players />
      <Teams />
    </Body>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData: dataDefault,
  localStorageKey: '01tournament'
})
schema.connector = connector;
export default schema;
