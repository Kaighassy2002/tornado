import React from "react";
import pyramid from "../assets/images/pyramid.jpg";
import babylon from "../assets/images/Babylon.jpg";
import temple from "../assets/images/Temple.jpg";
import olympia from "../assets/images/Olympia.jpg";
import Halicarnassus from "../assets/images/Halicarnassus.jpg";
import Rhodes from "../assets/images/Rhodes.jpg";
import Alexandria from "../assets/images/Alexandria.jpg";
import China from "../assets/images/China.jpg";
import Petra from "../assets/images/PetraJordan.jpg";
import brazil from "../assets/images/Christ.jpg";
import Machu from "../assets/images/Machu.jpg";
import Chichen from "../assets/images/Chichen.jpg";
import Roman from "../assets/images/TheRoman.jpg";
import taj from "../assets/images/tajmahal.jpg";

import "../components/wonder.css";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export default function Wonder() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between mt-4">
          <Link
            style={{ textDecoration: "none" }}
            className="text-dark"
            to={"/"}
          >
            Wonders of the world
          </Link>
          <div>
            <i className="fa-solid fa-diamond"></i>
            <i className="fa-solid fa-diamond"></i>
            <i className="fa-solid fa-diamond"></i>
          </div>
        </div>
        <hr className="pe-3 ps-3 mb-3" />
        <section className="mt-5">
          <h3 className="text-center text-dark mt-4 text-decoration-underline">
            The Wonders of the World: Celebrating Humanity's Marvels
          </h3>
          <p>
            Throughout history, humanity has built extraordinary monuments that
            tell the stories of our ingenuity, ambition, and creativity. These
            structures, known as "Wonders of the World," serve as a testament to
            our shared heritage, inspiring generations with their beauty and
            significance.
          </p>
        </section>

        <section style={{overflowX:'hidden'}}>
          <h3 className="mt-4 text-dark">Ancient Wonders That Stir the Soul</h3>

          <p>
            The original wonders were celebrated for their unparalleled
            craftsmanship and mystery, capturing the imagination of ancient
            civilizations. Let's explore their magnificence in detail:
          </p>

         
          <Container className="mt-4 wonder-card-container">
            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={pyramid} />
                <Card.Body>
                  <Card.Title>The Great Pyramid of Giza, Egypt</Card.Title>
                  <Card.Text>
                    As the last surviving wonder of the ancient world, the Great
                    Pyramid stands as a monument to ancient Egyptian engineering
                    and ingenuity. Built as a tomb for Pharaoh Khufu, it was
                    constructed with more than 2 million limestone blocks, each
                    weighing several tons. Despite its age of over 4,500 years,
                    the pyramid continues to inspire awe with its precision and
                    scale.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={babylon} />
                <Card.Body>
                  <Card.Title>The Hanging Gardens of Babylon, Iraq</Card.Title>
                  <Card.Text>
                    Said to be an oasis of lush greenery rising in tiers, the
                    Hanging Gardens were a marvel of ancient irrigation
                    techniques. According to legend, they were built by King
                    Nebuchadnezzar II to please his wife, who missed the green
                    hills of her homeland. Though their existence is debated,
                    their story remains a symbol of love and innovation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={temple} />
                <Card.Body>
                  <Card.Title>
                    The Temple of Artemis at Ephesus, Turkey
                  </Card.Title>
                  <Card.Text>
                    This grand temple, dedicated to the goddess Artemis, was
                    considered one of the most beautiful structures of its time.
                    Built entirely of marble, it was adorned with intricate
                    sculptures and stood as a place of worship and wonder. Its
                    destruction in 356 BCE by an arsonist seeking fame only
                    added to its legendary status.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={olympia} />
                <Card.Body>
                  <Card.Title>The Statue of Zeus at Olympia, Greece</Card.Title>
                  <Card.Text>
                    Crafted by the renowned sculptor Phidias, this massive
                    statue stood over 40 feet tall, depicting Zeus seated on an
                    elaborate throne. Made of ivory and gold, it was a
                    masterpiece of ancient artistry, exuding both grandeur and
                    divine majesty.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={Halicarnassus} />
                <Card.Body>
                  <Card.Title>
                    The Mausoleum at Halicarnassus, Turkey
                  </Card.Title>
                  <Card.Text>
                    Built as a tomb for Mausolus, a Persian satrap, this
                    structure blended Greek, Egyptian, and Lycian architectural
                    styles. Standing over 135 feet tall, it featured intricate
                    carvings and statues that earned it a place among the
                    wonders. The word “mausoleum” is derived from this iconic
                    tomb.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={Rhodes} />
                <Card.Body>
                  <Card.Title>The Colossus of Rhodes, Greece</Card.Title>
                  <Card.Text>
                    This giant bronze statue, standing approximately 110 feet
                    tall, was built to celebrate Rhodes' victory over Cyprus.
                    Positioned at the entrance of the harbor, it symbolized
                    unity and strength, welcoming visitors with its imposing
                    presence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card className="wonder-card">
                <Card.Img className="wonder-images" variant="top" src={Alexandria} />
                <Card.Body>
                  <Card.Title>The Lighthouse of Alexandria, Egypt</Card.Title>
                  <Card.Text>
                    Located on the island of Pharos, this lighthouse guided
                    sailors safely into the busy port of Alexandria. Standing
                    over 300 feet tall, it was an engineering marvel, utilizing
                    mirrors to reflect sunlight during the day and fires to
                    light the way at night.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </section>

        <section className="mt-5 mb-5" style={{overflowX:'hidden'}}>
          <h3 className="text-dark">Modern Icons of Inspiration</h3>
          <p>
            The New Seven Wonders of the World, selected through a global poll,
            highlight the diversity and creativity of human civilizations across
            the globe:
          </p>
          <Container  >
      
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <Card.Img src={China} className="mordern-images" alt="Great Wall of China" />
            <div>
              <Card.Title className="card-title-h">The Great Wall of China</Card.Title>
              <Card.Text>
                Stretching over 13,000 miles, the Great Wall is an enduring
                symbol of perseverance and unity. Built to protect ancient China
                from invasions, it traverses rugged mountains and vast plains,
                demonstrating human resilience and determination.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <div>
              <Card.Title className="card-title-h">Petra, Jordan</Card.Title>
              <Card.Text>
                Known as the “Rose City” due to the pink hue of its stone, Petra
                is a city carved directly into cliffs. Its stunning Treasury,
                Monastery, and amphitheater showcase the ingenuity of the
                Nabataeans, who thrived in this desert region by mastering water
                management.
              </Card.Text>
            </div>
            <Card.Img src={Petra} className="mordern-images" alt="Petra" />
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <Card.Img src={brazil} className="mordern-images" alt="Christ the Redeemer" />
            <div>
              <Card.Title className="card-title-h">Christ the Redeemer, Brazil</Card.Title>
              <Card.Text>
                Perched atop Mount Corcovado, this 98-foot-tall statue of Jesus
                Christ is a symbol of faith and hope. Overlooking Rio de
                Janeiro, it offers breathtaking views of the city while serving
                as a beacon of peace and unity.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <div>
              <Card.Title className="card-title-h">Machu Picchu, Peru</Card.Title>
              <Card.Text>
                Nestled high in the Andes Mountains, Machu Picchu is an ancient
                Incan city shrouded in mystery. Its precisely cut stone
                structures, terraces, and temples blend harmoniously with the
                surrounding natural beauty, showcasing the Inca's advanced
                engineering skills.
              </Card.Text>
            </div>
            <Card.Img src={Machu} className="mordern-images" alt="Machu Picchu" />
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <Card.Img src={Chichen} className="mordern-images" alt="Chichen Itza" />
            <div>
              <Card.Title className="card-title-h">Chichen Itza, Mexico</Card.Title>
              <Card.Text>
                A major Mayan city, Chichen Itza is best known for its pyramid,
                El Castillo. Designed as a calendar in stone, it aligns with
                astronomical events, reflecting the Mayan civilization's deep
                understanding of the cosmos.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <div>
              <Card.Title className="card-title-h">The Roman Colosseum, Italy</Card.Title>
              <Card.Text>
                This iconic amphitheater could hold up to 50,000 spectators,
                hosting gladiatorial contests and public spectacles. Its
                innovative design, with retractable awnings and efficient crowd
                management systems, influenced modern stadiums worldwide.
              </Card.Text>
            </div>
            <Card.Img src={Roman} className="mordern-images" alt="Roman Colosseum" />
          </Card.Body>
        </Card>
      </div>
      <div className="mb-3">
        <Card className="bg-body-tertiary">
          <Card.Body className="card-modern">
            <Card.Img src={taj} className="mordern-images" alt="Taj Mahal" />
            <div>
              <Card.Title className="card-title-h">The Taj Mahal, India</Card.Title>
              <Card.Text>
                Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal,
                this white marble mausoleum is a symbol of eternal love. Its
                symmetrical gardens, intricate carvings, and shimmering
                reflections in the Yamuna River make it one of the most
                beautiful structures in the world.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
         
         
        </section>

        <div>
          <p>
            The grouping of seven is no coincidence. It resonates through
            culture and history. Think of the seven days of the{" "}
            <span className="fw-bold">week</span>, the seven{" "}
            <span className="fw-bold">seas</span>, or even the seven{" "}
            <span className="fw-bold">continents</span>. There's something
            universal and complete about this number, which is why it often
            appears in lists celebrating greatness.
          </p>
          <p>
            These wonders, whether natural or man-made, connect us to our shared
            past while inspiring future generations. As custodians of this
            heritage, we bear the responsibility to preserve them, ensuring
            their stories continue to captivate and educate.
          </p>
        </div>
      </div>
    </div>
  );
}
