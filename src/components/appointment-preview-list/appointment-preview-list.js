import React from 'react'
import {connect} from 'react-redux'
import {compose} from  'redux'
import {Link} from 'react-router-dom'

import {withAppointmentsService} from '../hoc'

import {appointmentsLoaded, deletedAppointment} from '../../actions'
import AppointmentListItem from '../appointment-list-item/appointment-list-item'

import classes from './appointment-preview-list.scss'


const AppointmentPreviewList = (props) => {
    const {appointments, onDeletedAppointment} = props

    return(
        <div className={classes.wrapper}>
            <div className={classes.heading}>Записи на прием</div>
            <div className={classes.list}>
                {
                    appointments.slice(0, 2).map((appointment) => {
                        return (
                            <AppointmentListItem
                                key={appointment.id}
                                appointment={appointment}
                                onDeletedAppointment={() => {
                                    const isDelete = confirm('Вы действительно хотите отменить эту запись?')
                                    if (isDelete) onDeletedAppointment(appointment.id)
                                }}
                            />
                        )
                    })
                }
                {                
                    appointments.length - 2 > 0 
                    ? (
                        <div className={classes.more}>
                            <span>Еще {appointments.length - 2} записи</span>
                            <Link to="appointments">Подробнее</Link>
                        </div>
                    )
                    :null
                }
            </div>
        </div>
    )
}


const mapStateToProps = ({appointments})  => {
    return {
        appointments
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAppointments: (date) => dispatch(appointmentsLoaded(date)),
        onDeletedAppointment: (id) => dispatch(deletedAppointment(id))
    }
}
export default compose(
    withAppointmentsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AppointmentPreviewList)