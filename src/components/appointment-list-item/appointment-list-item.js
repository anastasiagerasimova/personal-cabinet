import React from 'react'

import classes from './appointment-list-irem.scss'

const AppointmentListItem = (props) => {
    const {appointment, onDeletedAppointment} = props

    if(appointment == undefined) return null

    const {address, doctorName, department, doctorPhoto, dayOfWeek, date, time} = appointment
  
    return(
        <div className={classes.appointmentCard}>
            <div className={classes.date}>{dayOfWeek} {date} | {time} </div>
            <div className={classes.address}>{address}</div>
            <div className={classes.info}>
                <div className={classes.doctor}>
                    <div className={classes.doctorPhoto}>
                        <img src={doctorPhoto}></img>
                    </div>
                    <div className={classes.doctorInfo} >
                        <span>{doctorName}</span>
                        <span>{department}</span>
                    </div>
                </div>
                <button onClick={onDeletedAppointment}>Отменить</button>
            </div>
        </div>
    )
}

export default AppointmentListItem