import React from 'react';
import '../style.css';

const RandomButton = () => {
    return (
        <div className='row'>
            <div style={{backgroundColor:"#ff6e00"}}>
                <button style={{backgroundColor:"#ff6e00",borderColor:"white",color:"white", left:"69%"}} type="button" className='p-1 m-1 position-relative'>Random Rating</button>
            </div>
        </div>
    );
};

export default RandomButton;