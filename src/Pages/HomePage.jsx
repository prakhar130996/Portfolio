import Navbar from "../Components/Navbar";
import "../Components/homePage.css";
import HeadingBanner from "../Components/HeadingBanner";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Parallax from "../Components/Parallax";
import Footer from "../Components/Footer";
import Education from "../Components/Education"
import Project from "../Components/Projects"


const HomePage = () => {
    return(
        <>
        <Navbar/>
        <HeadingBanner/>
        <Parallax />
        <Skills/>
        <Education />
        {/* <PhoneScrollAnimation/> */}
        <Experience/>
        <Project/>
        <Footer/>
        </>
    )
}

export default HomePage