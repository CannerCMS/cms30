import CannerScript from 'canner-script';
import React from 'react';
import {imageStorage} from './utils';
import renderApplicants from '../components/columns/renderApplicants';
import renderJobTitle from '../components/columns/renderJobTitle';

const columns = [{
  title: 'Job',
  dataIndex: 'job',
  render: renderJobTitle
}, {
  title: 'Applicants',
  dataIndex: 'applicants',
  width: '50%',
  render: renderApplicants
}]

export default () => (
  <array keyName="applications" title="Applications"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns,
      bordered: true
    }}
  >
    <relation keyName="job" title="Job"
      relation={{
        to: 'jobs',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'title',
        columns: [{
          title: "Title",
          key: 'title',
          dataIndex: 'title'
        }],
        bordered: true
      }}
    />
    <relation
      keyName="applicants"
      title="Applicants"
      relation={{
        to: 'applicants',
        type: 'toMany'
      }}
      uiParams={{
        columns: [{
          title: 'Name',
          key: 'name',
          dataIndex: 'name',
          render: (text, data) => {
            return `${data.firstName} ${data.lastName}`;
          }
        }]
      }}
      ui="multipleSelect"
      />
  </array>
);