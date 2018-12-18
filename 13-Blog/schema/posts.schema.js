import CannerScript, {Focus, Default, Block} from 'canner-script';
import Filter from '../components/toolbar/Filter';
import moment from 'moment';

const columns = [{
  title: 'Title',
  dataIndex: 'title'
}];
const Posts = () => <array
  keyName="posts"
  ui="tableRoute"
  title="posts"
  description="Front page is showing your lastest posts."
  uiParams={{
    columns
  }}
  cacheActions
  controlDeployAndResetButtons
  packageName="../components/inputs/customize-array-optionList"
>
  <toolbar>
    <filter
      component={Filter}
      options={[{
        key: 'All',
        label: 'All',
        condition: {
        }
      }, {
        key: 'Draft',
        label: 'Draft',
        condition: {
          draft: {
            eq: true
          }
        }
      }, {
        key: 'trashed',
        label: 'Trashed',
        condition: {
          trashed: {
            eq: true
          }
        }
      }]}
    />
  </toolbar>
  <Block bordered>
    <Focus focus={['title', 'content']}>
      <string keyName="title" title="title" required />
      <object keyName="content" title="Content" ui="editor" uiParams={{minHeight: '700px'}} />
      <Default title="Status" keyName="status">
        <boolean keyName="trashed" />
        <boolean keyName="draft" />
      </Default>
      <image keyName="featureImage" title="Feature Image"/>
      <Default title="Page Property" keyName="page">
        <boolean keyName="topLevel" title="Parent page" />
        <number keyName="order" title="Order" uiParams={{min: 0}}/>
        <dateTime keyName="createdDate" title="Created Date" defaultValue={() => moment().toISOString()}/>
      </Default>
      <Default title="Share" keyName="share">
        <boolean keyName="showShareButton" title="Show sharing button" />
        <boolean keyName="showLikeButton" title="Show like button"/>
      </Default>
    </Focus>
  </Block>
</array>;

export default Posts;

