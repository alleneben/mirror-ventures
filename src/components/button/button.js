import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Button = (props) => {
    const { btntext, styles, icon, iconSize } = props;

    return(
        <button className={styles} {...props}>
        {/* <FontAwesomeIcon
            style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
            icon={icon} />{" "} */}
            <span className="icon-button">{ icon }</span>
            {btntext}
        </button>
    )
}

export default Button;