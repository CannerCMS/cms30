import CannerScript from 'canner-script';
import moment from 'moment';
import renderTag from '../components/columns/renderTag';

const columns = [{
  title: 'Title',
  dataIndex: 'title'
}, {
  title: 'Type',
  dataIndex: 'type'
}, {
  title: 'Categories',
  dataIndex: 'categories',
  render: categories => categories.map(category => renderTag(category.name, category.color))
}, {
  title: 'Last updated',
  dataIndex: 'lastUpdated',
  render: time => time ? moment(time).fromNow() : '-'
}, {
  title: 'Priority',
  dataIndex: 'priority'
}, {
  title: 'Assigned To',
  dataIndex: 'assignedTo.name'
}, {
  title: 'Raised By',
  dataIndex: 'raisedBy.name'
}]

export default () => (
  <array keyName="complaints"
    title="Complaints"
    ui="tableRoute"
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
        <selectFilter
          label="Type"
          options={[{
            text: 'Complaint',
            condition: {
              type: {eq: 'Complaint'}
            }
          }, {
            text: 'Suggestion',
            condition: {
              type: {eq: 'Suggestion'}
            }
          }, {
            text: 'Seeking Information',
            condition: {
              type: {eq: 'Seeking Information'}
            }
          }]}
        />
      </filter>
      <sorter
        defaultField="lastUpdated"
        options={[{
          label: 'Last Updated',
          field: 'lastUpdated',
        }, {
          label: 'Due Date',
          field: 'dueDate'
        }]}
      />
      <pagination />
    </toolbar>
    <string keyName="title" title="Title" required />
    <string keyName="content" title="Content" ui="textarea" required />
    <relation keyName="categories" title="Category"
      ui="multipleSelect"
      relation={{
        type: 'toMany',
        to: 'categories'
      }}
      uiParams={{
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
    />
    <string keyName="type"
      title="Type"
      ui="select"
      uiParams={{
        options: [{
          text: 'Complaint',
          value: 'Complaint'
        }, {
          text: 'Suggestion',
          value: 'Suggestion'
        }, {
          text: 'Seeking Information',
          value: 'Seeking Information'
        }]
      }}
    />
    <dateTime keyName="lastUpdated" title="Last Updated"/>
    <dateTime keyName="dueDate" title="Due Date" />
    <relation keyName="assignedTo" 
      title="Assigned To"
      relation={{
        to: 'members',
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
    <relation keyName="raisedBy" 
      title="Raised By"
      relation={{
        to: 'members',
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
    <string keyName="priority" title="Priorty"
      ui="select"
      uiParams={{
        options: [{
          text: 'LOW',
          value: 'LOW'
        }, {
          text: 'MEDIUM',
          value: 'MEDIUM'
        }, {
          text: 'HIGH',
          value: 'HIGH'
        }]
      }}
    />
  </array>
)