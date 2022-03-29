import React from 'react'
import './Works.css'
const Works = () => {
  return (
    <div className='work-container'>
        <div className="parent">
            <div className="works-details">
                <div className="works-heading">
                    <h1>Works</h1>    
                </div>
                <div className="slide-left">
                    <img src={require("../../images/clock.jpg")} alt="clock" />
                    <img src={require("../../images/lemon.jpg")} alt="lemon" />
                    <img src={require("../../images/holi.jpg")} alt="holi" />  
                </div>   
                <div className="slide-right">
                    <img src={require("../../images/clock.jpg")} alt="clock" />
                    <img src={require("../../images/lemon.jpg")} alt="lemon" />
                    <img src={require("../../images/holi.jpg")} alt="holi" />  
                </div> 
            </div>    
        </div>
    </div>
  )
}

export default Works