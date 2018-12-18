import React from 'react';
import {Item} from 'canner-helpers';

export default class Body extends React.Component {
  render() {
    const {schema, routes} = this.props;
    return (
      <div style={{
        maxWidth: '700px',
        margin: '60px auto'
      }}>
        <h1>{schema[routes[0]].title}</h1>
        <Item />
      </div>
    )
  }
}
