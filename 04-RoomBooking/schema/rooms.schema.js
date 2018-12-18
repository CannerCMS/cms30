import CannerScript, {Default} from 'canner-script';
import renderAssets from '../components/columns/renderAssets';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Capacity',
  dataIndex: 'capacity'
}, {
  title: 'Assets',
  dataIndex: 'assets',
  render: renderAssets
}]

export default () => (
  <array keyName="rooms" title="Rooms" ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle'
    }}
  >
    <Default injectValue={{layout: 'horizontal'}}>
      <string keyName="name" title="Name" required />
      <number keyName="capacity" title="Capacity" required />
      <array keyName="assets" title="Assets" ui="tag"/>
    </Default>
  </array>
);
