import CannerScript, {Block} from 'canner-script';
import {imageStorage} from './utils';
import {Avatar} from 'antd';
import React from 'react';
import spotifyLink from '../components/columns/spotifyLink';
import popular from '../components/columns/popular';

const columns = [{
  title: 'thumb',
  dataIndex: 'thumb',
  render: (text) => {
    return React.createElement(Avatar, {src: text && text.url});
  }
}, {
  title: 'Name',
  dataIndex: 'name',
  render: (text) => {
    return React.createElement('span', {style: {fontWeight: 'bolder'}}, text)
  }
}, {
  title: 'Followers',
  dataIndex: 'followers',
  render: (text) => {
    if (+text > 10000000) return React.createElement('span', {style: {color: 'red'}}, text)
    return React.createElement('span', {style: {color: 'green'}}, text)
  }
}, {
  title: 'Popularity',
  dataIndex: 'popularity',
  render: (text) => {
    return popular(text)
  }
}, {
  title: 'URL',
  dataIndex: 'spotifyUrl',
  render: (text) => {
    return spotifyLink(text);
  }
}]

export default () => (
  <array keyName="artists" title="Artists"
    ui="tableRoute"
    uiParams={{
      columns
    }}
    imageStorage={imageStorage}
  >
    <Block>
      <string keyName="name" title="Name" required/>
      <string keyName="spotifyUrl" title="Spotify Url" required/>
      <number keyName="popularity" title="Popularity" required/>
      <number keyName="followers" title="Followers" required/>
      <array ui="tag" keyName="genreNames" title="Genre Names" />
      <image keyName="thumb" title="Picture"/>
    </Block>
  </array>
)