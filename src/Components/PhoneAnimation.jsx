import Centos from '../images/CentOS.png';
import pythonpng from '../images/Python.png';
import reactpng from '../images/reactlogo.png';
import javascriptpng from '../images/jslogo.png';
import git from '../images/git.png';


const PhoneAnimation = () => {

    return(
        <div className="phone-animation-container">
            <img src={Centos} alt="centos logo"/>
            <img src={reactpng} alt="react logo" />
            <img src={pythonpng} alt="Python logo"/>
            <img src={javascriptpng} alt="JS logo"/>
            <img src={git} alt="GIT logo"/>
        </div>
    )
};

export default PhoneAnimation