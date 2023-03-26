import React from 'react';

const aboutStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    width: '100vw',

};

const boldStyle = {
    fontWeight: 'bold',
}

const About = () => {
  return (
    
    <div style={aboutStyle}>
      <h2>About</h2>
        <p>Monster Mash is a web application that allows users to search for monsters from the DND5e API</p>
        <p>and mash them together to create a new monster!</p>
        <p>This project was created using the React Framework with Javascript fundamentals.</p>
        <p style={boldStyle}>To learn more about the application's creator you can visit:</p>
        <p><a href="https://www.linkedin.com/in/wberry264/">LinkedIn</a></p>
        <p style={boldStyle}>Or send an email to :</p>
        <p><a href="mailto:wberry264@gmail.com">Wberry264@gmail.com</a></p>
    </div>
  );
};

export default About;