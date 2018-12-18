import React from 'react';
import {Badge} from 'antd';

export default function renderImages(images) {
  if (!images || !images.length) {
    return '-';
  }
  return (
    <Badge count={images.length}>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundImage: `url(${images[0].image && images[0].image.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </Badge>
  )
}