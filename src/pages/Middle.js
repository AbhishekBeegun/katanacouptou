import React from 'react';
import KATANAVID from '../assets/katana1.mp4';

function Middle() {
  return (
    <div className="MIDDLE">
     <div className="MIDDLERIGHT">
      <h2>T10 Steel Blade</h2>
      <h2>Hand Made and Tuned</h2>
      <p>Flexibility Hardness Strenght Razor Edges.Balanced to use<br></br>
      battle ready.</p>
     </div>
     <div className="MIDDLELEFT">
     <video src={KATANAVID} alt="content loading" autoPlay loop muted />
      </div>  
    </div>
  )
}

export default Middle