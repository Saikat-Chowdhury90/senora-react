import React from 'react'

import './Body.css';
const Body = () => {
  return (
    <div className='body' id='portfolio'>
        <div className="parent">
            <div className="body-details">
                <div>
                <div className='header'>
                    <div className="heading">
                        <h1>Portfolio</h1>    
                    </div>
                    <div className="nav-bar">
                        <nav>
                            <ul className="lists">
                                <li><a href="/">All</a></li>
                                <li><a href="/">Art</a></li>
                                <li><a href="/">Branding</a></li>
                                <li><a href="/">Creative</a></li> 
                                <li><a href="/">Design</a></li>   
                            </ul>
                            
                        </nav>    
                    </div> 

                </div>  
                <div className="banner">
                        <img src={require("../../images/girlhead.jpg")} alt="girl" />
                        <img src={require("../../images/couple.jpg")} alt="couple" />
                        <img src={require("../../images/hill.jpg")} alt="hill" />
                        <img src={require("../../images/flower.jpg")} alt="flower" />
                        <img src={require("../../images/target.jpg")} alt="target" />
                        <img src={require("../../images/cardboard.jpg")} alt="cardboard" />
                </div>  
            </div>    

                </div>
                
        </div>
        
    </div>
  )
}

export default Body