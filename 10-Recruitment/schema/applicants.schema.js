import CannerScript from 'canner-script';
import {imageStorage} from './utils';
import moment from 'moment';
const columns = [{
  title: 'Thumb',
  dataIndex: 'thumb'
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text, data) => {
    return `${data.firstName} ${data.lastName}`;
  }
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Phone',
  dataIndex: 'phone'
}]

export default () => (
  <array keyName="applicants" title="Applicants"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns,
      bordered: true
    }}>
    <string title="First Name" keyName="firstName" required/>
    <string title="Last Name" keyName="lastName" required/>
    <image title="User Thumb" keyName="thumb" required/>
    <string title="Email" keyName="email" required/>
    <string title="Phone" keyName="phone" required/>
    <object keyName="summary" ui="editor" title="Summary"/>
    <array ui="gallery" title="Personal Gallery" keyName="gallery"/>
    <dateTime title="Create Date" keyName="createDate" ui="dateTime" defaultValue={() => moment(new Date()).format('YYYY/MM/DD')}/>
  </array>
);