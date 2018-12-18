import CannerScript, {Body} from 'canner-script';
import {LocalStorageConnector} from 'canner-graphql-interface';
import defaultData from './data.json';
import Customers from './schema/customers.schema';
import Home from './schema/home.schema';
import Orders from './schema/orders.schema';
import Categories from './schema/categories.schema';
import Products from './schema/products.schema';
import ArrayBody from './components/layouts/body';
import HomeBody from './components/layouts/homeBody';

const schema = (
  <root>
    <Body component={ArrayBody}>
      <Products />
      <Orders />
      <Customers />
      <Categories />
    </Body>
    <Body component={HomeBody}>
      <Home />
    </Body>
  </root>
);

const connector = new LocalStorageConnector({
  schema: schema.schema,
  defaultData,
  localStorageKey: '08ecommerce'
})
schema.connector = connector;

export default schema
