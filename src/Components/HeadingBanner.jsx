import PhoneAnimation from "./PhoneAnimation"
import logo from '../images/info.png';
import Prakhar_Resume from "../Prakhar_Resume.pdf"
    
const HeadingBanner = () => {
    return(
        <div className="heading-banner-container">
                <div className="top-Heading">
                    <span class="a"> <img className="object-cover" alt="hero" src={logo} /> </span>
                        <p className="title">Hi,<br/> I'M Prakhar.</p>
                        <p className="Profession">Full Stack Developer</p>

                        <a
                            href={Prakhar_Resume}
                            download="Prakhar_jain_resume"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <button>Resume</button>
                        </a>
                        
                </div>
                <PhoneAnimation/>
        </div>
    )
}

export default HeadingBanner;