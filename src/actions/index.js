const appointmentsLoaded = (appointments) => {
    return {
        type: 'FETCH_APPOINTMENTS_SUCCESS',
        payload: appointments
    }
}

const appointmentsRequested = () => {
    return {
        type: 'FETCH_APPOINTMENTS_REQUEST',
    }
}

const appointmentsError = (err) => {
    return {
        type:'FETCH_APPOINTMENTS_FAILURL',
        payload: err
    }
}

const deletedAppointment = (id) => {
    return {
        type:'DELETE_APPOINTMENT',
        payload: id
    }
}

const fetchAppointments = (appointmentsService) => () => (dispatch) =>{
    appointmentsService
        .getAppointments()
        .then(data => dispatch(appointmentsLoaded(data)))
}

export {
    appointmentsLoaded,
    appointmentsRequested,
    appointmentsError,
    deletedAppointment,
    fetchAppointments
}