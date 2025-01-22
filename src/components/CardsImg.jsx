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

  useEffect(() => {
    const cards = cardsRef.current;
    const cardsList = cards.querySelector(".card-main");
    const allCards = Array.from(cardsList.children);

    // speed controll

    let scrollSpeed = 1;
    let animationFrameId;

    // Duplicate cards
    const duplicateCards = () => {
      allCards.forEach((card) => {
        const cardClone = card.cloneNode(true);
        cardsList.appendChild(cardClone);
      });
    };

    // scrolling

    const startScrolling = () => {
      if (cards.scrollLeft >= cardsList.scrollWidth / 2) {
        // When reaching the duplicated set, reset to the start of the original set
        cards.scrollLeft = 0;
      }
      cards.scrollLeft += scrollSpeed; // Increment the scroll position
      animationFrameId = requestAnimationFrame(startScrolling);
    };

    // Duplicate cards and scrolling
    duplicateCards();
    animationFrameId = requestAnimationFrame(startScrolling);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
   <div className="cards-containe">
      <div
        ref={cardsRef}
        style={{
          display: "flex",
          overflow: "hidden", 
          padding: "10px",
          scrollBehavior: "smooth",
        }}
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
