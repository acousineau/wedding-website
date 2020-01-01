import React from 'react'

import './Photos.scss'

export const Photos = () => {
  return (
    <div className="Photos">
      <h1 className="t-dark-blue">Through the Years</h1>
      <section className="years">
        <div className="wide-column">
          <div className="box y-2013">
            <h3>2013</h3>
          </div>
          <div className="box y-2014">
            <h3>2014</h3>
          </div>
          <div className="sub-column">
            <div className="box y-2017">
              <h3>2017</h3>
            </div>
            <div className="box y-2018">
              <h3>2018</h3>
            </div>
          </div>
        </div>
        <div className="thin-column">
          <div className="box y-2015">
            <h3>2015</h3>
          </div>
          <div className="box y-2016">
            <h3>2016</h3>
          </div>
          <div className="box y-2019">
            <h3>2019</h3>
          </div>
        </div>
      </section>
      <section className="years-mobile">
        <div className="box y-2013">
          <h3>2013</h3>
        </div>
        <div className="box y-2014">
          <h3>2014</h3>
        </div>
        <div className="box y-2015">
          <h3>2015</h3>
        </div>
        <div className="box y-2016">
          <h3>2016</h3>
        </div>
        <div className="box y-2017">
          <h3>2017</h3>
        </div>
        <div className="box y-2018">
          <h3>2018</h3>
        </div>
        <div className="box y-2019">
          <h3>2019</h3>
        </div>
      </section>
      <h1>Engagement</h1>
      <section className="engagement">
        <div className="two-wide">
          <div className="box en-one"></div>
          <div className="box en-two"></div>
        </div>
        <div className="three-tall-right">
          <div className="left">
            <div className="box en-three"></div>
            <div className="box en-four"></div>
          </div>
          <div className="right">
            <div className="box en-five"></div>
          </div>
        </div>
        <div className="three-tall-left">
          <div className="left">
            <div className="box en-six"></div>
          </div>
          <div className="right">
            <div className="box en-seven"></div>
            <div className="box en-eight"></div>
          </div>
        </div>
      </section>
      <section className="engagement-mobile">
        <div className="box en-one"></div>
        <div className="box en-two"></div>
        <div className="box en-three"></div>
        <div className="box en-four"></div>
        <div className="box en-five"></div>
        <div className="box en-six"></div>
        <div className="box en-seven"></div>
        <div className="box en-eight"></div>
      </section>
    </div>
  )
}

export default Photos
