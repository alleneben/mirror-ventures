import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './button.module.scss';




const Button = (props) => {
    const { btntext, btntype, icon } = props;

    return(
        <button className={styles[btntype]} {...props}>
        {/* <FontAwesomeIcon
            style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
            icon={icon} />{" "} */}
            <span className={styles.icon}>{ icon }</span>
            {btntext}
        </button>
    )
}

export default Button;