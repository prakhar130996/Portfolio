import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
    color: gray;
    font-size: 1.1em;
    background-color: #F3F3F3;
    display: grid;
    grid-template-columns: 75% 25%;
    flex-wrap: wrap;
    padding: 5% 10%;
    font-size: 1.1em;

    @media (max-width: 1100px) {
        padding: 4% 10%;
    }
    @media (max-width: 800px) {
        grid-template-columns: 100%;
    }
`;

const ApplyInfo = styled.div`
    
    & div {
        margin: 2% auto;
        line-height: 2em;
        word-spacing: 0.1em;
    }

    @media (max-width: 500px) {
        & div {
            margin: 3% 0;
            text-align: justify-all;
        }
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const DownloadApp = styled.div`

    & div {
        line-height: 1.3em;
        word-spacing: 0.1em;
    }

    & .appIcons > span {
        padding: 0 10% 0 0;

        & img:hover {
            filter: brightness(1%);
        }
    }

    & .h1 {
        margin-right: 15px;
    }

    @media (max-width: 1100px) {
        width: 100%;

        & div {
            margin: 2% 0;
        }
    }
`;


const Footer = () => {

    const linkedinProfile =     'https://www.linkedin.com/in/prakhar-jain-66711a12b/';
    const instagramProfile =    'https://www.instagram.com/prakhar130996/';
    const WhatsappProfile =     'https://wa.me/8879961741/';

    return (
        <FooterContainer>
            {/* FOOTER LEFT */}
            <ApplyInfo>
                <div>
                <h1>Thank you for visiting my personal portfolio website.<br/>Connect with me over socials.</h1>
                </div>
                <div>
                   
                </div>
            </ApplyInfo>

            <DownloadApp>
                {/* EMPTY DIV DONT REMOVE */}
                <div></div>
                <div>
                <h1>Let's Connect</h1>
                </div>
                <div className="appIcons">
                    <span>
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
                    </span>
                </div>
            </DownloadApp>
        </FooterContainer>
    )
}

export default Footer;