// @flow

import React from 'react';
import {Dropdown, Icon} from 'antd';

export default function({
  title,
  content,
  menu,
  extra
}: {
  title: string,
  content: string,
  menu?: React.Element,
  extra?: React.Element
}) {
  return (
    <div
      style={{
        padding: 16,
        background: '#fff',
        boxShadow: '0 0 0 1px rgba(200,215,225,0.5), 0 1px 2px #e9eff3'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{
            marginBottom: 0,
            fontWeight: 400
          }}>
            {title}
          </h2>
          <div
            style={{
              fontSize: 12,
              color: '#666'
            }}
          >
            {content}
          </div>
        </div>
        {
          menu && (
            <Dropdown overlay={menu} trigger={['click']}>
              <Icon type="ellipsis" />
            </Dropdown>
          )
        }
        {
          extra || null
        }
      </div>
    </div>
  )
}