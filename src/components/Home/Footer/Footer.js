import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faGoogle, faTwitter, faInstagram, faYoutube);

const Footer = () => {
    return (
        <div className = '' style={{backgroundColor:"skyblue", color:"brown", border:"1px solid blue"}}>
            <h4>Connect us in Social Media !</h4>
            <div className = 'd-flex'>
                <FontAwesomeIcon icon={faGoogle} size="2x"/>
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                <FontAwesomeIcon icon={faYoutube} size="2x"/>

            </div>
            <small>All rights reserved</small>
        </div>
    );
};

export default Footer;