import React from "react";
import isEmail from 'validator/lib/isEmail';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Email sent to contact@theguests.band. Please allow 24 hours for a reply.")
        document.getElementById('myModal').style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    const isDisabled = () => (
      name === "" || message === "" || !isEmail(email)
    )
    return (
      <form onSubmit={this.handleSubmit} netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <p style={{display: "none"}}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
          <label>
            Name<br /> 
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Email<br />
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message<br />
            <textarea style={{width: 300, height: 200}} name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit" disabled={isDisabled()}>SEND</button>
        </p>
      </form>
    );
  }
}

const Contact = () => (
  <main id="contact">
    <section className="center-vert">
      <h3>Contact Us</h3>
      <p>For booking and other inquiries, send us a message below or email us at <a href="mailto:contact@theguests.band">contact@theguests.band</a>.<br />We'd love to be part of your event!<br /><i>NOTE: All bookings are subject to our <a target="_blank" rel="noopener noreferrer" href="/terms">terms</a>.</i></p>
      <ContactForm />      
    </section>
  </main>
)

export default Contact;