import React from 'react';
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../../asset/img/logo.svg';
// import SideNavItem from './sidenavitem';
// import styles from './sidenav.module.scss';





const SideNav = () => {

   

    const toggleSidebar = () => {
        let btn = document.querySelector("#menubtn")
        btn.classList.toggle('active')

        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle('active')

        // let main = document.querySelector(".main-mobile")
        // main.classList.remove('main-mobile')

        // main.classList.add('main')
    }
    return(
        // <>
        // <input type="checkbox" id={styles.check}/>
        // <label htmlFor={styles.check}>
        //     <FontAwesomeIcon
        //         id={styles.btn}
        //         style={{ fontSize: "1.1rem" }}
        //         icon={faBars} />{" "}
        //     <FontAwesomeIcon
        //         id={styles.cancel}
        //         style={{ fontSize: "1.1rem"}}
        //         icon={faTimes} />{" "}
        // </label>
        // <div className={styles.sidenav}>
        //     <header>
        //         <Logo />
        //     </header>
        //     <ul>
        //         <SideNavItem path="/app/dashboard/watch" linktext="Watch" icon={faEnvelope}/>
        //         <SideNavItem path="/app/dashboard/tickets" linktext="Tickets" icon={faQrcode}/>
        //         <SideNavItem path="/app/dashboard/donate" linktext="Donate" icon={faQrcode}/>
        //         <SideNavItem path="/app/dashboard/settings" linktext="Settings" icon={faCog}/>
        //         <SideNavItem path="/app/dashboard/about" linktext="About" icon={faQrcode}/>
        //         <SideNavItem path="/app/dashboard/contact" linktext="Contact" icon={faQrcode}/>
        //     </ul>
        // </div>
        // </>
        <>
        <div className="sidebar">
            <div className="logoContent">
                <div className={"logo"}>
                    <Logo />
                </div>
                <i className='bx bx-menu' id="menubtn" onClick={toggleSidebar}></i>
            </div>
            <ul className={"navList"}>
                {/* <li>
                    <NavLink>
                        <i className="bx bx-search"></i>
                        <input type="text" placeholder="Search"/>
                    </NavLink>
                    <span className="tooltip">Search</span>
                </li> */}
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-grid-alt"></i>
                        <span className={"linksName"}>Dashboard</span>
                    </NavLink>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-user"></i>
                        <span className={"linksName"}>User</span>
                    </NavLink>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-chat"></i>
                        <span className={"linksName"}>Messages</span>
                    </NavLink>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className={"linksName"}>Analytics</span>
                    </NavLink>
                    <span className="tooltip">Analytics</span>
                </li>
            </ul>
            <div className={"profileContent"}>
                <div className={"profile"}>
                    <div className={"profileDetails"}>
                        {/* <img src="pic.jpg" alt="profile pic"/> */}
                        <div className={"nameJob"}>
                            <div className={"name"}>Allen Tette</div>
                            <div className={"job"}>Web Developer</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id={"logOut"}></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideNav;