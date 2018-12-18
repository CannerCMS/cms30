import CannerScript from 'canner-script';

export default () => (
  <array keyName="categories"
    title="Categories"
    uiParams={{
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }]
    }}
  >
    <string keyName="name" title="Name" />
  </array>
)