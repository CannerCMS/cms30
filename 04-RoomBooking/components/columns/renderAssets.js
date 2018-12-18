import React from 'react';
import {Tag} from 'antd';

export default function(assets) {
  return (
    <React.Fragment>
      {
        assets && assets.length ? assets.map(asset => (
          <Tag key={asset}>
            {asset}
          </Tag>
        )) : '-'
      }
    </React.Fragment>
  )
}