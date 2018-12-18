import CannerScript from 'canner-script';
import renderColor from '../components/columns/renderColor';

export default () => (
  <array
    keyName="categories"
    title="Categories"
    uiParams={{
      size: 'middle',
      bordered: true,
      columns: [{
        title: 'Name',
        dataIndex: 'name'
      }, {
        title: 'Color',
        dataIndex: 'color',
        render: renderColor
      }]
    }}
  >
    <string keyName="name" title="Name" />
    <string keyName="color" title="Color" uiParams={{
      type: 'color'
    }} />
  </array>
)