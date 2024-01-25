import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-container'>
      <h1>About Us</h1>
      <p>Welcome to JsonView - JSON Hosting!
         It is a platform that allows 
         you to securely host and share your JSON 
         files with ease with a an Endpoint URL. Whether you're a developer, data analyst, 
         or simply working with JSON data, This platform provides a reliable 
         solution for storing and accessing your JSON content.</p> <br />

         <h1>Our Mission</h1>
         <p>JsonView's goal is to simplify the process of hosting and sharing JSON files.
             We understand the importance of seamless collaboration and easy access to data, which
              is why we've developed an intuitive platform that meets the needs of professionals and
               enthusiasts alike. We strive to provide a user-friendly experience while maintaining a
                high level of security and reliability.</p> <br />
            
                <Link to="/" className='btn btn-primary'>Get Started</Link>

    </div>
  )
}

export default About
