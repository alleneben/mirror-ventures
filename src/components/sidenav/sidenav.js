import React from 'react';
import { ReactComponent as Logo } from '../../asset/img/logo.svg';
import SideNavItem from './sidenavitem';
// import styles from './sidenav.module.scss';





const SideNav = () => {

   

    const toggleSidebar = () => {
        let btn = document.querySelector("#menubtn")
        btn.classList.toggle('active')

        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle('active')

        let btn_2 = document.querySelector("#menubtn_2")

        if(btn_2.classList.contains('active')){
            btn_2.style.display = "block"
            sidebar.style.display = "none"
        }
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
                <SideNavItem path="/app/dashboard/watch" linktext="Watch" icon={"bx bx-video"}/>
                <SideNavItem path="/app/dashboard/tickets" linktext="Tickets" icon={"bx bxs-coupon"}/>
                <SideNavItem path="/app/dashboard/donate" linktext="Donate" icon={"bx bx-money"}/>
                <SideNavItem path="/app/dashboard/settings" linktext="Settings" icon={"bx bx-cog"}/>
                <SideNavItem path="/app/dashboard/about" linktext="About" icon={"bx bx-user"}/>
                <SideNavItem path="/app/dashboard/contact" linktext="Contact" icon={"bx bx-chat"}/>

                {/* <li>
                    <NavLink>
                        <i className="bx bx-search"></i>
                        <input type="text" placeholder="Search"/>
                    </NavLink>
                    <span className="tooltip">Search</span>
                </li> */}
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