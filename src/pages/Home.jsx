import React from 'react';
import CardsImg from '../components/CardsImg';
import '../components/Home.css';
import tornado from '../assets/images/torndo.webp';

function Home() {
  return (
    <div className='section'
      
    >
      <header>
        <h1 className="home-title">TORNADO</h1>
      </header>
      <main>
        <CardsImg />
      </main>
    </div>
  );
}

export default Home;
