// @flow

import CannerScript, {Tabs, Block, Row, Col, Default} from 'canner-script';
import {matchesColumns} from './utils';

export default () => (
  <array
    ui="tableRoute"
    uiParams={{
      columns: matchesColumns
    }}
    keyName="matches"
    title="Matches"
    packageName="../components/inputs/customized-array-list.js"
    controlDeployAndResetButtons
    cacheActions
  >
    <Block>
      <Block>
        <Country keyName="homeTeam" title="Home" />
        <Country keyName="awayTeam" title="Away" />
      </Block>
      <Tabs>
        <Default keyName="basic" title="Basic">
          <dateTime keyName="date" title="Date"/>
          <string keyName="startAt" title="Start at" ui="time" uiParams={{format: 'hh:mm'}} />
          <relation keyName="group" title="Group"
            relation={{
              to: 'groups',
              type: 'toOne'
            }}
            uiParams={{
              textCol: 'name',
              columns: [{
                title: 'Name',
                dataIndex: 'name'
              }]
            }}
          />
          <string keyName="place" title="Place" />
        </Default>
        <object keyName="summary" title="Summary" ui="editor" uiParams={{minHeight: '800px'}} />
        <Default keyName="statistics" title="Statistics">
          <Row type="flex" gutter={36}>
            <Col span={12}>
              <component keyName="homeTitle" packageName="../components/inputs/divider" title="Home" hideTitle/>
              <Statics keyName="homeStatistics" />
            </Col>
            <Col span={12}>
              <component keyName="awayTitle" packageName="../components/inputs/divider" title="Away" hideTitle/>
              <Statics keyName="awayStatistics" />
            </Col>
          </Row>
        </Default>
      </Tabs>
    </Block>
  </array>
)


function Statics({attributes}: {attributes: Object}) {
  return (
    <object keyName={attributes.keyName} title={attributes.title}>
      <Default  injectValue={{layout: 'horizontal'}}>
        {/* attacking */}
        <Block title="Attacking" type="inner" >
          <number keyName="goals" title="Goals" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="attempts" title="Attempts" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="onTarget" title="On Target" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="offTarget" title="Off Target" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="blocked" title="Blocked" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="woodwork" title="Woodwork" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="corners" title="Corners" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="offsides" title="Offsides" uiParams={{min: 0, step: 1, unit: ''}} />
        </Block>
        {/* performance */}
        <Block title="Performance" type="inner" >
          <number keyName="ballPossession" title="Ball Possession" uiParams={{min: 0, max: 100, step: 1, unit: '%'}} />
          <number keyName="passAccuracy" title="Pass Accuracy" uiParams={{min: 0, max: 100, step: 1, unit: '%'}} />
          <number keyName="passes" title="Passes" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="passesCompleted" title="Passes Completed" uiParams={{min: 0, step: 1, unit: ''}} />
        </Block>
        {/* defending */}
        <Block title="Defending" type="inner" >
          <number keyName="tackles" title="Tackles" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="blocks" title="Blocks" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="clearances" title="Clearances" uiParams={{min: 0, step: 1, unit: ''}} />
        </Block>
        {/* disciplinary */}
        <Block title="Disciplinary" type="inner" >
          <number keyName="yellowCards" title="Yellow Cards" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="directRedCards" title="Direct Red Cards" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="indirectRedCards" title="Indirect Red Cards" uiParams={{min: 0, step: 1, unit: ''}} />
          <number keyName="foulsCommitted" title="Fouls Committed" uiParams={{min: 0, step: 1, unit: ''}} />
        </Block>
      </Default>
    </object>
  );
}

function Country({attributes}: Object) {
  return (
    <relation keyName={attributes.keyName} title={attributes.title}
      relation={{
        to: 'countries',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{title: 'Name', dataIndex: 'name'}]
      }}
    />
  );
}