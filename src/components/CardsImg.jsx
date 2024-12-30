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
      className="hide-scrollbar" // Custom class to hide scrollbars
    >
    
      <div style={{ padding: "0 10px", display: "inline-block" }}>
        <Card
          className="rounded shadow"
          style={{ width: "16rem", height: "10rem" }}
        >
          <a
            href="https://invention-psi.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: "16rem",
                height: "10rem",
              }}
            >
              <Card.Img
                className="rounded"
                variant="top"
                src={tornado3}
                alt="Card 4"
                style={{ width: "16rem", height: "10rem" }}

              />
             
            
              {/* Green Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(25, 29, 35, 0.5)", // Semi-transparent green
                  borderRadius: "0.5rem", // Match the rounded corners
                }}
               
                
              >
                <h4 className="card-text">invention</h4>
              </div>
            </div>
          </a>
        </Card>
      </div>
      <div style={{ padding: "0 10px", display: "inline-block" }}>
        <Card
          className="rounded shadow"
          style={{ width: "16rem", height: "10rem" }}
        >
          <a
            href="https://longitude-five.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: "16rem",
                height: "10rem",
              }}
            >
              <Card.Img
                className="rounded"
                variant="top"
                src={clock}
                alt="Card 4"
                style={{ width: "16rem", height: "10rem" }}

              />
             
            
              {/* Green Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(25, 29, 35, 0.5)", // Semi-transparent green
                  borderRadius: "0.5rem", // Match the rounded corners
                }}
               
                
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
