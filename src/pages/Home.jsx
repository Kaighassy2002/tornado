import React from 'react';

import CardsImg from '../components/CardsImg';

function Home() {
  return (
    <div >
      <div>
        <h1 style={{"height":"73vh",
            fontFamily:`DM Serif Text", serif`,
             letterSpacing:"3.5rem",
             textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)`,
             color:"#8E9271",
             fontSize:"7rem"
             }} 
             className='  d-flex justify-content-center align-items-center   '>
               TORNADO
                {/* <span style={{color:"#6F7E61"}}>T</span>
              <span style={{color:"#6F7E61"}}>  O</span>
                <span style={{color:"#6F7E61"}}>R</span>
               <span style={{color:"#6F7E61"}}> N</span>
                <span style={{color:"#596B51"}}>A</span>
               <span style={{color:"#6F7E61"}}> D</span>
             <span style={{color:"#939A79"}}>   O</span> */}
                </h1>
        </div>
     <div ><CardsImg/> </div>
    </div>
  );
}

export default Home;
