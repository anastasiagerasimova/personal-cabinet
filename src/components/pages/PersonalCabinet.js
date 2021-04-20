import React from 'react'

import AppointmentPreviewList from '../appointment-preview-list/appointment-preview-list'
import Panels from '../panels/panels'
import ElectronicCards from '../electronic-cards/electronic-cards'

import classes from './personal-cabinet.scss'

const PersonalCabinet = () => {
    return(
        <Panels>
            <div className={classes.container}>
                <AppointmentPreviewList />
                <ElectronicCards />   
            </div>
        </Panels>
    )
}

export default PersonalCabinet