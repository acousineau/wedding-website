import React from 'react'

import './Lodge.scss'

export const Lodge = ({ image, link, name, address }) => {
  return (
    <article className="Lodge">
      <header
        style={{
          backgroundImage: `url(${image})`,
          paddingTop: '50%'
        }}
      />
      <div className="content">
        <h4 className="Lodge--title">
          <a href={link} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </h4>
        <p className="t-bold">{address}</p>
      </div>
    </article>
  )
}

export default Lodge
