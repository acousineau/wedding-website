import React from 'react'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import './Drinks.scss'

const Drinks = () => {
  return (
    <div className="Drinks">
      <Hero className="Hero" />
      <Container>
        <section className="drink-section">
          <h3>Signature Cocktails</h3>
          <ul>
            <li>Finn and Tonic</li>
            <li>Blueberry Margarita</li>
          </ul>
        </section>
        <section className="drink-section">
          <h3>Beer</h3>
          <ul>
            <li>IPAs for Daze</li>
            <li>Lagers</li>
            <li>Belgians</li>
          </ul>
        </section>
        <section className="drink-section">
          <h3>Wine</h3>
          <ul>
            <li>Chateau deux POPE</li>
            <li>WHITE WINE Y'ALL</li>
          </ul>
        </section>
      </Container>
    </div>
  )
}

export default Drinks
