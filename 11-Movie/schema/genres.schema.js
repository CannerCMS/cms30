import CannerScript from 'canner-script';
const columns = [{
  title: 'Type',
  dataIndex: 'name'
}]

export default () => (
  <array keyName="genres" title="Genres"
    description="In this section, genres for the movies."
    uiParams={{
      columns
    }}>
    <string keyName="name" title="Name"/>
  </array>
);