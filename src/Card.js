import React from 'react';
import './card.css'

function Card(props) {
  return (
    <div className='card'>
      <div className='img-area'>
        <img className='image' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.img}`} alt="Poster" />
      </div>
      <div className='card-content'>
        <h2>{props.name}</h2>
        <div className='content-details'>
          <p>Popularity: {props.popularity}</p>
          <p>Average Vote: {props.vote}</p>
        </div>
      </div>
    </div>
  )
}

export default Card