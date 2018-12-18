import CannerScript from 'canner-script';
import tableComponents from '../components/inputs/tableComponents';

export default () => (
  <array
    keyName="guests"
    title="Guests"
    uiParams={{
      components: tableComponents
    }}
  >
    <string keyName="firstName" title="First Name" />
    <string keyName="lastName" title="Last Name" />
  </array>
)