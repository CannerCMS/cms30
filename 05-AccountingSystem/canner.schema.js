import CannerScript, {Body} from 'canner-script';
import Categories from './schema/categories.schema';
import Items from './schema/items.schema';
import Dashboard from './schema/dashboard.schema';
import PageBody from './components/layouts/PageBody';
import defaultData from './data.json';

import {LocalStorageConnector} from 'canner-graphql-interface';
const schema = (
  <root>
    <Body component={PageBody}>
      <Dashboard />
      <Categories />
      <Items keyName="incomes" title="Incomes" />
      <Items keyName="expenses" title="Expenses" />
    </Body>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '05accountingsystem'
})
schema.connector = connector;

export default schema
