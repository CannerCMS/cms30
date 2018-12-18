// @flow

import CannerScript, {Row, Col, Block} from 'canner-script';

export const Inline = ({children}: {children: Array<Object>}) => (
  <Row type="flex" gutter={16}>
    <Col xs={24} sm={12} md={24 / children.length} lg={24 / children.length}>
      {children[0]}
    </Col>
    <Col xs={24} sm={12} md={24 / children.length} lg={24 / children.length}>
      {children[1]}
    </Col>
    {children[2] && (
      <Col xs={24} sm={12} md={24 / children.length} lg={24 / children.length}>
        {children[2]}
      </Col>
    )}
    {children[3] && (
      <Col xs={24} sm={12} md={24 / children.length} lg={24 / children.length}>
        {children[3]}
      </Col>
    )}
  </Row>
)

export const ShadowBlock = ({attributes, children}: {attributes: Object, children: Array<Object>}) => (
  <Block keyName={attributes.keyName} title={attributes.title}
    style={{
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
      borderRadius: 6,
      marginBottom: 24
    }}
  >
    {children}
  </Block>
)