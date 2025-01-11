import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import clock from "../assets/images/3.png";
import tornado3 from "../assets/images/inavation.jpg";
import hand from "../assets/images/hand.jpg";
import world from "../assets/images/world.jpg";
import president from "../assets/images/US-Presidents.webp";
import number from "../assets/images/Picture5.jpg";
import messi from "../assets/images/messi.jpg"

import "../components/card.css";
import { Link } from "react-router-dom";

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
      <div className="card-main">
      <div className="card-element">
  <Card className="rounded single-card">
    <Link to="/invention">
      <div>
        <Card.Img
          className="rounded card-image"
          variant="top"
          src={tornado3}
          alt="Invention"
        />

        {/* Green Overlay */}
        <div className="greenOverlay">
          <h4 className="card-text card-hea">Invention</h4>
        </div>
      </div>
    </Link>
  </Card>
</div>

        <div className="card-element">
          <Link to={'/longitude'}>
          <Card className="rounded  single-card">
            <a
              href="https://longitude-five.vercel.app/"
              style={{ textDecoration: "none" }}
            >
              <div>
                <Card.Img
                  className="rounded card-image"
                  variant="top"
                  src={clock}
                  alt="clock"
                />
  
                {/* Green Overlay */}
                <div className="greenOverlay">
                  <h4 className="card-text card-hea">Longitude</h4>
                </div>
              </div>
            </a>
          </Card>
          </Link>
         
        </div> 
      <div className="card-element">
         <Link to={'./palm'}>
            <Card className="rounded shadow single-card">
              
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={hand}
                    alt="hand"
                  />
    
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> Palm
                    </h4>
                  </div>
                </div>
             
            </Card>
         </Link>
        </div>
        <div className="card-element">
        <Link to={'./president'}>
            <Card className="rounded shadow single-card">
              
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={president}
                    alt="hand"
                  />
    
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> Presidents
    
                    </h4>
                  </div>
                </div>
              
            </Card>
        </Link>
        </div>
        <div className="card-element">
         <Link to={'./wonder'}>
            <Card className="rounded shadow single-card">
              
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={world}
                    alt="hand"
                  />
    
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea">The Wonders <br /> of  the World
                    </h4>
                  </div>
                </div>
              
            </Card>
         </Link>
        </div>
       
        <div className="card-element">
          <Link to={'./numberTheory'}>
            <Card className="rounded shadow single-card">
             
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={number}
                    alt="hand"
                  />
    
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> Number <br /> theory
    
                    </h4>
                  </div>
                </div>
              
            </Card>
          </Link>
        </div>

        <div className="card-element">
          <Link to={'./messi'}>
            <Card className="rounded shadow single-card">
              <a
                href="https://messi-two.vercel.app/"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={messi}
                    alt="hand"
                  />
    
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> MESSI
    
                    </h4>
                  </div>
                </div>
              </a>
            </Card>
          </Link>
        </div>

       
  
        
  
        
  
        

      
      </div>
    </div>
  );
}

export default CardsImg;
