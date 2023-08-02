import Centos from '../images/CentOS1.png';
import pythonpng from '../images/python1.png';
import reactpng from '../images/react1.png';
import javascriptpng from '../images/jslogo1.png';
import git from '../images/git1.png';
import gitlab from '../images/gitlab.png';
import fastapi from '../images/fastapi.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';

const Skills = () => {
    return(
        <div className="brands" id="skill">
            <p>Skill that I bring upon the table.</p>
            <img  src={Centos} alt="CentOS logo"/>
            <img src={docker} alt="docker logo"/>
            <img src={pythonpng} alt="pythonpng logo" />
            <img src={fastapi} alt="fastapi logo"/>
            <img className="smalllogo" src={javascriptpng} alt="javascriptlogo" />
            <img src={reactpng} alt="reactpng logo" />
            <img className="smalllogo" src={mysql} alt="mysql logo"/>
            <img src={git} alt="git logo"/>
            <img src={gitlab} alt="gitlab logo" />
        </div>
       
    )
}

export default Skills;

