import React from 'react';
// import { Link } from 'react-router-dom';
import DashboardRoutes from '../../routes/dashboard-routes';
// import { faUser, faBell, faSearch} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { SideNav } from '../../components';
import styles from './dashboard-layout.module.scss';


const DashboardLayout = (props) => {
    // const [title,setTitle] = useState('Welcome Jones')
    return(
        <div className={styles.container}>
            <SideNav />
            {/* <nav className={styles.nav}> */}
                {/* <h1>{'Welcome Jones'}</h1>
                <div className={styles.right}>
                    <FontAwesomeIcon style={{ fontSize: "1rem", color: "#cbd5e0", marginRight: "1rem"}} icon={faSearch}/>
                    <FontAwesomeIcon style={{ fontSize: "1rem", color: "#cbd5e0", marginRight: "1rem"}} icon={faBell}/>
                    <div className={styles.vertical}></div>
                    <h1>Jones Iverson</h1>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>
                            <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faUser} />{" "}
                        </button> */}
                        {/* <div className={styles.dropdowncontent}>
                            <Link to='/'>
                                <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faUserCog} />{" "}
                                Settings
                            </Link>
                            <Link to='/'>
                                <FontAwesomeIcon style={{ fontSize: "1.5rem"}} icon={faSignOutAlt} />{" "}
                                Logout
                            </Link>
                        </div> */}
                    {/* </div>
                </div>
            </nav> */}
            {/* <TopNav /> */}
            <main className={"main"}>
                <DashboardRoutes />
            </main>
        </div>
    )

}

export default DashboardLayout;