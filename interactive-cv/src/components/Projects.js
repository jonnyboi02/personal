import React from 'react';
import crypto from './assets/crypto.png'
import stock from './assets/stockmarket.png'
import weather from './assets/weather.png'
import './Projects.css'

const Projects = () => {

    const cryptoLink = "https://kaf.qmplus.qmul.ac.uk/browseandembed/index/media-redirect/entryid/1_xqd54q9r/showDescription/false/showTitle/false/showTags/false/showDuration/false/showOwner/false/showUploadDate/false/playerSize/400x285/playerSkin/36133491/thumbEmbed//autoPlay//startTime//endTime/"
    
return (
<section>
<h2>Projects</h2>
<div>
    <h3>Weather App</h3>
    <p>Developed a React weather app with real-time API integration, crafted a user-friendly interface with live weather updates.</p>
    <img className = "projects" src={weather} ></img>

</div>
<div>
    <h3 onClick={() => window.open(cryptoLink)}>Cryptocurrency Loan System</h3>
    <p>
    Developed a Cryptocurrency Loan System using Geth Local Blockchain and Solidity smart contracts. The frontend was built using Vue.js and JavaScript, and the backend was created with Django.
    </p>
    <img className = "projects" src={crypto} ></img>
</div>
<div>
    <h3>Stock Trading System</h3>
    <p>
    Created a Stock Trading System using Java. The project involved implementing API calls to access live feed data and designing the graphical user interface (GUI) with Swing.
    </p>
    <img className = "projects" src={stock}></img>
    </div>
<div>
    <h3>Bitcoin Dissertation</h3>
    <p>
    Conducted research on Bitcoin, with a focus on the workings of the cryptocurrency and the Blockchain. Emphasized cryptography and abstract algebra in the study.
    </p>
</div>
</section>
);
};

export default Projects;