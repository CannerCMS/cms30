import CannerScript from 'canner-script';

export default () => (
  <array keyName="members" title="Members"
    ui="tableRoute"
    uiParams={{
      size: 'middle',
      bordered: true,
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }]
    }}
  >
    <string keyName="name" title="Name" />
  </array>
)