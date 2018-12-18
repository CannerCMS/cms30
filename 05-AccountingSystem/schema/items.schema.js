import CannerScript from 'canner-script';
import TextFilter from '../components/columns/textFilter';
import moment from 'moment';
const categoryFilter = new TextFilter('category.name');
const nameFilter = new TextFilter('name');

const columns = [{
  title: 'Category',
  dataIndex: 'category.name',
  filterDropdown: categoryFilter.renderFilter,
  onFilter: categoryFilter.onFilter,
  render: categoryFilter.render
}, {
  title: 'Name',
  dataIndex: 'name',
  filterDropdown: nameFilter.renderFilter,
  onFilter: nameFilter.onFilter,
  render: nameFilter.render
}, {
  title: 'Amount',
  dataIndex: 'amount',
  sorter: (a, b) => b.amount - a.amount
}, {
  title: 'Date',
  dataIndex: 'date',
  render: value => moment(value).format('YYYY/MM/DD'),
  sorter: (a, b) => (moment(b.date).unix() - moment(a.date).unix())
}]

export default ({attributes}) => (
  <array
    keyName={attributes.keyName}
    uiParams={{
      columns
    }}
    title={attributes.title}
  >
    <relation keyName="category"
      title="Category"
      relation={{
        to: 'categories',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
    />
    <string keyName="name" title="Name" />
    <number keyName="amount" title="Amount" />
    <dateTime keyName="date" title="Date" />
  </array>
)