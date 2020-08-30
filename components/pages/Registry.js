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
          <p style={{ marginBottom: '25px' }}>
            Since we're lucky to already have many of the things we need for our home, we would
            appreciate monetary gifts. If you prefer to give a traditional gift, our Amazon registry
            is&nbsp;below!
          </p>
        </div>
        <div className="register-container">
          {/* <Register
            image="/registry/safari.jpg"
            name="Honeymoon Fund"
            link="https://www.zola.com/registry/claireandandy2020"
          /> */}
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
