import CannerScript from 'canner-script';
import tableComponents from '../components/inputs/tableComponents';
import renderImages from '../components/columns/renderImages';

const columns = [{
  title: 'Images',
  dataIndex: 'images',
  render: renderImages
}, {
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Description',
  dataIndex: 'description',
}, {
  title: 'Price',
  dataIndex: 'price'
}]

export default () => (
  <array
    keyName="roomTypes"
    title="Room Types"
    uiParams={{
      columns,
      components: tableComponents
    }}
  >
    <string keyName="name" title="Name" />
    <string keyName="description" title="Description" />
    <number keyName="price" title="Price" />
    <array keyName="images" title="images" ui="gallery" />
  </array>
)