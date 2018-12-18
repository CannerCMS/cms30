import React from 'react';
import CannerScript, {Block} from 'canner-script';
import {imageStorage} from './utils';
import renderDate from '../components/columns/renderDate';
import {playSong} from '../components/columns/spotifyLink';
import TextFilter from '../components/columns/textFilter';
import renderArtist from '../components/columns/renderArtist';

const artistFilter = new TextFilter('artists.name');
const columns = [{
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
  title: 'Popularity',
  dataIndex: 'popularity',
  sorter: (a, b) => Number(a.popularity) - Number(b.popularity),
}, {
  title: 'Release Date',
  dataIndex: 'releaseDate',
  render: renderDate
}, {
  title: 'Play URL',
  dataIndex: 'url',
  render: (text) => {
    return playSong(text);
  }
}]

export default () => (
  <array keyName="songs" title="Songs"
    ui="tableRoute"
    uiParams={{
      columns
    }}
    imageStorage={imageStorage}
  >
    <Block title="Basic">
      <string keyName="name" title="Song Name" required/>
      <boolean keyName="isPlayable" title="Playable"/>
      <number keyName="popularity" title="Popularity" required/>
      <string keyName="url" title="Play URL (Spotify)" required/>
      <dateTime keyName="releaseDate" title="Release Date"/>
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
    </Block>
    <Block injectValue={{layout: 'horizontal'}}>
      <number keyName="discNumber" title="Disc Number" />
      <number keyName="durationInMillis" title="Duration In Mills" />
      <number keyName="trackNumber" title="Track Number"/>
    </Block>
  </array>
);
