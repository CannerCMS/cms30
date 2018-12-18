import CannerScript, {Row, Col} from 'canner-script';

const columns = [{
  title: 'Player',
  dataIndex: 'name_display_first_last'
}, {
  title: 'Team',
  dataIndex: 'team_abbrev'
}, {
  title: 'Pos',
  dataIndex: 'pos',
}, {
  title: 'G',
  dataIndex: 'g',
  sorter: (a, b) => b.g - a.g
}, {
  title: 'AB',
  dataIndex: 'ab',
  sorter: (a, b) => b.ab - a.ab

}, {
  title: 'R',
  dataIndex: 'r',
  sorter: (a, b) => b.r - a.r
}, {
  title: 'H',
  dataIndex: 'h',
  sorter: (a, b) => b.h - a.h
}, {
  title: '2B',
  dataIndex: 'd',
  sorter: (a, b) => b.d - a.d
}, {
  title: '3B',
  dataIndex: 't',
  sorter: (a, b) => b.t - a.g
}, {
  title: 'HR',
  dataIndex: 'hr',
  sorter: (a, b) => b.hr - a.hr
}, {
  title: 'RBI',
  dataIndex: 'rbi',
  sorter: (a, b) => b.rbi - a.rbi
}, {
  title: 'BB',
  dataIndex: 'bb',
  sorter: (a, b) => b.bb - a.bb
}, {
  title: 'SO',
  dataIndex: 'so',
  sorter: (a, b) => b.so - a.so
}, {
  title: 'SB',
  dataIndex: 'sb',
  sorter: (a, b) => b.sb - a.sb
}, {
  title: 'CS',
  dataIndex: 'cs',
  sorter: (a, b) => b.cs - a.cs
}, {
  title: 'AVG',
  dataIndex: 'avg',
  sorter: (a, b) => b.avg - a.avg
}, {
  title: 'OBP',
  dataIndex: 'obp',
  sorter: (a, b) => b.obp - a.obp
}, {
  title: 'SLG',
  dataIndex: 'slg',
  sorter: (a, b) => b.slg - a.slg
}, {
  title: 'OPS',
  dataIndex: 'ops',
  sorter: (a, b) => b.ops - a.ops
}];

const pos = ["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH", "OF"];

export default () => (
  <array keyName="players"
    title="Players"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'small'
    }}
  >
    <toolbar>
      <filter>
        <textFilter alwaysDisplay label="Player" field="name_display_first_last" />
        <textFilter alwaysDisplay label="Team" field="team_abbrev" />
        <selectFilter
          label="League"
          alwaysDisplay
          options={[{
            text: 'NL',
            condition: {
              league: {eq: 'NL'}
            }
          }, {
            text: 'AL',
            condition: {
              league: {eq: 'AL'}
            }
          }, {
            text: 'ALL',
            condition: {
              league: {}
            }
          }]}
        />
        <selectFilter
          label="Position"
          alwaysDisplay
          options={pos.map(p => ({
            text: p,
            condition: {
              pos: {eq: p}
            }
          })).concat({
            text: 'ALL',
            condition: {
              pos: {}
            }
          })}
        />
      </filter>
      <pagination />
    </toolbar>
    <string keyName="name_display_first_last" title="Player" />
    <number keyName="team_abbrev" title="Team" />
    <string keyName="league" title="League" disabled />
    <Row>
      <Col span={3}>
        <string keyName="pos" title="POS"
          ui="select"
          uiParams={{
            options: pos.map(p => ({text: p.toUpperCase(), value: p}))
          }}
        />
        <number keyName="g" title="G" />
        <number keyName="ab" title="AB" />
        <number keyName="r" title="R" />
        <number keyName="ops" title="OPS"
          uiParams={{
            precision: 3,
            step: 0.001
          }}
        />
      </Col>
      <Col span={3}>
        <number keyName="h" title="H" />
        <number keyName="d" title="2B" />
        <number keyName="t" title="3B" />
        <number keyName="hr" title="HR" />
      </Col>
      <Col span={3}>
        <number keyName="rbi" title="RBI" />
        <number keyName="bb" title="BB" />
        <number keyName="so" title="SO" />
        <number keyName="sb" title="SB" />
      </Col>
      <Col span={3}>
        <number keyName="cs" title="CS" />
        <number keyName="avg" title="AVG" uiParams={{
          max: 1,
          min: 0,
          precision: 3,
          step: 0.001
        }}/>
        <number keyName="obp" title="OBP"  uiParams={{
          max: 1,
          min: 0,
          precision: 3,
          step: 0.001
        }} />
        <number keyName="slg" title="SLG"  uiParams={{
          max: 1,
          min: 0,
          precision: 3,
          step: 0.001
        }} />
      </Col>
    </Row>
  </array>
)