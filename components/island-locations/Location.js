import React from 'react'

import './Location.scss'

export const Location = ({ image, description, name, address, reverseDisplay }) => {
  return (
    <article className={`Location ${reverseDisplay ? 'reverse-display' : ''}`}>
      <div className="image-container">
        <img className="location-image" src={image.url} alt={image.alt} />
      </div>
      <div className="details-container">
        <h3>{name}</h3>
        {address && <p className="t-bold">{address}</p>}
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Location
