import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeCard = ({ image, title, publisher, description }) => {
  return (
    <div className="card h-100 recipe-card">
      <div className="row no-gutters h-100">
        <div className="col-md-7">
          <img src={image} className="card-img h-100" alt="Thumbnail" />
        </div>
        <div className="col-md-5">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Publisher: {publisher}</p>
            <p className="card-text flex-grow-1">{description}</p>
            <a href="detailresep" className="btn btn-primary mt-auto" style={{ width: '35%' }}>Lihat Resep</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
