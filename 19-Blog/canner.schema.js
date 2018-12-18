import CannerScript, {Body} from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Posts from './schema/posts.schema';
import BodyComponent from './components/layout/body';
const schema = (
  <root>
    <Body component={BodyComponent}>
      <Posts />
    </Body>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: "19-Blog"
})
schema.connector = connector;

export default schema
