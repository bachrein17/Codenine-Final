import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ image, title, link }) => {
  return (
    <div className="col">
      <Link to={link} className="card h-100"  style={{textDecoration:'none',}}>
        <img src={image} className="card-img-top" alt="Article Thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
