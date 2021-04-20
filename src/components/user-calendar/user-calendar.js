import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {withAppointmentsService} from '../hoc'

import {ArrowNext, ArrowPrev} from '../icons/icons'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './user-calendar.css';

const UserCalendar = ({selectedDate, appointments}) => {
	const [marks, setMarks] = useState([])

	useEffect(() => {
		setMarks(appointments)
	}, [appointments])

    return (
        <div>
          	<Calendar 
			  	next2Label={null}
				prev2Label={null}
				nextLabel={<ArrowNext />}
				prevLabel={<ArrowPrev />}
				tileContent={({ date, view }) => {
					console.log(date.toLocaleDateString())
					if(marks.find(mark => mark.date === date.toLocaleDateString())){
						const value = appointments.filter(a => a.date === date.toLocaleDateString())
					 	return  <span className="">{value.length}</span>
					}
				}}
				navigationLabel={({ date, label, locale, view }) => `${label.replace(' ', ', ').slice(0, -2)}`}
				minDetail={"month"}
				onClickDay={(value) => selectedDate(value.toLocaleDateString())}
			> 
			</Calendar>
        </div>
      );
}

const mapStateToProps = ({appointments})  => {
    return {
        appointments
    }
}

export default compose(
    withAppointmentsService(),
    connect(mapStateToProps)
)(UserCalendar)

