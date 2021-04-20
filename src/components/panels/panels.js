import React from 'react'

import {
    HeartIcon, StethoscopeIcon, 
    SpeakIcon, TestIcon, 
    BookIcon, SearchIcon, 
    NoticeIcon, EyeIcon,
    HelpIcon, ArrowDownIcon
} from '../icons/icons'
import userImg from '../../images/user-photo.jpg'
import logo from '../../images/logo.png'

import classes from './panels.scss'

const Panels = (props) => {
    return(
        <React.Fragment>
        <div className={classes.leftPanel}>
            <div className={classes.logo}>
                <div>Логотип</div>
            </div>
            <div className={classes.navigation}>
                <ul>
                    <li>
                        <a href="#" className={classes.active}>
                            <span><HeartIcon /></span>
                            Профиль
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><StethoscopeIcon /></span>
                            Врачи и клиники
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><SpeakIcon /></span>
                            Сообщения
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><TestIcon /></span>
                            Тестирование
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><BookIcon /></span>
                            Полезно знать
                        </a>
                    </li>
                </ul>
                <button className={classes.btnPost}>Подать заявку</button>
                <div className={classes.info}>
                    <a>
                        <span><HelpIcon/></span>
                        Помощь
                    </a>
                </div>
                <div className={classes.imgLogo}>
                    <img src={logo}></img>
                </div>
            </div>
        </div>

        <div className={classes.mainWrawpper}>
                <div className={classes.userHeader}>
                    <div className={classes.heading}>Мой профиль</div>
                    <div >
                        <div className={classes.userNav}>
                            <a href="#">
                                <span >
                                    <SearchIcon />
                                </span>
                            </a>
                            <a  href="#">
                                <span >
                                    <NoticeIcon />
                                </span>
                            </a>
                            <a  href="#">
                                <span >
                                    <EyeIcon/>
                                </span>
                            </a>
                            <div  >
                                <div className={classes.userSelect}>
                                    <div className={classes.userSelectBtn}>
                                        <span><img src={userImg}></img></span>
                                        <span><ArrowDownIcon/></span>
                                    </div>
                                    {/* <ul></ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {props.children}
        </div>
        </React.Fragment>
    )
}

export default Panels