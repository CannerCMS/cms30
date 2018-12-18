// @flow

import * as React from 'react';
import {Item} from 'canner-helpers';
import {Row, Col} from 'antd';

export default class Body extends React.Component<Props> {
  render() {
    return (
      <Row type="flex" justify="center" style={{paddingTop: 80, background: '#fff'}}>
        <Col span={18}>
          <Item />
        </Col>
      </Row>
    );
  }
}