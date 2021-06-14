import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope,faQrcode, faBars, faTimes,faCog } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Logo } from '../../asset/img/logo.svg';
import SideNavItem from './sidenavitem';
import styles from './sidenav.module.scss';





const SideNav = () => {


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
        <div id="cock" className={styles.sidebar}>
            <div className={styles.logoContent}>
                <div className={styles.logo}>
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className={styles.logoName}>CodingLab</div>
                </div>
                <i className='bx bx-menu' id={styles.menubtn}></i>
            </div>
            <ul className={styles.navList}>
                <li>
                    {/* <NavLink> */}
                        <i className="bx bx-search"></i>
                        <input type="text" placeholder="Search"/>
                    {/* </NavLink> */}
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-grid-alt"></i>
                        <span className={styles.linksName}>Dashboard</span>
                    </NavLink>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-user"></i>
                        <span className={styles.linksName}>User</span>
                    </NavLink>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-chat"></i>
                        <span className={styles.linksName}>Messages</span>
                    </NavLink>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className={styles.linksName}>Analytics</span>
                    </NavLink>
                    <span className="tooltip">Analytics</span>
                </li>
            </ul>
            <div className={styles.profileContent}>
                <div className={styles.profile}>
                    <div className={styles.profileDetails}>
                        {/* <img src="pic.jpg" alt="profile pic"/> */}
                        <div className={styles.nameJob}>
                            <div className={styles.name}>Allen Tette</div>
                            <div className={styles.job}>Web Developer</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id={styles.logOut}></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideNav;