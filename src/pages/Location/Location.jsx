import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';


import heroImage from '../../assets/HeroSection/hero-location.jpg';
import './Location.css';




export default function Location() {
  return (
    <div>
      <Navbar />
      <HeroSection
        image={heroImage}
        title="Location"
        // darken
      />

      <div className="location-info">
        <p className="address">8391 Alexandra Rd # 1110, Richmond, BC, Canada</p>
        <p className="hours">Sunday - Thursday: Noon - 10:00 PM</p>
        <p className="hours">Friday - Saturday: Noon - 11:00 PM</p>
      </div>

      <div className="map-container">
        <iframe
          // title="店鋪位置"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5216.330068722192!2d-123.1307661!3d49.17845489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486752fe812e1cf%3A0xb333a051e4a8db9a!2sLeisure%20Tea%20%26%20Coffee!5e0!3m2!1sen!2sca!4v1746064484541!5m2!1sen!2sca"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


    </div>)
}
