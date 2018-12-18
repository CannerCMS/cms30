// @flow

import * as React from 'react';
import {Breadcrumb, Icon, Card, Alert} from 'antd';
import {Item} from 'canner-helpers';

type Props = {
  id: string,
  title: string,
  description: string,
  routerParams: Object,
  schema: Object,
  routes: Array<string>
};

const DEFAULT_DESC = (
    <span>Hi, this is the demo of a sport CMS builded with Canner, a schema-based CMS framework, and you can check the all components and schema <a target="_blank" href="https://github.com/Canner/30-cms/blob/master/01-Sport">here</a></span>
);

export default class Body extends React.Component<Props> {
  render() {
    const {title, description, schema, routes, routerParams} = this.props;
    const key = routes[0];
    const item = schema[key];
    const breadcrumbs = [{
      path: 'home',
      render: () => <Icon type="home" />
    }, {
      path: routes[0],
      render: () => item.title || title
    }];
    const itemRender = (route) => {
      return route.render();
    }
    return <div>
      <div style={{
        background: 'transparent',
        padding: '36px 36px 0 36px'
      }}>
        <h2 style={{display: 'inline-block'}}>{item.title || title}</h2>
        <Breadcrumb style={{display: 'inline-block', marginLeft: 36}} itemRender={itemRender} routes={breadcrumbs} />
        {
          <div style={{
          }}>
            {item.description || description || DEFAULT_DESC}
          </div>
        }
      </div>
      <div style={{
        padding: '36px',
        minHeight: '100vh'
      }}>
        {
          routes.length === 1 && routerParams.operator !== 'create' ? (
            <Card style={{boxShadow: "0 0 5px 0 rgba(43,43,43,0.1), 0 11px 6px -7px rgba(43,43,43,0.1)"}}>
              <Item />
            </Card>
          ) : <Item />
        }
      </div>
    </div>;
  }
}