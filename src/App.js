import './App.css';
import ListRanking from "./components/ListRanking";
import photo from './media/photo.jpg'
import rate_it from './media/Component 1 – 1.png'
import React, {useEffect, useState} from "react";

function App() {


    return (
      <div style={{backgroundColor: "#9dcbe0"}} className="container-fluid">
          <div className='row'>
              <nav style={{
                  background: '#FFFFFF 0% 0% no-repeat padding-box',
                  boxShadow: '0px 3px 6px #00000029',
                  opacity: 1
              }} className='navbar d-flex justify-content-md-evenly '>
                  <div>
                      <img src={rate_it} alt='Rate_it'/>
                  </div>
                  <div style={{left: "80px"}} className='w-25 position-relative'>
                      <img className='mx-2' style={{float: "left", borderRadius: "50%"}} src={photo} alt='photo'
                           width='40px' height='38px'/>
                      <p style={{
                          textAlign: 'left',
                          fontSize: '18px',
                          letterSpacing: '0px',
                          color: '#FF6100',
                          opacity: 1}}>Created by Olga Eidelman</p>
                  </div>
              </nav>
          </div>
              <ListRanking/>

      </div>
  );
}

export default App
