import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Button = ({ btntext, styles, onClick,disable, icon, iconSize }) => {

    return(
        <button className={styles} onClick={onClick} disabled={disable}>
        {/* <FontAwesomeIcon
            style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
            icon={icon} />{" "} */}
            <span className="icon-button">{ icon }</span>
            {btntext}
        </button>
    )
}

export default Button;