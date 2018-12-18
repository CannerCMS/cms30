import React from 'react';
import {Menu, Alert, Button, Icon} from 'antd';
import Item from './ListItem';
import Toolbar from '@canner/antd-share-toolbar';
import moment from 'moment';

export default function({
  value,
  goTo,
  keyName,
  refId,
  deploy,
  onChange,
  request,
  toolbar,
  items
}) {
  const renderMenu = item => (
    <Menu>
      <Menu.Item onClick={() => goTo({
        pathname: `${keyName}/${item.id}`,
      })}>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">Edit</a>
      </Menu.Item>
      <Menu.Item onClick={() => {
        onChange(refId.child(item.__index).child('trashed'), 'update', true)
          .then(() => deploy(keyName))
      }}>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">Trashed</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <Toolbar
        toolbar={toolbar}
        dataSource={value}
        // recordValue={recordValue}
        items={items}
        keyName={keyName}
        request={request}
        deploy={deploy}
      >
        
        {
          ({value}) => (
            value && value.length ? (
              <>
              {
                value.map(item => (
                  <Item
                    title={item.title}
                    content={
                      <>
                        <Icon type="clock-circle" /> {moment(item.createDate).fromNow()}
                      </>
                    }
                    key={item.id}
                    menu={renderMenu(item)}
                  />
                ))
              }
              </>
            ) : (
              <Alert message="There is no data"/>
            )
          )
          
        }
      </Toolbar>
    </>
  );
}