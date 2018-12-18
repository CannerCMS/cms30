// @flow
import React from 'react';
import {Item} from 'canner-helpers';
import ListItem from '../inputs/ListItem';
import {Divider, Button, Icon} from 'antd';

export default function(props: Object) {
  const {title, description} = props.schema[props.routes[0]];
  const isUpdatePage = props.routerParams.operator === 'create' || props.routes.length > 1;
  return (
    <div style={{
      paddingTop: 36,
      maxWidth: 750,
      margin: 'auto',
      background: '#f2f6f8'
    }}>
      <div style={{marginBottom: 16}}>
        <PageHeader title={title} description={description} goTo={props.goTo} keyName={props.routes[0]} updatePage={isUpdatePage} />
      </div>
      <Item />
      <PageFooter />
    </div>
  )
}


function PageHeader({
  title,
  description,
  goTo,
  keyName,
  updatePage
}: {
  title: string,
  description: string,
  goTo: Function,
  keyName: string,
  updatePage: boolean
}) {
  return (
    <ListItem title={title} content={description}
      extra={
        !updatePage && <Button onClick={() => goTo({
          pathname: keyName,
          operator: 'create'
        })}>
          <Icon type="plus"></Icon>
        </Button>
      }
    />
  )
}

function PageFooter() {
  return (
    <Divider>
      Canner
    </Divider>
  )
}