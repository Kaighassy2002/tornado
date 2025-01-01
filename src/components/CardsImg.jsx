import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import clock from "../assets/images/3.png"
import tornado3 from "../assets/images/inavation.jpg"

import '../components/card.css'




function CardsImg() {
  const containerRef = useRef(null); // Ref for the scrollable container

  let startX = 0; // Starting X position of the drag
  let scrollLeft = 0; // Starting scroll position
  let isDragging = false; // Track if dragging is active

  // Handle mouse/touch start
  const handleStart = (e) => {
    const container = containerRef.current;
    isDragging = true; // Activate dragging
    startX = e.type === "touchstart" ? e.touches[0].pageX : e.pageX; // Get initial X
    scrollLeft = container.scrollLeft; // Get initial scroll position
  };

  // Handle mouse/touch move
  const handleMove = (e) => {
    if (!isDragging) return; // Only move if dragging is active
    const container = containerRef.current;
    const x = e.type === "touchmove" ? e.touches[0].pageX : e.pageX; // Get current X
    const distance = x - startX; // Calculate the distance moved
    container.scrollLeft = scrollLeft - distance; // Update scroll position
  };

  // Handle mouse/touch end
  const handleEnd = () => {
    isDragging = false; // Deactivate dragging
  };

  return (
    <div 
      ref={containerRef}
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "10px",
        scrollBehavior: "smooth", // Smooth scrolling
        cursor: isDragging ? "grabbing" : "grab", // Change cursor when dragging
      }}
     
      onMouseMove={handleMove} // Mouse move
     
      onMouseLeave={handleEnd} // End drag if mouse leaves container
      onTouchStart={handleStart} // Touch start
      onTouchMove={handleMove} // Touch move
      onTouchEnd={handleEnd} // Touch end
      className="hide-scrollbar " // Custom class to hide scrollbars
    >
    
      <div className="card-element" >
        <Card
          className="rounded shadow single-card"
         
        >
          <a
            href="https://invention-psi.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <div
              
            >
              <Card.Img
                className="rounded card-image"
                variant="top"
                src={tornado3}
                alt="invention"
               

              />
             
            
              {/* Green Overlay */}
              <div className="greenOverlay"
                
               
                
              >
                <h4 className="card-text">invention</h4>
              </div>
            </div>
          </a>
        </Card>
      </div>
      <div className="card-element">
        <Card
          className="rounded shadow single-card"
          
        >
          <a
            href="https://longitude-five.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <div
              
            >
              <Card.Img
                className="rounded card-image"
                variant="top"
                src={clock}
                alt="clock"
              

              />
             
            
              {/* Green Overlay */}
              <div className="greenOverlay"
               
               
                
              >
                <h4 className="card-text">Longitude</h4>
              </div>
            </div>
          </a>
        </Card>
      </div>
     
    </div>
  );
}

export default CardsImg;
