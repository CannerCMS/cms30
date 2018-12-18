import CannerScript from 'canner-script';
import moment from 'moment';
import {ImgurStorage} from '@canner/storage';
const imageStorage = new ImgurStorage({
  clientId: "a214c4836559c77",
});

export default () => (
  <array keyName="photos" title="Photos" ui="gallery"
    imageStorage={imageStorage}
    uiParams={{
      grid: {lg: 3, md: 6, sm: 6},
      rowHeight: '400px',
      imageStyle: {
        'background-size': 'cover',
        'margin-top': '0px'
      }
    }}
    cacheActions
    controlDeployAndResetButtons
  >
    <string keyName="title" title="Title" />
    <dateTime
      keyName="publishedDate"
      title="Published Date" 
      uiParams={{
        format: 'YYYY/MM/dd HH:mm'
      }}
      disabled
      defaultData={() => moment().toISOString()}
    />
    <relation
      keyName="author"
      title="Author"
      relation={{
        to: 'authors',
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
  </array>
)