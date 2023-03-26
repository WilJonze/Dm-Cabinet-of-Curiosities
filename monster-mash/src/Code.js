import React from 'react';

const codeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    width: '100vw',

};

const Code = () => {
  return (
    <div style={codeStyle}>
      <h2>Code</h2>
      <p>To view the Source Code or Learn how you can run Monster Mash on you local machine </p>
        <p>visit the <a href="https://github.com/WilJonze/Dm-Cabinet-of-Curiosities">GitHub Repository</a>.</p>
        <p>If you would like to see more of my work you should check out </p>
        <p><a href="https://github.com/WilJonze">my GitHub</a> and see what I'm working on next!</p>

        <p>Monster Mash was created using the following technologies:</p>
        <ul>
            <li>React</li>
            <li>JavaScript</li> 
            <li>HTML</li>   
            <li>CSS</li>    
            <li>AWS</li>
        </ul>

        <p>Finally, check out the great work from <a href="http://www.dnd5eapi.co/docs/#overview">D&D 5e API</a>. </p>

    </div>
  );
};

export default Code;






