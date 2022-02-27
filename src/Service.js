import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { colors } from '@material-ui/core';

let iconStyles = {
  fontSize: '75px',
  
};

const Service = () => {
  return (
    <div className='servicestyle' id='section3'>


      <div className="container Service">
        <div className="service-heading">
          <h1>Education</h1>
        </div>
        <div className="my-skills">
          
            
            <h3>University of Sri Jayewardenepura</h3>
            <p>
            Bachelor of science(Honours) Information and Communication Technology - Started March 2020<br/>
            A undergraduate in Department of ICT, Faculty of Humanities and Social Science, USJ.
            </p>
          
          
          
            <h3>Mahasen National School - Nikaweratiya</h3>
            <p>
            G.C.E Advance Level - 2018
            </p><br/>
        </div>
        
        <div className="service-heading">
          <h1><br/><br/>Membership</h1>
        </div>
        <div className="my-skills">
        <h3>Institute of Electrical and Electronics Engineers (IEEE)</h3>
            <p>
            Student Member of IEEE - 2022
            </p>
        </div>
      </div>

    </div>


  )
}
export default Service;