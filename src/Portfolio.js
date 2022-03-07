import React from 'react'
import mobile from './Images/image1.png'
import web from './Images/image2.png'
import image4 from './Images/laptop.png'
import ui from './Images/image3.png'


const Portfolio = () => {
  return (
    <section className='portfoliostyle' id='section4'>
      <div className="portfolio-heading">
        <h1>Skills</h1>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="portfolio-img has-margin-right">
            <img src={mobile} height='250px' alt="" />
          </div>
          <div className="portfolio-description">
            <h5>Mobile Application </h5>
            
            <p>
            I also have knowledge of React Native development and have experience in building 
            Mobile applications. There are also mobile apps that I have created.I have knowledge 3
            about Firebase.
            </p>
            <h4><a href='https://github.com/FHSS-USJ/final-project-prabodhani1234-1'>works</a></h4>

          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h5>web Application</h5>
            
            <p>
            I also have knowledge about HTML, CSS, Javascript, ReactJs 
            development and have experience in building web applications.
            And also, I have knowledge about Firebase, SQL
            </p>
            <h4><a href='https://github.com/prabodhani1234/React-Portfolio'>works</a></h4>

          </div>
          <div className="portfolio-img">
            <img src={web} height='250' alt="" />
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={image4} height='250' alt="" />
          </div>
          <div className="portfolio-description">
            <h5>Graphics Designs</h5>
            
            <p>
            I have some knowledge about Adobe Photoshop, Adobe illustrator and 
            Adobe Premiere pro. I have design coffee table books, vedios, 
            and cattoon character.
            </p>
            <h4><a href='https://drive.google.com/file/d/1Pvau5Oyb3BH7Kvu8XCn3dsQ_ctL-xg4t/view?usp=sharing'>works</a></h4>
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h5>UI/UX Design</h5>
            
            <p>
            I have design user interface. I am reseaching about UX.
            </p>
            <h4><a href='https://drive.google.com/file/d/19M-awvpHfpb2EkOIR013Ikwy22aABRfn/view?usp=sharing'>works</a></h4>

          </div>
          <div className="portfolio-img">
            <img src={ui} height='250' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio;