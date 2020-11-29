import React from 'react';
import './Footer.css';

function Footer() {
  return (
  
      <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="oracle col-4">
            <p>Oracle Certified Java Professional</p>
            <p>Backend Developer</p>
            <img src={"images/02_Java-SE-11-Developer_Professional__1_.png"} alt="Logo" />
          </div>
          
          <div className="copyright col-lg-4 ">
            <p>&copy; 2020-{new Date().getFullYear()} Copyright: László Hunyady. All rights reserved.</p>
          </div>
          
          <div className="col-lg-4 ">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/laszlo-hunyady-40b355177/">LinkedIn</a>
              <a href="https://github.com/lahunyady">Github</a>
              <a href="/contact">Email</a>
            </div>
          </div>

        </div>


      </div>
          
          
       
    </>
  );
}

export default Footer;