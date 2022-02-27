import React from 'react'
import './Aboutstyle.css'
import GitIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstaIcon from '@material-ui/icons/Instagram';

let iconStyles = {
    fontSize: '35px',
    margin: '10px',
    
  };

const Contact = () => {
    return (
        <div className="contactstyle " id="section5">
            <section className='container' data-aos="fade-up">
                <div className="text-center">
                    <div className='contact-heading'>
                    <h1>Contact Details</h1>
                    <h5>H.M.T.Prabodhani Hearth<br/>Meewallewa, Nikaweratiya,<br/>Kurunegala,<br/>077-7698263<br/><br/>
                        hmtprabodhani@gmail.com</h5>
                    </div>
                    <div className='icon-container'>
                        <GitIcon style={iconStyles}/>
                        <FacebookIcon style={iconStyles}/>
                        <InstaIcon style={iconStyles}/>
                    </div>
                    <br/>
                    
                    
                </div>
            </section>
        </div>
    )
}
export default Contact;