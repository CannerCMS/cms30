import React from 'react';
import {Item} from 'canner-helpers';
import {Row, Col, Card, Icon, Popconfirm, Avatar, Rate} from 'antd';

export default function CardList({
  goTo,
  value,
  onChange,
  keyName,
  refId,
  deploy
}) {
  return (
    <Row gutter={36}>
      {
        value.map(item => (
          <Col md={8} lg={6} llg={4} key={item.id} style={{marginBottom: 24}}>
            <Card
              cover={<img alt="example" src={item.poster.url}/>}
              actions={[
                <Icon type="edit" onClick={() => goTo({pathname:`${refId.toString()}/${item.id}`})} />,
                <Popconfirm
                  title="Delete this item?"
                  onConfirm={() => 
                    onChange(refId.child(item.__index), 'delete')
                      .then(() => deploy(refId.getPathArr()[0]))
                  }
                  okType="danger"
                >
                  <Icon type="delete"/>
                </Popconfirm>
              ]}
            >
              <Card.Meta
                avatar={<Avatar src={item.director.thumb.url} />}
                title={item.title}
                description={<Rate allowHalf disabled value={item.rating || 0} />}
              />
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

function confirmDelete({
  onChange,
  refId,
  deploy,
  id,

}) {

}