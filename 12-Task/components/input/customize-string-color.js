import React from 'react';
import {SketchPicker} from 'react-color';

export default class Color extends React.Component {
  handleChange = (color) => {
    const {onChange, refId} = this.props;

    onChange(refId, "update", color.hex);
  }

  render() {
    const {value} = this.props;
    return <SketchPicker color={value} onChange={ this.handleChange }/>;
  }
}