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
  <span>Hi, this is the demo of a music CMS builded with Canner, a schema-based CMS framework. The data model is referenced from <a href="https://spotify.com/">Spotify</a> and you can check the all components and schema <a href="https://github.com/Canner/cms30/tree/master/02-Music">here</a></span>  
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
            <Card>
              <Item />
            </Card>
          ) : <Item />
        }
      </div>
    </div>;
  }
}