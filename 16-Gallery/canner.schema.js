import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import Authors from './schema/authors.schema.js';
import Photos from './schema/photos.schema.js';
import {ImgurStorage} from '@canner/storage';
import defaultData from './data.json';
const imgageStorage = new ImgurStorage({
  clientId: 'a214c4836559c77'
});
const schema = (
  <root imgageStorage={imgageStorage}>
    <Authors />
    <Photos />
    <object keyName="test">
      <array keyName="photos" title="Photos" ui="gallery" />
    </object>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '16-Gallery'
})
schema.connector = connector;

export default schema
