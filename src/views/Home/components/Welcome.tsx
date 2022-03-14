import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from 'penguinfinance-uikit2'



const Welcome = () => {
  return (

    // welcome section start
    <section className="welcome" id="welcome">
      <div className="c-grid">
        <img className="welcome__logo" src="img/logo.png" srcSet="img/logo@2x.png 2x" alt="" />

        <div className="welcome__wrapper" id="welcomeAnimation">
          <img className="welcome__wrapper-corner" id="welcomeAnimationImg1" src="img/img-welcome-visual-top-left.png" srcSet="img/img-welcome-visual-top-left@2x.png 2x" alt="" />
          <img className="welcome__wrapper-elipse" id="welcomeAnimationImg2" src="img/img-welcome-visual-elipse.png" srcSet="img/img-welcome-visual-elipse@2x.png 2x" alt="" />
          <img className="welcome__wrapper-fire" id="welcomeAnimationImg3" src="img/img-welcome-fire.png" srcSet="img/img-welcome-fire@2x.png 2x" alt="" />
          <img className="welcome__wrapper-man" id="welcomeAnimationImg4" src="img/img-welcome-man.png" srcSet="img/img-welcome-man@2x.png 2x" alt="" />
          <div>
            <h1 className="welcome__title c-title c-title--small wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">welcome to <span>the club</span></h1>
            <p className="welcome__desc c-desc wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">CP represents the first fitness brand that is merging into the digital world. <strong>The vision is ultimately a community governed brand that physically, mentally & financially enrichs it’s tokenholders. </strong>The first of many benefits is access to Club Physique where token holders can vote on future flavors, taste test future R&D creations and access a 20% lifetime discount but the road map gets even more exciting.</p>
            <div className="welcome__btn c-btn__wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
              <a className="c-btn" href='https://discord.com/invite/clubphysique' rel="noreferrer" target="_blank">
                <u className="c-btn__mask">Join The Community</u><span>Join The Community</span>
              </a>
            </div>
          </div>
        </div >
      </div >
    </section >
  )
}


export default Welcome
