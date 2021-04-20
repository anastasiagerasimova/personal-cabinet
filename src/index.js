import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import {AppointmentsServiceContect} from './components/appointments-service-context'
import AppointmentsService from './services/appointments-service'
import store from './store'

const appointmentsService = new AppointmentsService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
                <AppointmentsServiceContect.Provider value={appointmentsService}>
                    <Router >
                        <App />
                    </Router>
                </AppointmentsServiceContect.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root')
)
