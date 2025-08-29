import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from  '../../assets/location_icon.svg'
import call_icon from  '../../assets/call_icon.svg'


const Contact = () => {

  const [loading, setLoading] = React.useState(false);

const onSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  const formData = new FormData(event.target);
  formData.append("access_key", "a3717b1b-49c6-4f3a-917d-d6456774de20");
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  }).then((res) => res.json());
  setLoading(false);
  if (res.success) {
    alert("Message sent successfully ✅");
    event.target.reset();
  } else {
    alert("Something went wrong ❌");
  }
};


  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Currently open to new opportunities Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora tenetur animi beatae labore, qui, asperiores exercitationem natus dignissimos impedit delectus praesentium, numquam blanditiis quas.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <a href="mailto:nigelfurtado90@gmail.com">
                        <img src={mail_icon} alt="mail icon" /><p>nigelfurtado90@gmail.com</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <a href="tel:+917972375144">
                        <img src={call_icon} alt="call icon" /><p>+91 7972375144</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <a href="https://www.google.com/maps?q=Salcete+Goa+India" target="_blank" rel="noopener noreferrer">
                    <img src={location_icon} alt="location icon" /><p>Salcete-Goa, India</p>
                    </a>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label >Name</label>
            <input type="text" name="name" placeholder="Enter name" />
            <label >Email</label>
            <input type="text" name="Email" placeholder="Enter email" />
            <label >Message</label>
            <textarea  name="message" rows="8" placeholder="Enter Message"></textarea>
            <button type="submit" className='contact-submit' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
