import React, { useEffect } from 'react'
import messi from "../assets/images/Picture1.jpg"
import messi2 from "../assets/images/messi.jpg"

import "../components/messi.css";
import { Link } from 'react-router-dom';
export default function Messi() {

  useEffect(() => {
    const marquee = document.querySelector(".vertical-marquee .images");
    if (marquee) {
      const images = Array.from(marquee.children);
      images.forEach((image) => {
        const clone = image.cloneNode(true);
        marquee.appendChild(clone);
      });
    }
  }, []);

  return (
    <div style={{backgroundImage:" linear-gradient(to top, #09203f 0%, #537895 100%)"}} className='body'>
       <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <Link className='navbar' to={'/'}>MESSI</Link>
            <div >
              <i className="fa-solid fa-diamond text-light"></i>
              <i className="fa-solid fa-diamond text-light"></i>
              <i className="fa-solid fa-diamond text-light"></i>
            </div>
          </div>
    
          <hr className="pe-3 ps-3 mb-3" />
   </div>

   <div className="row container-fluid">
   {/* Sidebar with scrolling images */}
   <div className="col-2 sticky">
          <div className="vertical-marquee">
            <div className="imagess">
              <img src={messi} alt="Lionel Messi" />
              <img src={messi} alt="Lionel Messi" />
              <img src={messi} alt="Lionel Messi" />
              <img src={messi} alt="Lionel Messi" />
            </div>
          </div>
        </div>
    <div className="col-10 manin-section  ">
      <section className="mt-4">
        <h3 className="heading">Lionel Messi: A Legacy Woven Across Generations
        </h3>
        <p className='text-light'>Lionel Messi's rise from a young boy in Rosario, Argentina, to a global football icon is a story of unmatched skill, resilience, and a relentless pursuit of excellence. From his early days kicking a ball in his hometown to conquering the world's grandest stages, Messi has left an indelible mark on football and beyond.
        </p>
      </section>
      <section className="mt-3">
        <h3 className="text-center text-decoration-underline heading">A Journey of Brilliance
        </h3>
        <div className="row mt-4  ">
            <div className="col-md-4">
                <p className="paragraph-sub text-light">Messi's journey began when his extraordinary talent caught the attention of scouts. Diagnosed with a growth hormone deficiency as a child, his dream of playing professional football seemed distant. However, FC Barcelona recognized his potential, offered to support his medical treatment, and brought him to Spain. This marked the beginning of one of the most illustrious careers in football history.
                </p>
            </div>
            <div className="col-md-4">
                <p className="paragraph-sub text-light">His first-team debut in 2004 was the start of a remarkable transformation for Barcelona. Over the next few years, Messi became the club's heartbeat, leading them to unparalleled success. Between <span className="fw-bold text-light">2004 and 2014</span>, he helped secure multiple La Liga titles and UEFA Champions League trophies, including a historic treble in the 2008-09 season under Pep Guardiola. In this period, he also scored 91 goals in a calendar year, surpassing Gerd Müller's long-standing record.
                </p>
            </div>
            <div className="col-md-4">
                <p className="paragraph-sub text-light">From 2014 to 2021, Messi continued his dominance, adapting his style to become a playmaker while still delivering breathtaking goals. His move to Paris Saint-Germain in 2021 ended his <span className="fw-bold text-light">nearly two-decade</span> association with Barcelona, marking a new chapter in his storied career.
                </p>
            </div>
        </div>
      </section>
      <section className=" messi-img" >
        <img className="img-fluid shadow  bg-body-tertiary rounded" src={messi2} alt=""/>
    </section>
    
      <section className="mt-3">
        <h3 className="heading">The Global Stage</h3>
        <p  className='text-light'>
            While Messi's club career was nothing short of spectacular, his international journey had its share of challenges. Argentina faced heartbreak in several tournament finals before Messi finally led them to victory in the 2021 Copa América. This triumph ended a 28-year drought for the national team and silenced critics who questioned his international legacy.

        </p>
        <p  className='text-light'>
            The crowning moment came in 2022 when Messi guided Argentina to win football's most coveted prize. His performances throughout the tournament were a masterclassName in leadership and skill, cementing his place as one of the greatest players in history.
        </p>
        <p  className='text-light'>
            The bond between Lionel Messi and <span className="fw-bold text-light">Diego Maradona</span> transcends generations. As Messi emerged as Argentina's footballing torchbearer, Maradona consistently praised him, calling him a "unique talent." Their shared legacy is deeply cherished, with Messi often paying tribute to Maradona's influence on his career and Argentine football as a whole.

        </p>
        <p  className='text-light'>
            When Messi broke the record for most goals at a single club, <span className="fw-bold text-light">Pelé</span>, renowned for his three World Cup victories, publicly acknowledged the achievement, calling it a "beautiful journey." This recognition bridged two eras of football greatness, uniting two players who defined excellence.

        </p>
        <p  className='text-light'>
            Cristiano Ronaldo, another name often mentioned alongside Messi, has forged one of football's most iconic rivalries, the fierce competition between the two has elevated the sport to unprecedented heights, pushing both players to their limits.

        </p>
        <p  className='text-light'>
            Even players like Sergio Ramos, Messi's former rival at Real Madrid and current teammate at PSG, have expressed admiration for his genius. Ramos once said Messi made La Liga “the most competitive league in the world” and later described playing alongside him as an honor.

        </p>
        <p  className='text-light'>
           <span className="fw-bold text-light"> Ronaldinho</span>, the Brazilian star who mentored Messi at Barcelona, recognized his brilliance early on. Ronaldinho famously assisted Messi's first senior goal and later called him "the greatest player of all time."

        </p>
      </section>

      <section className="mt-3">
        <h3 className="heading">A Legacy for the Ages
        </h3>
        <p  className='text-light'>
            Lionel Messi's story is one of brilliance, resilience, and enduring impact. Whether dazzling crowds in Barcelona, achieving international triumphs with Argentina, or inspiring the next generation of players, he remains a symbol of perfection and excellence. His legacy is more than just trophies and records—it's a testament to the power of talent, hard work, and an unwavering desire to be the best.

        </p>
        <p  className='text-light'>
            Messi's career is best understood through its remarkable phases. From <span className="fw-bold text-light">2004 to 2014</span>, he was Barcelona's talisman, redefining modern football with his extraordinary skills. The period from<span className="fw-bold text-light"> 2014 to 2024</span> saw him evolve further, achieving international glory and adapting to new challenges at PSG.

        </p>
      </section>

      <section  className="mt-3 mb-2">
        <h3 className="heading">Beyond the Pitch</h3>
        <p  className='text-light'>
            Off the pitch, Messi's humility and commitment to philanthropy have made him a role model for millions. His dedication to supporting children's health and education through the Leo Messi Foundation reflects his belief in using his platform for good.
        </p>
      </section>
    </div>
</div>
    </div>
  )
}
