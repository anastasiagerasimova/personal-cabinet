import React from 'react'

import Photo1 from '../images/doctor-photo-1.png'
import Photo2 from '../images/doctor-photo-2.png'

export default class AppointmentsService extends React.Component{
    constructor(){
        super()
        this.data = [
            {
                id: 1,
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                doctorName: 'Малушко Т. Н.',
                department: 'Хирургия',
                doctorPhoto: Photo2,
                dayOfWeek: 'Понедельник',
                date: '15.04.2021',
                time: '15:30'
            },
            {
                id: 2,
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                doctorName: 'Харьков В. С',
                department: 'Терапевтическое отделение',
                doctorPhoto: Photo1,
                dayOfWeek: 'Понедельник',
                date: '15.04.2021',
                time: '18:30'
            },
            {
                id: 3,
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                doctorName: 'Малушко Т. Н.',
                department: 'Хирургия',
                doctorPhoto: Photo2,
                dayOfWeek: 'Вторник',
                date: '30.04.2021',
                time: '12:10'
            },
            {
                id: 4,
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                doctorName: 'Харьков В. С',
                department: 'Терапевтическое отделение',
                doctorPhoto: Photo1,
                dayOfWeek: 'Четверг',
                date: '22.04.2021',
                time: '12:30'
            }
        ];
    }
    getAppointments = (searchDate) => {
        
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.data)
        }, 1000)
      })

    }
}