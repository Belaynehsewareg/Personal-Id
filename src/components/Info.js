import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Email(){
    return(
        <FontAwesomeIcon icon={ faFacebook } />
    )
}
function Linkedin(){
    return(
        <FontAwesomeIcon icon={faLinkedin} />
    )
}
export default function Info(){
    return(
        <div className="info-container">
            <div className="pic">
                <img />
            </div>
            <div className="info">
                <h2>Belayneh sewareg</h2>
                <h3>Frontend Developer</h3>
                <h4>BelaynehWebsite</h4>
            </div>
            <div className="button">
                <ul>
                    <li className="email"><a href="belasewareg@gmail.com"><Email/><span></span>Email</a></li>
                    <li className="linkedin"><a href="belasewareg@gmail.com"><Linkedin/><span></span>Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}