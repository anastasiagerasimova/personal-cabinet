import React, {useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {compose} from 'redux'

import {withAppointmentsService} from '../hoc'
import {deletedAppointment} from '../../actions'
import AppointmentListItem from '../appointment-list-item/appointment-list-item'

import classes from './appointment-list.scss'


const AppointmentList = (props) => {
    const {appointments, onDeletedAppointment, filteredAppointments, filtered} = props

    return(
        <div className={classes.listWrapper}>
            {
                filtered 
                    ?(<div className={classes.showAll}><Link to="/appointments">Показать все записи</Link></div>)
                    : null
            }
  
            <ul className={classes.list}>
            {
                    (filtered ? filteredAppointments : appointments).map((appointment) => {
                        return (
                            <li key={appointment.id}>
                                <AppointmentListItem
                                    onDeletedAppointment={() => {
                                        const isDelete = confirm('Вы действительно хотите отменить эту запись?')
                                        if (isDelete) onDeletedAppointment(appointment.id)
                                    }}
                                    appointment={appointment}
                                />
                            </li>
                        )
                    })
                } 
            </ul>
        </div>
    )
}

const AppointmentListContainer = (props) => {
    const {appointments, location, onDeletedAppointment} = props
    const [filteredAppointments, setfFilteredAppointments] = useState([])

    useEffect(() => {
        if(location.search !== ''){
            const filtered = appointments.filter(el => el.date === location.search.slice(1))
            setfFilteredAppointments(filtered)
        }
    }, [location, appointments])

    return(
        <React.Fragment>
            {
                (location.search !== '') 
                    ? <AppointmentList  filtered={true} filteredAppointments={filteredAppointments}{...props}/>
                    : <AppointmentList  filtered={false} {...props}/>
            }
        </React.Fragment>
    )

}

const mapStateToProps = ({appointments})  => {
    return {appointments}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletedAppointment: (id) => dispatch(deletedAppointment(id))
    }
}

export default compose(
    withRouter,
    withAppointmentsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AppointmentListContainer)

