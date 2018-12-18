import CannerScript, {Block, Row, Col} from 'canner-script';
import {imageStorage} from './utils';
import spotifyLink from '../components/columns/spotifyLink';
import React from 'react';
import renderDate from '../components/columns/renderDate';
import TextFilter from '../components/columns/textFilter';
import renderArtist from '../components/columns/renderArtist';

const artistFilter = new TextFilter('artists.name');
const columns = [{
  title: 'Artwork',
  dataIndex: 'artwork'
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text) => {
    return React.createElement('span', {style: {fontWeight: 'bolder'}}, text)
  }
}, {
  title: 'Artist',
  dataIndex: 'artists',
  filterDropdown: artistFilter.renderFilter,
  onFilter: artistFilter.onFilter,
  render: renderArtist
}, {
  title: 'Release Date',
  dataIndex: 'releaseDate',
  render: renderDate
}, {
  title: 'Track Count',
  dataIndex: 'trackCount'
}, {
  title: 'URL',
  dataIndex: 'url',
  render: (text) => {
    return spotifyLink(text);
  }
}];

export default () => (
  <array keyName="albums" title="Albums"
    ui="tableRoute"
    uiParams={{
      columns
    }}
    imageStorage={imageStorage}
  >
    <Block>
      <relation keyName="artists"
        title="Artists"
        ui="singleSelect"
        relation={{
          to: 'artists',
          type: 'toOne'
        }}
        uiParams={{
          textCol: 'name',
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }]
        }}
      />
      <relation keyName="songs"
        title="Songs"
        ui="multipleSelect"
        relation={{
          to: 'songs',
          type: 'toMany'
        }}
        uiParams={{
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }, {
            title: 'Artist',
            dataIndex: 'artists',
            render: artist => artist && artist.name
          }]
        }}
      />
    </Block>
    <Block title="Attributes">
      <Block>
        <Row gutter={36} align="middle">
          <Col span={12}>
            <image keyName="artwork" title="Artwork" />
          </Col>
          <Col span={12}>
            <string keyName="name" title="Name" />
            <dateTime keyName="releaseDate" title="Release Date" />
          </Col>
        </Row>
      </Block>
      <Row type="flex" gutter={36}>
        <Col span={12}>
          <boolean keyName="isComplete" title="Complete" />
          <boolean keyName="isSingle" title="Single" />
          <string keyName="recordLabel" title="Record Label" />
        </Col>
        <Col span={12}>
          <number keyName="trackCount" title="Track Count"/>
          <string keyName="url" title="URL" />
        </Col>
      </Row>
    </Block>

  </array>
)