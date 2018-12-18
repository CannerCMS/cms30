import React from 'react';
import {Icon} from 'antd';

export default (text) => {
  return (
    <a href={text} target="_blank" rel="noopener noreferrer">
      <Icon type="link" />
    </a>
  )
}

export const playSong = (text) => {
  return (
    <a href={text} target="_blank" rel="noopener noreferrer">
      <Icon type="play-circle" />
    </a>
  )
}