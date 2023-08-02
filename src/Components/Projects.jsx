import Carousel from 'react-elastic-carousel'
import port from "../images/port.png"
import port2 from "../images/port2.png"

const project = [
    {
        id:1,
        title: 'Smart Street Light System Prototype',
        description: 'An intelligent system that controls the intensity of street lights turns them on and off in real-time powered by solar power. Saved Power can later be used to fulfill the electricity shortage in rural areas.',
        technologies: ['IOT', 'Arduino Uno', 'C++ for Arduino',],
        images: port2,
    },
    {
        id:2,
        title: 'My Personal portfolio',
        description: "Personal Portfolio Website. Don't Need Much Info About It. You're Here Only!",
        technologies: ['HTML', 'CSS', 'JavaScript', "React"],
        images: port,
    },
    // Add more projects as needed
  ];

const Projects = () => {
      const items  = project
        return (
             <Carousel className="carousel">
                 {items.map(item => <div  className="project-container" key={item.id}> 
                    <h1 className="project-title" >{item.title}</h1>
                    <p className="project-description">{item.description}</p>
                    <p className="project-technologies" >Technologies used: {item.technologies.join(', ')}</p>
                    <img  className="project-image"  src={item.images} alt='project-ScreenShot'/>
                    </div>)}
            </Carousel>
    )
}

export default Projects;