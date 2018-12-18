import CannerScript from 'canner-script';
import tableComponents from '../components/inputs/tableComponents';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Type',
  dataIndex: 'type.name'
}, {
  title: 'Price',
  dataIndex: 'type.price'
}, {
  title: 'Capacity',
  dataIndex: 'capacity'
}]

export default () => (
  <array
    keyName="rooms"
    title="Rooms"
    ui="tableRoute"
    uiParams={{
      columns,
      components: tableComponents
    }}
  >
    <string keyName="name" title="Name" />
    <string keyName="description" title="Description" ui="textarea" />
    <number keyName="capacity" title="Capacity" />
    <relation keyName="type" title="Type"
      relation={{
        type: 'toOne',
        to: 'roomTypes'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }, {
          title: 'Description',
          dataIndex: 'description'
        }, {
          title: 'Price',
          dataIndex: 'price'
        }]
      }}
    />
  </array>
)