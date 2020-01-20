import React from 'react'
import Hero from '../styles/Hero'
import Container from '../styles/Container'
import Transportation from '../travel/Transportation'
import Lodge from '../travel/Lodge'

import './TravelAndLodging.scss'

const TravelAndLodging = () => {
  return (
    <div className="TravelAndLodging">
      <Hero className="Hero" />
      <Container>
        <section style={{ marginBottom: '40px' }}>
          <header>
            <h1>Travel</h1>
          </header>
          <Transportation
            image={{
              url: '/travel/steamship-boat.jpg',
              alt: 'Steamship Authority'
            }}
            link={{
              text: 'Steamship Authority Info',
              url: 'https://www.steamshipauthority.com/'
            }}
            text={link => {
              return (
                <p>
                  The most common way to get to the island is by taking the Steamship Authority
                  ferry from Woods Hole, MA. This is the only option for bringing a car with you,
                  which requires an advance reservation <strong>(book as early as you can).</strong>{' '}
                  You can also park in one of the designated lots and take the ferry on foot, which
                  does not require any advance booking. The ferry has a number of departures daily
                  and takes about 45&nbsp;minutes. {link}
                </p>
              )
            }}
          />
          <Transportation
            image={{
              url: '/travel/seastreak-boat.jpg',
              alt: 'Sea Streak Ferry Service'
            }}
            link={{
              text: 'Sea Streak Ferry Service',
              url: 'https://seastreak.com/'
            }}
            text={link => {
              return (
                <p>
                  A separate fast ferry service can take you to the island directly from New York or
                  Boston&nbsp;(on foot): {link}
                </p>
              )
            }}
          />
          <Transportation
            image={{
              url: '/travel/cape-air.jpg',
              alt: 'Cape Air'
            }}
            link={{
              url: 'https://www.capeair.com/',
              text: 'Cape Air Service'
            }}
            text={link => {
              return (
                <p>
                  Alternatively, Cape Air offers year round air travel from Boston Logan to
                  Martha's&nbsp;Vineyard: {link}
                </p>
              )
            }}
          />
          <p>
            Visit the local{' '}
            <a href="https://www.mvy.com/gethere.html" target="_blank" rel="noopener noreferrer">
              Chamber of Commerce website
            </a>{' '}
            for additional&nbsp;information
          </p>
        </section>
        <section>
          <header>
            <h1>Lodging</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>
              We recommend booking your lodging <strong>as early as possible.</strong> Also, please
              be aware that Martha's Vineyard hotels have a two night minimum. There are a few
              Airbnbs that may be available for a one night stay. Please let us know if you need any
              assistance with booking your&nbsp;accommodations!
            </p>
          </header>
          <div className="lodge-container">
            <Lodge
              image="/travel/kelley-house.jpg"
              link="https://www.kelley-house.com/"
              name="The Kelley House"
              address="23 Kelley St, Edgartown"
            />
            <Lodge
              image="/travel/harborview-hotel.jpg"
              link="https://www.harborviewhotel.com/"
              name="The Harbor View&nbsp;Hotel"
              address="131 N Water St, Edgartown"
            />
            <Lodge
              image="/travel/vineyard-square.jpg"
              link="https://www.vineyardsquarehotel.com/"
              name="Vineyard Square Hotel"
              address="38 N Water St, Edgartown"
            />
            {/* <Lodge
              image="/travel/clarion.jpg"
              link="https://www.choicehotels.com/massachusetts/edgartown/ascend-hotels/ma073"
              name="Clarion Inn / Ascend&nbsp;Hotel"
              address="227 Upper Main St, Edgartown"
            /> */}
            <Lodge
              image="/travel/harborside-inn.jpg"
              link="https://www.theharborsideinn.com/"
              name="Harborside Inn"
              address="3 South Water St, Edgartown"
            />
            <Lodge
              image="/travel/ashley-inn.jpg"
              link="http://www.ashleyinn.net/"
              name="Ashley Inn"
              address="129 Main St, Edgartown (Located next to reception venue)"
            />
            <Lodge
              image="/travel/airbnb.jpg"
              link="https://www.airbnb.com/s/Edgartown--MA/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&screen_size=large&search_type=unknown&hide_dates_and_guests_filters=false&ne_lat=41.42249114403775&ne_lng=-70.49604140227069&sw_lat=41.35436228804499&sw_lng=-70.59491835539569&zoom=13&search_by_map=true&checkin=2020-09-11&checkout=2020-09-13"
              name="Airbnb"
              address="The most budget friendly option for your&nbsp;stay"
            />
          </div>
        </section>
      </Container>
    </div>
  )
}

export default TravelAndLodging
