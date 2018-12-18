import CannerScript from 'canner-script';
import {HoveredBlock} from './utils.schema';
import {imageStorage} from './utils';

const columns = [{
  title: 'Logo',
  dataIndex: 'logo'
}, {
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Head Couch',
  dataIndex: 'couch'
}]

export default () => (
  <array keyName="teams" title="Teams"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle'
    }}
    imageStorage={imageStorage}
  >
    <HoveredBlock injectValue={{layout: 'horizontal'}}>
      <string keyName="name" title="Team name" required />
      <image keyName="logo" title="Team logo" required />
      <relation keyName="players" title="Players"
        ui="multipleSelect"
        relation={{
          to: 'players',
          type: 'toMany'
        }}
        uiParams={{
          columns: [{
            title: 'Picture',
            dataIndex: 'thumb'
          }, {
            title: 'Name',
            dataIndex: 'name'
          }, {
            title: 'Age',
            dataIndex: 'age'
          }]
        }}
        required
        validation={{
          validator: (players, reject) => {
            if (players.length < 3) {
              return reject('should be at least 3 players');
            }
          }
        }}
      />
      <string keyName="couch" title="Head Couch" required />
    </HoveredBlock>
  </array>
)