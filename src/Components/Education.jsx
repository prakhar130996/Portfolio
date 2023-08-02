import mca from '../images/mca.png';
import tcsc from '../images/tcsc.jpg';
const Experience = () => {

  return (
<section class="education" id="education">

<h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>

  <div class="box">
      <div class="image">
      <img draggable="false" src={mca} alt=""/>
      </div>
      <div class="content">
      <h3>Master of Computer Applications</h3>
      <p>Thakur Institute of Management Studies, Career Development and Research</p>
      <h4>2017-2020 | Completed</h4>
      </div>
  </div>

  <div class="box">
    <div class="image">
    <img draggable="false" src={tcsc} alt=""/>
    </div>
    <div class="content">
    <h3>Bachelor of Science in Information Technology</h3>
    <p>Thakur College of Science and Commerce</p>
    <h4>2014-2017 | Completed</h4>
    </div>
  </div>

</section>
  );
};

export default Experience;
