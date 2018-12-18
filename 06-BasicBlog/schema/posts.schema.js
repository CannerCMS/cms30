/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Tabs, Default} from 'canner-script';
import Filter from '../components/toolbar/filter';

const columns = [{
  title: 'Title',
  dataIndex: 'title'
}, {
  title: '',
  dataIndex: 'coverPicture'
}];

const Posts = () => <array
  keyName="posts"
  ui="tableRoute"
  title="posts"
  uiParams={{
    columns
  }}
>
  <toolbar>
    <pagination />
    <filter component={Filter}
      options={[{
        text: 'All',
        key: 'all',
        condition: {
        }
      }, {
        text: 'Published',
        key: 'published',
        condition: {
          draft: {
            eq: false
          }
        }
      }, {
        text: 'Draft',
        key: 'draft',
        condition: {
          draft: {
            eq: true
          }
        }
      }]}
    />
  </toolbar>
  <Tabs>
    <Default title="Basic" keyName="basic">
      <string
        keyName="title"
        title="title"
        required
        layout="horizontal"
      />
      <object keyName="content" title="" ui="editor"
        uiParams={{
          minHeight: '60vh'
        }}
      />
    </Default>
    <Default title="Options" injectValue={{layout: 'horizontal'}} keyName="options">
      <boolean keyName="draft" title="Draft" />
      <image keyName="coverPicture" title="Cover Picture"/>
      <boolean keyName="topLevel" title="Parent page" />
      <relation keyName="categories"
        ui="multipleSelect"
        title="categories"
        relation={{type: 'toMany', to: 'categories'}}
        uiParams={{
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }]
        }}
      />
    </Default>
  </Tabs>
</array>;

export default Posts;

