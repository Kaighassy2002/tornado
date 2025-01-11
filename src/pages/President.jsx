import React from 'react'
import obama from "../assets/images/obama.jpg"
import map from "../assets/images/Picture3.png"
import "../components/president.css";
import { Link } from 'react-router-dom';

export default function President() {
  return (
    <div className='president-container'>
      <div className="container ">
        
        <header className="d-flex justify-content-between align-items-center py-3">
           
              <Link style={{textDecoration:"none"}} className='text-dark' to={'/'}>Presidents</Link>
            <div className="d-flex gap-2">
                <i className="fa-solid fa-diamond fs-4 text-primary"></i>
                <i className="fa-solid fa-diamond fs-4 text-secondary"></i>
                <i className="fa-solid fa-diamond fs-4 text-success"></i>
            </div>
        </header>
        <hr />

       
        <section className="mt-4">
  <h3 className="text-center text-dark fw-bold">
    Barack Obama: A Global Leader with a Legacy of Unity
  </h3>
  <div className="row mt-4 mb-4">
    {/* Column for the image */}
    <div className="col-md-3 d-flex justify-content-center align-items-center">
      <img
        className="obama-img rounded shadow img-fluid"
        src={obama}
        alt="Barack Obama"
      />
    </div>

    {/* Column for the text */}
    <div className="col-md-9 mt-3 mt-md-4">
      <p >
        Barack Obama's journey from a humble upbringing in Hawaii to the heights
        of global leadership has been nothing short of extraordinary. Known for
        his eloquence, empathy, and ability to inspire hope, Obama's tenure as a
        world leader redefined the boundaries of diplomacy and collaboration.
      </p>
      <p>
        His leadership style was one of inclusion, encouraging nations and
        individuals to come together to solve the world's most pressing issues.
        Whether advocating for healthcare reform or tackling climate change,
        Obama's ability to connect with people across cultures and countries
        cemented his status as a transformative figure in modern history.
      </p>
    </div>
  </div>
</section>


        
        <section>
            <h3 className="fw-bold text-dark">Strengthening Ties Across Borders</h3>
            <p>Obama was not just a leader for America but a unifier on the world stage. His relationships with global allies reflected a vision of shared responsibility. One of his closest partnerships was with the <i className="fa-solid fa-phone text-danger"></i> <span className="fw-bold">United Kingdom</span>, a country he frequently referred to as one of America's strongest allies.
            </p>
            <p>During his visits to the <i className="fa-solid fa-phone text-danger"></i> <span className="fw-bold">UK</span>, Obama emphasized the deep cultural and historical ties between the two nations. From addressing global security to promoting economic stability, his bond with British leaders symbolized his commitment to international cooperation. This partnership was a testament to the enduring special relationship that connects the two nations—a connection as enduring as the <span className="fw-bold">phone code </span>linking the <span className="fw-bold">UK</span> to the world.
            </p>
        </section>

        <section>
            <h3 className="fw-bold text-dark">A Leader Shaped by Geography</h3>
            <p>Geography has a subtle way of shaping history, and Obama's presidency is intertwined with places of significance. Consider the <span className="fw-bold">parallel of latitude</span> that spans the northern hemisphere, passing through the <span className="text-decoration-underline fw-bold">United States, Canada, France, Italy, Croatia, Bosnia and Herzegovina, Serbia, Montenegro, Bulgaria, Georgia, Azerbaijan, Turkmenistan, Uzbekistan, Kazakhstan, Mongolia, and Japan</span>.</p>
            <div className="text-center my-3">
                <img className="img-fluid rounded shadow" src={map} alt="Geographical Influence"/>
            </div>
            <p>This invisible line connects regions renowned for their cultural, political, and economic influence.
            </p>
            <p>Obama's global initiatives often mirrored the unity symbolized by this latitude. He worked tirelessly to align nations on issues such as nuclear disarmament, trade agreements, and climate change. The very essence of his leadership was about connecting people and ideas across boundaries, much like the line that unites distant yet significant parts of the world.</p>
        </section>

        <section>
            <h3 className="fw-bold text-dark">Inspiring a Generation</h3>
            <p>Obama's influence extended far beyond politics. His speeches, laden with optimism and resilience, struck a chord with people of all ages and backgrounds. Through programs like the Obama Foundation, he has inspired future leaders to think globally and act locally, fostering a sense of responsibility towards both their communities and the wider world.
            </p>
            <p>Whether addressing an international summit or engaging with students in a classNameroom, Obama's message was clear: unity and collaboration are the keys to progress. His vision for a better world continues to resonate, encouraging young minds to believe in the power of change.
            </p>
        </section>

        <section>
            <h3 className="fw-bold text-dark">A Legacy Etched in Hope</h3>
            <p>Obama's time in office was marked by a steadfast commitment to bringing people together. He believed in the power of collective action to overcome challenges and create opportunities. His legacy is a reminder that progress is possible when people unite, regardless of their differences.
            </p>
            
        </section>
        <hr className="mt-5"/>
    
        <footer className="p-4  ">
          <p className="text-center footer-text fst-italic fw-lighter"> Consider the connection between the United Kingdom, the countries along a significant parallel of latitude, and Obama's presidency. Perhaps geography holds the key to this puzzle!
          </p>
        </footer>

       
    </div>
    </div>
  )
}
