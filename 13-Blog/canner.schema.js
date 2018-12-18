/* eslint-disable react/prop-types */

import CannerScript, {Body as BodyLayout} from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import Posts from './schema/posts.schema.js';
import Body from './components/layouts/Body';
import defaultData from './data.json';

import {ImgurStorage} from '@canner/storage';
const imageStorage = new ImgurStorage({
  clientId: "a214c4836559c77",
});

const schema = (
  <root imageStorage={imageStorage}>
    <BodyLayout component={Body}>
      <Posts />
    </BodyLayout>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '13'
})
schema.connector = connector;

export default schema
