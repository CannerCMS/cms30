import React from 'react';
import {Tag} from 'antd';

export default function(text, color) {
  return (
    <Tag color={color}>
      {text}
    </Tag>
  )
}