import CannerScript, {Block} from 'canner-script';

const exportFields = [{
  keyName: 'name',
  title: 'Customers',
}, {
  keyName: 'phone',
  title: 'Phone',
}, {
  keyName: 'email',
  title: 'Email',
}, {
  keyName: 'consignees',
  title: 'Consignees',
  render: consignees => consignees.reduce((result, consignee) => `${result}${result ? ';' : result}${consignee.name}`, '') || '無',
}];

export default () => (
  <array
    keyName="customers"
    ui="tableRoute"
    uiParams={{
      size: 'middle',
      columns: [{
        title: 'Customers',
        key: 'name',
        dataIndex: 'name',
      }, {
        title: 'Phone',
        key: 'phone',
        dataIndex: 'phone',
      }, {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
      }],
    }}
    title="Customers"
    description="Canner fetches array data without any query by default which means all the filter, sort, pagination are done at the client side. But if you want to do these query at the server side, you can change the fetch policy to async."
    graphql={`
    query($customersBefore: String, $customersAfter: String, $customersLast: Int, $customersFirst: Int,$customersWhere: CustomerWhereInput) {
      customers: customersConnection(before: $customersBefore, after: $customersAfter, last: $customersLast, first: $customersFirst,where: $customersWhere) {
        edges {
          cursor
          node {
            id
            name
            email
            phone
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
    `}
  >
    <toolbar async>
      <actions>
        <export
          fields={exportFields}
          title="Customers"
        />
        <filter />
      </actions>
      <filter>
        <textFilter label="Search Customer Name" field="name" placeholder="Enter a name" />
        <textFilter label="Search Customer Phone" field="phone" placeholder="Enter a phone" />
      </filter>
      <pagination />
    </toolbar>
    <Block keyName="customerInfo" title="Customer Info">
      <string keyName="name" title="Customers" />
      <string keyName="email" title="Email" />
      <string keyName="phone" title="Phone" />
      <array
        keyName="consignees"
        ui="table"
        disabled={{
          create: true
        }}
        uiParams={{
          size: 'small',
          columns: [{
            title: 'Customers',
            key: 'name',
            dataIndex: 'name',
          }, {
            title: 'Phone',
            key: 'phone',
            dataIndex: 'phone',
          }, {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
          }]
        }}
        title="Consignees"
      >
        <string keyName="name" title="Customers" />
        <string keyName="email" title="Email" />
        <string keyName="phone" title="Phone" />
        <string keyName="address" title="Address" />
      </array>
    </Block>
    <Block title="Contact Customer">
      {/* using component tag in data will not change the data schema
        so you can use it to add any component you need.
      */}
      <component
        keyName="connectCustomer"
        packageName="../components/wildcards/emailForm"
      />
    </Block>
  </array>
);