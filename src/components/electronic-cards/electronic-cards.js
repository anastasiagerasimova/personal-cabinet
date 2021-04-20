import React from 'react'

import {ReportIcon, AddIcon, LabIcon, ClockIcon} from '../icons/icons'

import classes from './electronic-cards.scss'

const ElectronicCards = () => {
    return(
        <div>
            <div className={classes.heading}>Электронная карта</div>
            <div className={classes.list}>
                <a className={classes.card}>
                    <div className={classes.imageCell}>
                        <ReportIcon />
                    </div>
                    <div className={classes.textCell}>
                        <h4>Информация о пациенте</h4>
                        <hr></hr>
                        <ul>
                            <li>Ваши личные данные</li>
                            <li>Рекомендации врачей</li>
                            <li>История болезней</li>
                        </ul>
                    </div>
                </a>
                <a className={classes.card}>
                    <div className={classes.imageCell}>
                        <LabIcon />
                    </div>
                    <div className={classes.textCell}>
                        <h4>Результаты анализов</h4>
                        <hr></hr>
                        <p>Вы можете узнать здесь результаты своих анализов</p>
                    </div>
                </a>
                <a className={classes.card}>
                    <div className={classes.imageCell}>
                        <AddIcon />
                    </div>
                    <div className={classes.textCell}>
                        <h4>Добавить информацию</h4>
                        <hr></hr>
                        <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
                    </div>
                </a>
                <a className={classes.card}>
                    <div className={classes.imageCell}>
                        <ClockIcon />
                    </div>
                    <div className={classes.textCell}>
                        <h4>История приемов</h4>
                        <hr></hr>
                        <p>Вся информация о полученных услугах за все время хранится здесь</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ElectronicCards