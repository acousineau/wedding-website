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
          <ul className="cocktails">
            <li>Finn &amp; Tonic</li>
            <li>The Martharita</li>
            <caption>Blueberry Margarita</caption>
          </ul>
          <br />
          <caption>* Other cocktails available upon request</caption>
        </section>
        <section className="drink-section">
          <h3>Beer</h3>
          <ul className="beers">
            <li>
              <span className="beer">
                <strong>One Hop This Time: Galaxy</strong>
                <span className="abv">6% ABV IPA</span>
              </span>
              <span className="brewery">Night Shift Brewing</span>
            </li>
            <li>
              <span className="beer">
                <strong>Whirlpool</strong>
                <span className="abv">4.5% ABV NE Pale Ale</span>
              </span>
              <span className="brewery">Night Shift Brewing</span>
            </li>
            <li>
              <span className="beer">
                <strong>Nite Lite</strong>
                <span className="abv">4.3% ABV Light Lager</span>
              </span>
              <span className="brewery">Night Shift Brewing</span>
            </li>
            <li>
              <span className="beer">
                <strong>PILS</strong>
                <span className="abv">5.2% ABV Pilsner</span>
              </span>
              <span className="brewery">Lord Hobo Brewing Co.</span>
            </li>
          </ul>
        </section>
        <section className="drink-section">
          <h3>Wine</h3>
          <ul>
            <li>
              <strong>Mon Frère</strong>, Pinot Noir, California
            </li>
            <li>
              <strong>Planeta</strong>, Chardonnay, Italy
            </li>
          </ul>
        </section>
      </Container>
    </div>
  )
}

export default Drinks
