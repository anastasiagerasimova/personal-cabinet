import React from 'react'
import {withRouter, Link} from 'react-router-dom'

import UserCalendar from '../user-calendar/user-calendar'
import ApppointmentsList from '../appointment-list/appointment-list'
import Panels from '../panels/panels'
import {BackIcon} from '../icons/icons'

import classes from './appointment-page.scss'

const PersonalCabinet = ({history, location} ) => {
    return(
        <Panels>
            <div className={classes.container}>
                <div className={classes.back}>
                    <Link to="/">
                        <span><BackIcon /></span>
                        Мои записи
                    </Link>
                </div>
                <div className={classes.appointments}>
                    <ApppointmentsList />
                    <UserCalendar selectedDate={(date) => {
                        history.push(`?${date}`)
                    }}/>
                </div>
            </div>
        </Panels>
    )
}

export default withRouter(PersonalCabinet)