import CannerScript from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Companies from './schema/company.schema';
import Jobs from './schema/jobs.schema';
import JobTypes from './schema/jobTypes.schema';
import Applicants from './schema/applicants.schema';
import Applications from './schema/applications.schema';

const schema = (
  <root>
    <Companies/>
    <Jobs/>
    <JobTypes/>
    <Applicants/>
    <Applications/>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '10'
})
schema.connector = connector;

export default schema
