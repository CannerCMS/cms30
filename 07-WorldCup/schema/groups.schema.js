import CannerScript from 'canner-script';

export default () => (
  <array keyName="groups" title="Groups"
    uiParams={{
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }]
    }}
  >
    <string keyName="name" title="Name" />
  </array>
);
