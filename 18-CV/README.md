## Data Type

```js
{
  cv: {
    personalProfile: object, // editor,
    education: Array<{
      from: string, // ISOString
      to: string, // ISOString
      institutionName: string
    }>,
    workExperience: Array<{
      from: string, // ISOString
      to: string, // ISOString
      jobPosition: string,
      companyName: string
    }>,
    skills: {
      technical: Array<string>, //tag
      interpersonal: Array<string>, //tag
      other: Array<string> // tag
    },
    hobbiesAndInterests: Object // editor
  }
}
```