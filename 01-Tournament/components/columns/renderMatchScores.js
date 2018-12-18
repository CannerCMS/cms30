import React from 'react';
import {Icon, Avatar} from 'antd';

const HOMEWIN = 1;
const AWAYWIN = -1;
const NOWIN = 0;
const winStyle = {
  color: 'green',
  fontWeight: 600
};
const loseStyle = {
  color: '#666'
}
const icon = <Icon type="crown" theme="twoTone" twoToneColor="#ffbf00"/>;

export default function renderMatchScores(text, record) {
  const home = record.home.name;
  const away = record.away.name;
  const homeScore = record.homeScore || 0;
  const awayScore = record.awayScore || 0;
  const win = checkWin(homeScore, awayScore);
  const homeStyle = win === HOMEWIN ? winStyle : loseStyle;
  const awayStyle = win === AWAYWIN ? winStyle : loseStyle;
  return (
    <React.Fragment>
      <span style={homeStyle}>
        <Avatar src={record.home.logo.url}/>{home} {homeScore}
      </span>
      {` : `}
      <span style={awayStyle}>
        {awayScore} {away} <Avatar src={record.away.logo.url}/>
      </span>
    </React.Fragment>
  );
}

function checkWin(homeScore, awayColor) {
  if (homeScore > awayColor) {
    return HOMEWIN;
  }
  if (awayColor) {
    return AWAYWIN;
  }
  return NOWIN;
}