import CannerScript, { Block, Row, Col } from "canner-script";
import { ShadowBlock } from './utils.schema';

export default () => (
  <object
    keyName="home"
    title="Home Page"
    description="Layout tags are used to create grids, containers, and blocks in CMS. And allows you to create customized design layouts and visual design for your CMS."
  >
    <Row type="flex" gutter={16}>
      <Col xs={24} sm={24} md={24} lg={12}>
        <ShadowBlock title="Entry Page" keyName="header">
          <object keyName="header">
            <image keyName="logo" title="Logo" layout="horizontal"/>
          </object>
        </ShadowBlock>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <ShadowBlock title="Footer" keyName="footer">
          <object keyName="footer">
            <image keyName="logo" title="Logo" layout="horizontal" />
            <string keyName="fb" ui="link" title="Facebook Link" layout="horizontal"/>
            <string keyName="ig" ui="link" title="Instagram Link" layout="horizontal" />
            <string keyName="email" ui="link" title="Email" layout="horizontal" />
          </object>
        </ShadowBlock>
      </Col>
      <Col span={24}>
        <ShadowBlock title="Entry Page" keyName="entry">
          <object keyName="entry">
            <Row gutter={16}>
              <Col span={12}>
                <string keyName="title" title="Website Title" />
              </Col>
              <Col span={12}>
                <string keyName="slogan" title="Website Slogan" />
              </Col>
            </Row>
            <array
              keyName="bannerBg"
              ui="gallery"
              title="Banner Background Image"
            />
          </object>
        </ShadowBlock>
      </Col>
    </Row>
  </object>
);