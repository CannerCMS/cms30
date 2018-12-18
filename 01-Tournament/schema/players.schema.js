import CannerScript from 'canner-script';
import {HoveredBlock} from './utils.schema';
import {imageStorage} from './utils';

const columns = [{
  title: 'Thumb',
  dataIndex: 'thumb'
}, {
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}];

export default () => (
  <array keyName="players" title="Players"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle'
    }}
    imageStorage={imageStorage}
  >
    <HoveredBlock injectValue={{layout: 'horizontal'}}>
      <string keyName="name" title="Name" required />
      <string keyName="age" title="Age" required />
      <object keyName="about" title="About player" ui="editor" />
      <image  keyName="thumb" title="Thumb" required
        validation={{
          validator: (img, reject) => {
            if (!img.url) {
              return reject('should be required')
            }
          }
        }}
      />
    </HoveredBlock>
  </array>
)