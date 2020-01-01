import React from 'react'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import Register from '../registry/Register'

import './Registry.scss'

const Registry = () => {
  return (
    <div className="Registry">
      <Hero className="Hero" />
      <Container>
        <div className="description-container">
          <p style={{ marginBottom: '30px' }}>
            We're lucky to already have so much of what we need for our home, so we’ve created a
            registry for our dream safari honeymoon in&nbsp;Tanzania!
          </p>
          <p>
            The biggest gift of all, however, is your presence on our Big Day. Thank you for your
            love and support, and we can't wait to share our honeymoon adventures with you
            in&nbsp;October!
          </p>
        </div>
        <div className="register-container">
          <Register
            image="/registry/safari.jpg"
            name="Honeymoon Fund"
            link="https://www.zola.com/registry/claireandandy2020"
          />
          <Register
            image="/registry/amazon.jpg"
            name="Amazon Registry"
            link="http://www.amazon.com/wedding/share/ClaireandAndy2020"
          />
        </div>
      </Container>
    </div>
  )
}

export default Registry
