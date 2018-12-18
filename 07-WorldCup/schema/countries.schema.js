import CannerScript, {Block} from 'canner-script';
import {countryColumns} from './utils';

export default () => (
  <array ui="tableRoute" keyName="countries" title="Countries"
    uiParams={{
      columns: countryColumns
    }}
  >
    <Block>
      <string keyName="name" title="Name" />
      <image keyName="flag" title="Flag" />
    </Block>
  </array>
)