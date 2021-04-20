import {ReportIcon} from '../icons/icons'

import classes from './electronic-list-item.scss'

const ElectronicListItem = () => {
    return(
        <a className={classes.electronicCard}>
            <div className={classes.imageCell}>
                <ReportIcon />
            </div>
            <div className={classes.textCell}>
                <h4>Информация о пациенте</h4>
                <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
            </div>
        </a>
    )
}

export default ElectronicListItem