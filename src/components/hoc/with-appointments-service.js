import React, {useContext} from 'react'
import {AppointmentsServiceContect} from '../appointments-service-context'

const withAppointmentsService = () => (Wrapped) => {
    return (props) => {
        const appointmentsService = useContext(AppointmentsServiceContect)

        return(
            <Wrapped {...props} appointmentsService={appointmentsService} />
        )
    }
}

export default withAppointmentsService