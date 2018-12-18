// @flow
import React from 'react';
import BigCalendar from 'react-big-calendar';
import {Select, Modal} from 'antd';
import {graphql, compose, withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);
const Option = Select.Option;
const confirm = Modal.confirm;

type Props = {
  rooms: Object,
  bookings: Object
}

class Calendar extends React.Component<Props> {
  state = {
    view: 'week'
  }

  onView = view => {
    this.onSelectRoom();
    this.setState({
      view
    });
  }

  onSelectRoom = roomId => {
    const {bookings} = this.props;
    if (roomId) {
      bookings.refetch({
        where: {
          room: {
            id: roomId
          }
        }
      })
    } else {
      bookings.refetch({
        where: {}
      })
    }
  }

  onSelectEvent = (event) => {
    const {goTo} = this.props;
    confirm({
      title: 'Do you want to edit this event?',
      content: 'Go to the event page.',
      onOk() {
        goTo({
          pathname: `/bookings/${event.id}`
        })
      },
      onCancel() {
      },
      okText: 'Yes'
    });
    
  }

  onSelectSlot = (slot) => {
    const {goTo} = this.props;
    const date = moment(slot.start).format('YYYY/MM/DD');
    const start = moment(slot.start).format('HH:00');
    const end = moment(slot.end).format('HH:00');
    confirm({
      title: 'Do you want to add a new event?',
      content: `Duration: ${date} ${start} - ${end}`,
      onOk() {
        goTo({
          pathname: `/bookings`,
          operator: 'create',
          payload: {
            bookingDate: moment(slot.start).startOf('day').toISOString(),
            bookingStart: start,
            bookingEnd: end
          }
        })
      },
      onCancel() {
      },
      okText: 'Yes'
    });
  }

  render() {
    const {rooms, bookings} = this.props;
    const {view} = this.state;
    const events = resolveBookings(bookings.bookings || []);
    const resourceSettings = rooms.rooms && rooms.rooms.length && view === 'day' ? {
      resourceAccessor: 'roomId',
      resourceTitleAccessor: 'name',
      resourceIdAccessor: 'id',
      resources: rooms.rooms
    } : {};
    return (
      <React.Fragment>
        {
          view === 'week' && (
            <>
              <label style={{marginRight: 16}}>Room:</label>
              <RoomSelect rooms={rooms.rooms || []} onSelect={this.onSelectRoom} />
            </>
          )
        }
        <BigCalendar
          localizer={localizer}
          events={events}
          defaultDate={new Date()}
          onView={this.onView}
          defaultView="week"
          views={['day', 'week']}
          step={60}
          timeslots={1}
          selectable
          showMultiDayTimes
          onSelectEvent={this.onSelectEvent}
          onSelectSlot={this.onSelectSlot}
          max={moment().set('hour', '22').set('m', 0).toDate()}
          min={moment().set('hour', '7').set('m', 0).toDate()}
          {...resourceSettings}
        />
      </React.Fragment>
    );
  }
}

function RoomSelect({
  rooms,
  onSelect
}: {
  rooms: Array<{id: string, name: string}>,
  onSelect: Function
}) {
  return (
    <Select onChange={onSelect} style={{width: 250, marginBottom: 24}} allowClear placeholder="Select Room">
      {
        rooms.map(room => (
          <Option value={room.id} key={room.id}>
            {room.name}
          </Option>
        ))
      }
    </Select>
  )
}

function resolveBookings(bookings) {
  return bookings.map(booking => {
    return {
      ...booking,
      start: moment(booking.bookingDate).set('hour', booking.bookingStart.split(':')[0]).set('m', 0).toDate(),
      end: moment(booking.bookingDate).set('hour', booking.bookingEnd.split(':')[0]).set('m', 0).toDate(),
      roomId: booking.room.id,
      allDay: false,
      title: booking.purpose
    };
  });
}

export default compose(
  withApollo,
  graphql(gql`
    query {
      rooms {
        id
        name
      }
    }
  `, {name: 'rooms'}),
  graphql(gql`
    query bookings($where: bookingWhereInput) {
      bookings(where: $where) {
        id
        room {
          id
          name
        }
        bookingDate
        bookingStart
        bookingEnd
        status
        purpose
      }
    }
  `, {
    name: 'bookings',
    options: {
      variables: {
        where: {
        }
      }
    }
  })
)(Calendar)