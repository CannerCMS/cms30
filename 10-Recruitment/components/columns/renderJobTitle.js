import React from 'react';

export default function(job, application, cannerProps) {
  return (
    <a href="javasript:;"
      onClick={() => cannerProps.goTo({
        pathname: `jobs/${job.id}`
      })}
    >{job.title}</a>
  )
}