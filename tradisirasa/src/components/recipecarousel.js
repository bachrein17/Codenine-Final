import React, { useState } from 'react';
import RecipeCard from './recipecard';
import 'bootstrap/dist/css/bootstrap.min.css';
import sateAyamImage from '../image/SateAyam.png';
import martabakImage from '../image/Martabak.png';
import seblakImage from '../image/Seblak.png';

const RecipeCarousel = () => {
  const recipes = [
    {
      image: sateAyamImage,
      title: 'Sate Ayam Bumbu Kecap',
      publisher: 'Diadit Sulaiman',
      description: 'Sate ayam adalah hidangan Indonesia yang terdiri dari potongan daging ayam yang ditusuk dan dibarengi dengan bumbu kecap, menciptakan kombinasi lezat gurih dan manis.'
    },
    {
      image: martabakImage,
      title: 'Martabak Spesial Istimewa',
      publisher: 'Princes Pragmatic',
      description: 'Martabak merupakan sajian yang biasa ditemukan di Arab Saudi, Yaman, India, Bangladesh, Indonesia, Malaysia, Singapura, dan Brunei.'
    },
    {
      image: seblakImage,
      title: 'Seblak Mantap Kriuk Kriuk',
      publisher: 'Bunda Nadia',
      description: 'Seblak adalah masakan khas Sunda yang berasal dari wilayah Parahyangan dengan cita rasa gurih dan pedas. Seblak umumnya terbuat dari kerupuk yang terdiri dari bawang putih dengan kencur.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    const newIndex = activeIndex === 0 ? recipes.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const next = () => {
    const newIndex = activeIndex === recipes.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div id="CarouselResep" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {recipes.map((recipe, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <RecipeCard 
              image={recipe.image}
              title={recipe.title}
              publisher={recipe.publisher}
              description={recipe.description}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#CarouselResep" data-bs-slide="prev" onClick={previous}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#CarouselResep" data-bs-slide="next" onClick={next}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default RecipeCarousel;
