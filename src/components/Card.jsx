import React from 'react'
import '../styles/Card.css'

function Card({ title, cover }) {
    return (
      <React.Fragment>
        <img className='card-image' src={cover} alt={title} height={250} width={250}/>
        <div className='card-image-background'>
          <h2 className="card-title">{title}</h2>
        </div>
      </React.Fragment>
    )
}

export default Card
