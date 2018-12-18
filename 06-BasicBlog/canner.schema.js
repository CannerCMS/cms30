import CannerScript, {Body} from 'canner-script';
import Posts from './schema/posts.schema.js';
import Categories from './schema/categories.schema';
import BodyComponent from './components/layout/body';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import {ImgurStorage} from '@canner/storage';

export const imageStorage = new ImgurStorage({
  clientId: 'a214c4836559c77'
});

const schema = (
  <root imageStorage={imageStorage}>
    <Body component={BodyComponent}>
      <Posts />
      <Categories />
    </Body>
  </root>
)

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '06basicblog'
})
schema.connector = connector;

export default schema;
