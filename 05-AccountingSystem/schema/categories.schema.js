import CannerScript from 'canner-script';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}]

export default () => (
  <array keyName="categories" title="Categories"
    uiParams={{
      columns
    }}    
  >
    <string keyName="name" title="Name" />
  </array>
);
