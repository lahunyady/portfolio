import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="personal">
          <div  className="badges">
            <img src={"images/02_Java-SE-11-Developer_Professional__1_.png"} alt="Logo" />
          </div>
          <div className="title">
            <p className="footer-paragraph">Oracle Certified Java Professional</p>
            <p className="footer-paragraph">{t("Title")}</p>
          </div>
          
        </div>
        <div className="social">
              <a className="footer-link" href="https://www.linkedin.com/in/laszlo-hunyady-40b355177/">LinkedIn</a>
              <a className="footer-link" href="https://github.com/lahunyady">Github</a>
              
        </div>

      </div>
      <div className="copyright">
        <p className="copyright-text">&copy; {t("Name")} 2020-{new Date().getFullYear()} {t("Rights")}</p>  
      </div>
    </div>
  );
}

export default Footer;