import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Card, Button } from 'penguinfinance-uikit2'
import CallActionButton from 'components/CallActionButton'

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="c-grid">
        <div className="benefits__title-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
          <h2 className="benefits__title c-title"><img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" /><img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" /><span>BENEFITS RECAPPED</span></h2>
        </div>
        <div className="benefits__wrapper">
          <ul className="benefits__list">
            <li className="wow animate__animated animate__fadeInUp">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Club Physique Access</span> - A community with daily workouts, challenges and insider fitness industry information</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Bi-weekly business update calls</span> from leadership team (think shareholder meetings)</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>20% off discount</span> on all Chef Physique Products</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Member Only</span> Merch</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Voting Rights</span> on Future Flavors</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Taste Testing</span> Community Access</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Whitelisted</span> to Future Exclusive Drops</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Access</span> to Chef Physique Gym (Target Early 2023)</p>
              </div>
            </li>
            <li className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <div>
                <i className="icon-font icon-check-mark" />
              </div>
              <div>
                <p><span>Meet ups</span> with Sadik & Athlete Team</p>
              </div>
            </li>
          </ul>
          <div className="c-btn__wrapper c-btn__wrapper--center wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
            <a className="c-btn" href="https://discord.gg/WP8RNZkx" rel="noreferrer" target="_blank">
              <u className="c-btn__mask">Join The Community</u>
              <span>Join The Community</span></a></div>
        </div>
      </div>
    </section>
  )
}





export default Benefits
