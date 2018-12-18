import React from 'react';
import {Icon} from 'antd';

export default (text) => {
  return (
    <span>
      {text}{" "}<Icon type="fire" style={{color: "red"}}/>
    </span>
  )
}