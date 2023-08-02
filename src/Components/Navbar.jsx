import { useState } from "react";
import logo from '../images/home_logo.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from "react-router-hash-link" ;


const Navbar = () => {

    const linkedinProfile =     'https://www.linkedin.com/in/prakhar-jain-66711a12b/';
    const instagramProfile =    'https://www.instagram.com/prakhar130996/';
    const WhatsappProfile =     'https://wa.me/8879961741/';
    


    // Get the button that opens the modal
    const [modalState, setModalState] = useState(false);

    function openModal() {
        setModalState(true);
    }

    function closeModal() {
        setModalState(false);
    }

    return (
        <>
            <nav>
                <div className="logo" >
                    <img src={logo} alt="home_logo" />
                    <h1>Prakhar Jain</h1>
                </div>
                <ul className="NavLinks">
                    <li><HashLink to="/#aboutme" >About Me </HashLink> </li>
                    <li><HashLink to="/#skill">Skills</HashLink></li>
                    <li><HashLink to="/#Exp">Experience</HashLink></li>
                </ul>
                <div className="download-btn-nav">
                    <button onClick={openModal}>Hire Me</button>
                </div>

            </nav>

            <div id="myModal" class="modal" style={{ display: modalState ? "block" : "none" }}>

                <div class="modal-content">
                    <span class="close" onClick={closeModal}>&times;</span>

                        <h4 style={{ fontSize: "28px" }}>Let's Connect  </h4>
                        <div className="social-media-container">
                            <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="social-media-icon-li" icon={faLinkedin} size="4x" />
                            </a>
                            <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="social-media-icon-ins" icon={faInstagram} size="4x" />
                            </a>
                            <a href={WhatsappProfile} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="social-media-icon-wa" icon={faWhatsapp} size="4x" />
                            </a>
                        </div>

                </div>

            </div>

        </>
    )
}

export default Navbar;