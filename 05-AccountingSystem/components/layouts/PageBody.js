// @flow

import React from 'react';
import {Item} from 'canner-helpers';
import {Card} from 'antd';

export default function({routes, schema}: {
  routes: Array<string>,
  schema: Object
}) {
  const keyName = routes[0];
  return (
    <div style={{padding: 36}}>
      {
        keyName === 'dashboard' ? (
          <Item />
        ) : (
          <Card title={schema[keyName].title}>
            <Item />
          </Card>
        )
      }
    </div>
  )
}