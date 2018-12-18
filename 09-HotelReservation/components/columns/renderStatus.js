import React from 'react';

export default function renderStatus(value) {
  return (
    <div style={{color: value === 'CONFIRMED' ? 'green' : 'red'}}>
      {value === 'CONFIRMED' ? 'Confirmed' : 'Cancelled'}
    </div>
  )
}