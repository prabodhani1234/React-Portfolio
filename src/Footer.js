import React from "react";
import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const Footer = () => {
  return (
    <footer className="copyright">
      <div className="up" id="up" onClick={() => scroll.scrollToTop()}>
        <ArrowUpwardIcon className='i' />
      </div>
      <p>
      All content copyright &copy; 2022, prabodhani herath.
      </p>
    </footer>
  );
};

export default Footer;
