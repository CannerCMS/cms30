import CannerScript, {Row, Col} from 'canner-script';
import renderMatchScores from '../components/columns/renderMatchScores';
import renderSelect from '../components/columns/renderSelect';
import renderDate from '../components/columns/renderDate';
import {HoveredBlock} from './utils.schema';
import {imageStorage} from './utils';

const PLAYED = 'PLAYED';
const FIXURES = 'FIXURES';
const statusOptions = [{
  value: PLAYED,
  title: 'Played'
}, {
  value: FIXURES,
  title: 'Fixures'
}]
const columns = [{
  title: 'Home v.s. Away',
  dataIndex: 'home.name',
  render: renderMatchScores
}, {
  title: 'Date',
  dataIndex: 'date',
  render: renderDate
}, {
  title: 'Status',
  dataIndex: 'status',
  render: (value, record, cannerProps) => renderSelect(value, record, cannerProps, statusOptions, 'status')
}]


export default () => (
  <array keyName="matches" title="Matches"
    ui="tableRoute"
    uiParams={{
      columns,
      size: 'middle'
    }}
    imageStorage={imageStorage}
  >
    <HoveredBlock>
      <Row type="flex" gutter={16}>
        <Col span={12}>
          <relation keyName="home" title="Home team"
            relation={{
              to: 'teams',
              type: 'toOne'
            }}
            uiParams={{
              textCol: 'name',
              columns: [{
                title: 'Name',
                dataIndex: 'name'
              }]
            }}
            required
            validation={{
              validator: (players, reject) => {
                if (!players.length === 1) {
                  return reject('should select 1 team');
                }
              }
            }}
          />
          <number keyName="homeScore" title="Home score" uiParams={{min: 0}}/>
        </Col>
        <Col span={12}>
          <relation keyName="away" title="Away team"
            relation={{
              to: 'teams',
              type: 'toOne'
            }}
            uiParams={{
              textCol: 'name',
              columns: [{
                title: 'Name',
                dataIndex: 'name'
              }]
            }}
            required
            validation={{
              validator: (players, reject) => {
                if (!players.length === 1) {
                  return reject('should select 1 team');
                }
              }
            }}
          />
          <number keyName="awayScore" title="Away score" uiParams={{min: 0}}/>
        </Col>
      </Row>
    </HoveredBlock>
    <HoveredBlock injectValue={{layout: 'horizontal'}}>
      <dateTime keyName="date" title="Date" />
      <string ui="select" keyName="status" title="Status" values={[PLAYED, FIXURES]}
        uiParams={{
          options: [{
            title: 'Played',
            value: PLAYED
          }, {
            title: 'Fixures',
            value: FIXURES
          }]
        }}
      />
    </HoveredBlock>
  </array>
)