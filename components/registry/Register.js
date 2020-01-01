import React from 'react'

export const Register = ({ image, link, name }) => {
  return (
    <article className="Register">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <header
          style={{
            backgroundImage: `url(${image})`,
            paddingTop: '50%'
          }}
        />
      </a>
      <div className="content">
        <h4 className="Register--title">
          <a href={link} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </h4>
      </div>
    </article>
  )
}

export default Register
