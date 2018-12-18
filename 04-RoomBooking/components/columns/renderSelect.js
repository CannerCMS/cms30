import React from 'react';
import {Select} from 'antd';
const Option = Select.Option;

export default function renderSelect(value, record, cannerProps, options, keyName) {
  const {deploy, refId, onChange} = cannerProps;
  return (
    <Select value={value}
      onSelect={value => change({value, deploy, refId, onChange, index: record.__index, keyName})}
      style={{width: 160, color: options.find(option => option.value === value).color}}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.text}
        </Option>
      ))}
    </Select>
  )
}

function change({
  onChange,
  deploy,
  refId,
  value,
  index,
  keyName
}) {
  return onChange(refId.child(index).child(keyName), 'update', value).then(() => {
    deploy(refId.toString());
  })
}