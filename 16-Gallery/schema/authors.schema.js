import CannerScript from 'canner-script';

export default () => (
  <array keyName="authors" title="Authors"
    uiParams={{
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }],
      size: 'small'
    }}
  >
    <string keyName="name" title="Name" />
  </array>
)