## Reference

https://www.vertabelo.com/blog/technical-articles/hire-or-get-hired-a-data-model-for-the-recruitment-process

## Data Type

```js
{
  companies: Array<{
    name: string,
    description: string
  }>,
  jobs: Array<{
    company: string, // companyId
    jobTitle: string, // jobTypeId
    description: string,
    postedDate: string, // ISOString
    startDate: string,
    employedNeeded: number
  }>,
  jobTypes: Array<{
    name: string,
  }>,
  applicants: Array<{
    firstName: string,
    lastName: string,
    summary: string,
    email: string,
    phone:  string
  }>,
  applications: Array<{
    applicant: string, // applicants id
    job: string, // jobId
  }>

}
```