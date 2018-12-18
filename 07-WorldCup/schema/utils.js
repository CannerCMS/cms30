export const worldCupColumns = [{
  title: 'Year',
  dataIndex: 'year',
  sorter: (a, b) => b.year - a.year
}, {
  title: 'Name',
  dataIndex: 'name'
}];

export const countryColumns = [{
  title: 'Flag',
  dataIndex: 'flag'
}, {
  title: 'Name',
  dataIndex: 'name'
}]

export const matchesColumns = [{
  title: 'World Cup',
  dataIndex: 'worldCup'
}, {
  title: 'Result',
  dataIndex: ''
}, {
  title: 'Date',
  dataIndex: 'date'
}];
