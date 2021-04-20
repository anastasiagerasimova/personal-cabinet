import React, {useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Route, Switch} from 'react-router-dom'

import {withAppointmentsService} from '../hoc'
import {fetchAppointments} from '../../actions'
import PersonalCabinet from '../pages/PersonalCabinet'
import ApppointmentPage from '../pages/AppointmentPage'

import classes from './app.scss'

const App = ({fetchAppointments}) => {
    useEffect(() => {
        fetchAppointments()
    }, [])

    return(
        <div className={classes.main}>
            <Switch>
                <Route path="/" exact component={PersonalCabinet}/>
                <Route path="/appointments" component={ApppointmentPage}/>
            </Switch> 
        </div>
    )
}

const mapStateToProps = ({appointments})  => {
    return {appointments}
}

const mapDispatchToProps = (dispatch, {appointmentsService}) => {
    return {
        fetchAppointments: () => dispatch(fetchAppointments(appointmentsService)()),
    }
}

export default compose(
    withAppointmentsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App)