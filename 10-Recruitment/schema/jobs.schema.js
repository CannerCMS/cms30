import CannerScript from 'canner-script';
import {imageStorage} from './utils';

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  render: name => name || '-'
}, {
  title: 'Company Name',
  dataIndex: 'company.name',
  render: name => name || '-'
}, {
  title: 'Job Type',
  dataIndex: 'job.name'
}, {
  title: 'Required',
  dataIndex: 'employedNeeded'
}, {
  title: 'Start Date',
  dataIndex: 'startDate'
}, {
  title: 'Post Date',
  dataIndex: 'postedDate'
}]

export default () => (
  <array keyName="jobs" title="Jobs"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns,
      size: 'middle',
      bordered: true
    }}
  >
    <toolbar>
      <actions>
        <filter />
      </actions>
      <filter>
        <textFilter field="title" label="Title"/>
        <textFilter field="company.name" label="Company Name"/>
        <textFilter field="job.name" label="Job Type"/>
        <dateFilter field="startDate" label="Start Date"/>
        <dateFilter field="postedDate" label="Post Date"/>
      </filter>
    </toolbar>
    <string
      keyName="title"
      title="Title"
      ui="textarea"
      uiParams={{
        rows: 3
      }}
    />
    <relation keyName="company" title="Company"
      relation={{
        to: 'companies',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }}/>
    <relation
      keyName="job"
      title="Job"
      relation={{
        to: 'jobTypes',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Job Title',
          key: 'name',
          dataIndex: 'name'
        }]
      }}
      ui="singleSelect"
      />
    <object keyName="description" ui="editor" title="Description"/>
    <array ui="gallery" title="Job Gallery" keyName="gallery"/>
    <dateTime
      title="Posted Date"
      keyName="postedDate"
      ui="dateTime"
      required
    />
    <dateTime
      title="Start Date"
      keyName="startDate"
      ui="dateTime"
      required
    />
    <number title="How many needed?" keyName="employedNeeded" required/>
  </array>
);