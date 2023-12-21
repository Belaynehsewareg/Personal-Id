import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Facebook(){
    return(
        <FontAwesomeIcon icon={faFacebook} />
    )
}
function Telegram(){
    return(
        <FontAwesomeIcon icon={faTelegram} />
    )
}

function Instagram(){
    return(
        <FontAwesomeIcon icon={faInstagram} />
    )
}

function Github(){
    return(
        <FontAwesomeIcon icon={faGithub} />
    )
}

export default function Footer(){
    return(
        <div className="footer-container">
            <ul>
                <li><a href="https://www.facebook.com/biela.king.9"><Facebook/></a></li>
                <li><a href="https://t.me/belayneh_21"><Telegram/></a></li>
                <li><a href="https://www.instagram.com/belayneh_21/"><Instagram/></a></li>
                <li><a href="https://github.com/Belaynehsewareg"><Github/></a></li>
            </ul>
        </div>
    )
}