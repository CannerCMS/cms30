import CannerScript from 'canner-script';
const columns = [{
  title: 'Name',
  dataIndex: 'name'
}]

export default () => (
  <array keyName="jobTypes" title="Job Title"
    description="In this section, you can create different job titles for jobs to select."
    uiParams={{
      columns,
      bordered: true
    }}>
    <string keyName="name" title="Title Name"/>
  </array>
);