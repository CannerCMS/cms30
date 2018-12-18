import React from 'react';
import {Avatar} from 'antd';

export default function renderApplicants(applicants, application, cannerProps) {
  return (
    <>
      {
        applicants.map(applicant => (
          <Avatar
            onClick={() => {
              cannerProps.goTo({
                pathname: `applicants/${applicant.id}`
              })
            }}
            style={{
              cursor: 'pointer'
            }}
            src={applicant.thumb.url}
            key={applicant.id}
          />
        ))
      }
    </>
  )
}