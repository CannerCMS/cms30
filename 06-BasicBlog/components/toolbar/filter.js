import React from 'react';
import {Radio} from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class Filter extends React.Component {
  onChange = e => {
    const key = e.target.value;
    const {options, changeFilter, keyName} = this.props;
    const option = options.find(option => option.key === key);
    changeFilter(option.condition);
  }

  render() {
    const {options} = this.props;
    return (
      <RadioGroup onChange={this.onChange} defaultValue={options[0].key}>
        {
          options.map(option => (
            <RadioButton value={option.key} key={option.key}>
              {option.text}
            </RadioButton>
          ))
        }
      </RadioGroup>
    );
  }
}