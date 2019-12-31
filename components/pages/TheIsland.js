import React from 'react'
import Link from 'next/link'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import Location from '../island-locations/Location'

import './TheIsland.scss'

const TheIsland = () => {
  return (
    <div className="TheIsland">
      <Hero className="Hero"></Hero>
      <Container>
        <section className="map-container">
          <header>
            <h1 className="t-dark-blue island">The Island</h1>
          </header>
          <p>Below is a map of our favorite spots on the Island</p>
          <a
            href="https://www.google.com/maps/d/viewer?mid=1U8VYTzEGOMPfshR-G413TW_r_OuVmn8n&ll=41.40296496680973%2C-70.56217650000002&z=12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Map in New Tab
          </a>
          <iframe
            className="map"
            src="https://www.google.com/maps/d/embed?mid=1U8VYTzEGOMPfshR-G413TW_r_OuVmn8n&hl=en"
            width="100%"
          ></iframe>
        </section>
        <section>
          <header>
            <h2 className="t-dark-blue title">Hot Spots</h2>
            <div className="location-container">
              <Location
                name="Lighthouse Beach"
                image={{
                  url: '/island/lighthouse-beach.jpg',
                  alt: 'Lighthouse Beach'
                }}
                address="N Water St, Edgartown"
                description="Swing by the Edgartown Lighthouse and take a scenic walk on teh beach with views of Edgartown Harbor and Chappaquiddick&nbsp;Island"
              />
              <Location
                reverseDisplay
                name="Shop in Edgartown"
                description="Enjoy some shopping downtown! Check out shops like Nell, Backwater Trading Co., NRO, Island Outfitters, Vineyard Vines, and&nbsp;more."
                image={{
                  url: '/island/shops.jpg',
                  alt: 'Shop in Edgartown'
                }}
              />
              <Location
                name="South Beach"
                address="South Beach, Edgartown"
                description="Enjoy some beach time (weather&nbsp;permitting!)"
                image={{
                  url: '/island/beach.jpg',
                  alt: 'South Beach'
                }}
              />
              <Location
                reverseDisplay
                name="Espresso Love"
                address="17 Church St, Edgartown"
                description="A super convenient spot to grab a&nbsp;coffee!"
                image={{
                  url: '/island/espresso.jpg',
                  alt: 'Espresso Love'
                }}
              />
              <Location
                name="The Newes from America"
                address="23 Kelly St, Edgartown"
                description="Hole up in our favorite spot for some great pub food. They've always got a few great beers on draft - try one and collect all the wooden&nbsp;nickels!"
                image={{
                  url: '/island/newes.jpg',
                  alt: 'The Newes from America'
                }}
              />
              <Location
                reverseDisplay
                name="Bad Martha's Brewery"
                address="270 Upper Main St, Edgartown"
                description="The Island’s best brewery - stop by for a beer on their relaxing patio if you have some extra&nbsp;time!"
                image={{
                  url: '/island/bad-martha.jpg',
                  alt: "Bad Martha's Brewery"
                }}
              />
            </div>
          </header>
        </section>
      </Container>
    </div>
  )
}

export default TheIsland
