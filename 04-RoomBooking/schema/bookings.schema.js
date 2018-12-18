import CannerScript, {Default, Block, Condition} from 'canner-script';
import renderDuration from '../components/columns/renderDuration';
import renderSelect from '../components/columns/renderSelect';

const RESERVED = 'RESERVED';
const CANCELLED = 'CANCELLED';
const statusOptions = [{
  value: RESERVED,
  text: 'Reserved',
  color: 'green'
}, {
  value: CANCELLED,
  text: 'Cancelled',
  color: 'red'
}];

const columns = [{
  title: 'Duration',
  dataIndex: '',
  render: renderDuration
}, {
  title: 'Status',
  dataIndex: 'status',
  render: (...args) => renderSelect(...args, statusOptions, 'status')
}, {
  title: 'Purpose',
  dataIndex: 'purpose'
}, {
  title: 'UserName',
  dataIndex: 'user.name'
}]

export default () => (
  <array keyName="bookings" title="Bookings"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle'
    }}
  >
    <Default injectValue={{layout: 'horizontal'}}>
      <relation keyName="room"
        title="Room"
        relation={{
          to: 'rooms',
          type: 'toOne'
        }}
        uiParams={{
          textCol: 'name',
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }]
        }}
        required
      />
      <dateTime keyName="bookingDate" title="Bookting Date" required />
      <string ui="time" keyName="bookingStart" title="Booking Start" uiParams={{format: 'HH:00'}} required />
      <string ui="time" keyName="bookingEnd" title="Booking End" uiParams={{format: 'HH:00'}} required />
      <Condition match={(record, operator) => operator === 'update'}>
        <enum keyName="status" values={[RESERVED, CANCELLED]}
          title="Status"
          defaultValue={() => RESERVED}
          uiParams={{
            options: statusOptions
          }}
        />
      </Condition>
      <string keyName="purpose" title="Purpose" required />
    </Default>
    <object keyName="user">
      <Block title="User">
        <string keyName="name" title="Name" required />
        <string keyName="email" title="Email" required />
        <string keyName="phone" title="Phone" required />
      </Block>
    </object>
  </array>
)