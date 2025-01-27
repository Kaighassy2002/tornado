import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import clock from "../assets/images/3.png";
import tornado3 from "../assets/images/inavation.jpg";
import hand from "../assets/images/hand.jpg";
import world from "../assets/images/world.jpg";
import president from "../assets/images/US-Presidents.webp";
import number from "../assets/images/Picture5.jpg";
import messi from "../assets/images/messi.jpg";
import "../components/card.css";
import { Link } from "react-router-dom";

function CardsImg() {
  const cardsRef = useRef(null);

  let startX = 0; // Starting X position of the drag
  let scrollLeft = 0; // Starting scroll position
  let isDragging = false; // Track if dragging is active

  const handleStart = (e) => {
    const container = cardsRef.current;
    isDragging = true; // Activate dragging
    startX = e.type === "touchstart" ? e.touches[0].pageX : e.pageX; // Get initial X
    scrollLeft = container.scrollLeft; // Get initial scroll position
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const x = e.type === "touchmove" ? e.touches[0].pageX : e.pageX;
    const distance = x - startX;
    cardsRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleEnd = () => {
    isDragging = false; // Deactivate dragging
  };

  
  

  return (
   <div className="cards-containe">
      <div
        ref={cardsRef}
        style={{
          display: "flex",
          overflow: "auto", 
          padding: "10px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        className="cards-scroll"
        onMouseMove={handleMove} // Mouse move
      onMouseLeave={handleEnd} // End drag if mouse leaves container
      onTouchStart={handleStart} // Touch start
      onTouchMove={handleMove} // Touch move
      onTouchEnd={handleEnd} // Touch end
      >
        <ul className="card-main " style={{ display: "flex", padding: 0, margin: 0 }}>
          <li className="card-element">
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
          </li>
  
          <li className="card-element ">
            <Link to={"/longitude"}>
              <Card className="rounded  single-card">
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
              </Card>
            </Link>
          </li>
          <li className="card-element ">
            <Link to={"./palm"}>
              <Card className="rounded shadow single-card">
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={hand}
                    alt="hand"
                  />
  
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> Palm</h4>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
          <li className="card-element">
            <Link to={"./president"}>
              <Card className="rounded shadow single-card">
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={president}
                    alt="hand"
                  />
  
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea"> Presidents</h4>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
          <li className="card-element">
            <Link to={"./wonder"}>
              <Card className="rounded shadow single-card">
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={world}
                    alt="hand"
                  />
  
                  <div className="greenOverlay">
                    <h4 className="card-text  card-hea">
                      The Wonders of the World
                    </h4>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
  
          <li className="card-element">
            <Link to={"./numberTheory"}>
              <Card className="rounded shadow single-card">
                <div>
                  <Card.Img
                    className="rounded card-image"
                    variant="top"
                    src={number}
                    alt="hand"
                  />
  
                  <div className="greenOverlay">
                    <h4 className="card-text card-hea">
                      {" "}
                      Number <br /> theory
                    </h4>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
  
          <li className="card-element">
            <Link to={"./messi"}>
              <Card className="rounded shadow single-card">
               
                  <div>
                    <Card.Img
                      className="rounded card-image"
                      variant="top"
                      src={messi}
                      alt="messi"
                    />
  
                    <div className="greenOverlay body">
                      <h4 className="card-text card-hea"> MESSI</h4>
                    </div>
                  </div>
                
              </Card>
            </Link>
          </li>
        </ul>
      </div>
   </div>
  );
}

export default CardsImg;
