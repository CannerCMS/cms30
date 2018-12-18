import React from 'react';
import {Avatar} from 'antd';

export default function renderArtist(artist, record, cannerProps) {
  const {goTo} = cannerProps;
  if (!artist) {
    return '-';
  }

  return <React.Fragment>
    <Avatar src={(artist.thumb || {}).url} icon="user" style={{marginRight: 8}} />
    <a href="javascript:;"
      onClick={() => goTo({
        pathname: `/artists/${artist.id}`
      })}
    >
      {artist.name}
    </a>
  </React.Fragment>
}