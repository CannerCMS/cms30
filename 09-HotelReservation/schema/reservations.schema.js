import CannerScript from 'canner-script';
import tableComponents from '../components/inputs/tableComponents';

const CONFIRMED = 'CONFIRMED';
const CANCELLED = 'CANCELLED';
const statusOptions = [{
  value: CONFIRMED,
  text: 'Confirmed'
}, {
  value: CANCELLED,
  text: 'cancelled'
}];

const columns = [{
  title: 'Guest',
  dataIndex: 'guest.firstName'
}, {
  title: 'Date In',
  dataIndex: 'dateIn'
}, {
  title: 'Date out',
  dataIndex: 'dateOut'
}, {
  title: 'Status',
  dataIndex: 'status'
}];

export default () => (
  <array
    keyName="reservations"
    ui="tableRoute"
    title="Reservations"
    uiParams={{
      columns,
      components: tableComponents
    }}
  >
    <dateTime keyName="dateIn" uiParams={{format: 'YYYY MM DD hh:mm'}} title="Date In" />
    <dateTime keyName="dateOut" title="Date Out" />
    <enum
      keyNmae="status"
      title="Status"
      values={[CONFIRMED, CANCELLED]}
      uiParams={{options: statusOptions}}
    />
    <relation
      keyName="guest"
      title="Guest"
      uiParams={{
        textCol: 'firstName',
        columns: [{
          title: 'First Name',
          dataIndex: 'firstName'
        }]
      }}
      relation={{
        to: 'guests',
        type: 'toOne'
      }}
    />
    <relation
      keyName="rooms"
      ui="multipleSelect"
      uiParams={{
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
      relation={{
        to: 'rooms',
        type: 'toMany'
      }}
    />
  </array>
)