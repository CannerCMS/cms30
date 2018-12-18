import CannerScript, {Default} from 'canner-script';

export default () => (
  <object keyName="cv" title="CV">
    <Default injectValue={{layout: 'horizontal'}}>
      <object keyName="personalProfile" title="Personal Profile" ui="editor" uiParams={{minHeight: '150px'}}/>
      <array keyName="education" title="Education"
        uiParams={{
          columns: [{
            title: 'From',
            dataIndex: 'from'
          }, {
            title: 'To',
            dataIndex: 'to'
          }, {
            title: 'Institution Name',
            dataIndex: 'institutionName'
          }]
        }}
      >
        <dateTime keyName="from" title="From" uiParams={{format: 'YYYY'}} />
        <dateTime keyName="to" title="To" uiParams={{format: 'YYYY'}} />
        <string keyName="institutionName" title="Institution Name" />
      </array>
      <array keyName="workExperience" title="Work Experience"
        uiParams={{
          columns: [{
            title: 'From',
            dataIndex: 'from'
          }, {
            title: 'To',
            dataIndex: 'to'
          }, {
            title: 'Job Position',
            dataIndex: 'jobPosition'
          }, {
            title: 'Company Name',
            dataIndex: 'companyName'
          }]
        }}
      >
        <dateTime keyName="from" title="From" uiParams={{format: 'YYYY'}} />
        <dateTime keyName="to" title="To" uiParams={{format: 'YYYY'}} />
        <string keyName="jobPosition" title="Job Position" />
        <string keyName="companyName" title="Company Name" />
      </array>
      <object keyName="skills" title="Skills">
        <array keyName="technical" title="Technical" ui="tag" />
        <array keyName="interpersonal" title="Interpersonal" ui="tag" />
        <array keyName="other" title="Other" ui="tag" />
      </object>
      <object keyName="hobbiesAndInterests" title="Hobbies and Interests" ui="editor" />
    </Default>
  </object>
)