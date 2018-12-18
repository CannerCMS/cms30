// @flow

import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import {Tag} from 'antd';

type Props ={
  data: Object,
  id: string,
  goTo: Funciton
}

class Recruit extends React.Component<Props> {
  componentDidMount() {
    const {data, id} = this.props;
    data && data.refetch({
      where: {
        company: {
          id
        }
      }
    });
  }

  componentDidUpdate() {
    const {data, id} = this.props;
    data && data.refetch({
      where: {
        company: {
          id
        }
      }
    });
  }

  clickTag(id) {
    const {goTo} = this.props;
    goTo({
      pathname: `/jobs/${id}`,
    });
  }

  render() {
    const {data} = this.props;
    if (data && data.jobs) {
      return (
        <>
          {
            data.jobs.map(job => (
              <Tag key={job.id} onClick={() => this.clickTag(job.id)}>{job.job.name}</Tag>
            ))
          }
        </>
      )
    } else {
      return null;
    }
  }
}

const RecruitWithApollo = compose(
  withApollo,
  graphql(gql`
    query companyJobs($where: WhereInput) {
      jobs(where: $where) {
        id
        job {
          id
          name
          __typename
        }
        __typename
      }
    }
  `, {
    variables: {
      where: {
        company: {
          id: 'INITIAL'
        }
      }
    }
  })
)(Recruit);

export default function(column, record, cannerProps) {
  return <RecruitWithApollo  id={record.id} goTo={cannerProps.goTo} />
}