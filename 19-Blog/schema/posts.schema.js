import CannerScript from 'canner-script';

export default () => (
  <array keyName="posts" title="Posts"
    ui="tableRoute"
    uiParams={{
      columns: [{
        title: 'Title',
        dataIndex: 'title',
        width: '60%'
      }, {
        title: 'Date',
        dataIndex: 'publishedAt'
      }]
    }}
  >
    <string keyName="title" title="Title" />
    <string keyName="leadSentence" title="Lead Sentence" />
    <dateTime keyName="publishedAt" title="Published At" />
    <array keyName="tag" title="Tag" ui="tag"/>
    <object keyName="content" title="Content" ui="editor" />
  </array>
)