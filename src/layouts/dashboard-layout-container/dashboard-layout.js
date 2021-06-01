import React from 'react';
import { Link } from 'react-router-dom';
import DashboardRoutes from '../../routes/dashboard-routes';
import { faUser, faUserCog, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { SideNav } from '../../components';
import styles from './dashboard-layout.module.scss';


const DashboardLayout = (props) => {

    return(
        <div className={styles.container}>
            <SideNav />
            <nav className={styles.nav}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                    <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faUser} />{" "}
                </button>
                <div className={styles.dropdowncontent}>
                    <Link to='/'>
                        <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faUserCog} />{" "}
                        Settings
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faSignOutAlt} />{" "}
                        Logout
                    </Link>
                </div>
                </div>
            </nav>
            {/* <TopNav /> */}
            <main className={styles.main}>
                <DashboardRoutes />
            </main>
        </div>
    )

}

export default DashboardLayout;