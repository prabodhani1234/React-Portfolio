import React from 'react'
// import { link } from 'react-scroll'

const Navbar = () => {
  return (
   
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark"
      style={{backgroundColor:"#16162d"}}>
        
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#section1">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#section3">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#section4">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#section5">Contact</a>
            </li>


          </ul>

        </div>
      </nav>

    </header>

  )
}


export default Navbar;