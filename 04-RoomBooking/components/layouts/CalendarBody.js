// @flow

import * as React from 'react';
import {Item} from 'canner-helpers';

type Props = {
  id: string,
  title: string,
  description: string,
  routes: Array<string>
};

export default class Body extends React.Component<Props> {
  render() {
    return (
      <div style={{
        padding: '36px',
        background: '#fff',
        minHeight: '100vh'
      }}>
        <h2>Calendar</h2>
        <div style={{marginBottom: 36}}>
          You can customize your component and use it in Canner simply. Try selecting timeslots to book a room or an event to edit it! 
        </div>
        <Item />
      </div>
    );
  }
}