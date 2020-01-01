import React from 'react'

import './Transportation.scss'

export default function Transportation({ link, image, text }) {
  return (
    <article className="Transportation">
      <div className="image-container">
        <a target="_blank" rel="noopener noreferrer" href={link.url}>
          <img src={image.url} alt={image.alt} />
        </a>
      </div>
      {text(
        <a href={link.url} rel="noopener noreferrer" target="_blank">
          {link.text}
        </a>
      )}
    </article>
  )
}
