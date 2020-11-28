import React from 'react';
import './EmailForm.css';
import './../App.css';

class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="container">
          <div className="full-width">
            <p>Vedd fel kapcsolatot velem!</p>
          </div>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="row">
              <div className="col-md-3 col-sm-12 offset-md-3">
                <div className="form-group">
                  <input placeholder="Név" type="text" required="required" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="form-group">
                    <input placeholder="Email" type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 offset-md-3">
                <div className="form-group">
                  <textarea placeholder="Üzenet" className="form-control" required="required" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
              </div>
              <div className="full-width">
                <button type="submit" className="btn btn-primary">Küldés</button>
              </div>
            </div>    
        </form>
      </div>
      );
    }
  
    resetForm(){
      this.setState({name: "", email: "", message: ""})
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(e) {
      e.preventDefault();
    
      fetch('http://localhost:3002/send', {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(
        (response) => (response.json())
          ).then((response)=> {
        if (response === 'OK') {
          console.log("ok");
          this.resetForm()
        } else  {
          console.log("not ok");
        }
      })
    }
  }
  
  export default EmailForm;