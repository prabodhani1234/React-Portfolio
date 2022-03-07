import React from 'react'
import './Aboutstyle.css'
import profPic from './Images/profile.png'


const About = () => {
  return (
    <div className='aboutstyle' id="section2">

      {/* <section className="about"> */}

      <div className="container" data-aos="fade-right">

        <div className="profpic">
          <img src={profPic} height="400px" />

        </div>
        <div className="about-heading" >
          <h1 id='section2'>About</h1>
        </div>

        <p>
        Hello, I am H.M.Tharanga Prabodhani Herath. I am a undergraduate 
        in University of Sri Jayewardenepura. I am currently following 
        Bachelor of science Information and Communication Technology. <br/><br/>
        I am much interested in developing new things which excite me a lot. 
        I interested in web development, Mobile application development and User Interface Design.
        I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. 
  
          </p>
        <br />
        <p>
          Here are a few technologies I've been working with recently:
          <li>JavaScript</li>
          <li>HTML5 & CSS</li>
          <li>ReactJS</li>
          <li>Java</li>
          <li>python</li>
          <li>React Native</li>
          
          
          
        </p>


      </div>

      

      {/* </section> */}

      <div className="landing-text">
        {/* <img src={logo} alt="aitsam ahad logo" className="logo" /> */}
        <h6>-PRABODHANI HERATH-</h6>
        
      </div>

    </div>
  )
}
export default About;