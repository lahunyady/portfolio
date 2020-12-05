import React, {useState} from 'react';
import './EmailForm.css';
import './../App.css';
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


function EmailForm() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({});
  const updateInput = e => {
    setFormData({
      ...formData,
      languageCode: i18n.language,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((response) => (response.json()))
      .then((response)=> {
        if (response === 'OK') {
          console.log("ok");
          setFormData({
            name: '',
            email: '',
            message: '',
            languageCode: '',
          })
        } else  {
          console.log("not ok");
        }
    })
  }

  return (<>
        <div className="container">
          <div className="full-width">
            <p>{t("Contact me form")}</p>
          </div>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="row">
              <div className="col-md-3 col-sm-12 offset-md-3">
                <div className="form-group">
                  <input placeholder={t("Name form")} type="text" name="name" required="required" className="form-control" value={formData.name || ''} onChange={updateInput} />
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="form-group">
                    <input placeholder={t("Email form")} type="email" name="email" className="form-control" aria-describedby="emailHelp" value={formData.email || ''} onChange={updateInput} />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 offset-md-3">
                <div className="form-group">
                  <textarea placeholder={t("Message form")} className="form-control" name="message" required="required" rows="5" value={formData.message || ''} onChange={updateInput} />
                </div>
              </div>
              <div className="full-width">
                <button type="submit" className="btn btn-primary">{t("Send form")}</button>
              </div>
            </div>    
        </form>
      </div>
    </>
  )
}
  
  export default EmailForm;