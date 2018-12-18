import CannerScript, {Body} from 'canner-script';
import Albums from './schema/albums.schema';
import Artists from './schema/artists.schema';
import Songs from './schema/songs.schema';
import ArrayBody from './components/layouts/ArrayBody';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';

const schema = (
  <root>
    <Body component={ArrayBody}>
      <Albums />
      <Artists />
      <Songs />
    </Body>
  </root>
);


const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '02album'
})
schema.connector = connector;

export default schema
