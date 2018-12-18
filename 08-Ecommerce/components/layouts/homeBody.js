// @flow

import * as React from 'react';
import {Breadcrumb, Icon} from 'antd';
import {Item} from 'canner-helpers';

type Props = {
  id: string,
  title: string,
  description: string,

  schema: Object,
  routes: Array<string>
};

export default class Body extends React.Component<Props> {
  render() {
    const {title, description, schema, routes} = this.props;
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
    return <div style={{
      padding: '24px'
    }}>
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #eee',
        padding: '16px 24px',
        position: 'relative',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
        borderRadius: 6,
        marginBottom: 24
      }}>
        <div style={{
          marginBottom: 24
        }}>
          <Breadcrumb itemRender={itemRender} routes={breadcrumbs} />
        </div>
        <h2>{item.title || title}</h2>
        {
          (item.description || description) && (
            <div style={{
              marginTop: 8
            }}>
              {item.description || description}
            </div>
          )
        }
      </div>
      <div style={{
        minHeight: '100vh',
      }}>
        <Item />
      </div>
    </div>;
  }
}