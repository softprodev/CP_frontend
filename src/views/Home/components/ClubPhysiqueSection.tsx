import React from 'react'

const ClubPhysiqueSection = () => {
  return (
    <section className="club" id="club">
      <div className="c-grid">
        <div className="club__title-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
          <h2 className="club__title c-title">
            <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
            <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
            <span>club physique</span></h2>
        </div>
        <div className="club__wrapper">
          <div className="club__wrapper-left">
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">The inner circle in our discord is where legendary physiques are made & excessive weight is gained (via your wallet) ~ Our community has professional workouts, diet plans, challenges and daily engagement with our athlete team. This is also where you’ll be able to participate in the future of the brand! Our management team will host bi-weekly business updates and you’ll be able to vote on future flavors & business decisions. You’ll also be invited to exclusive meet up training sessions with our athlete team & be whitelisted to future flavor drops!</p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">But that’s just the beginning... Family that grows together tends to prosper together & that’s what this is all about!</p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">Premier Protein has a market cap of near 1 Billion Dollars. Imagine if you bought stock when the company was worth 1M? That is a 10,000% return on your money!!! That means if you would’ve invested $2000 at a 1M valuation, you’d be sitting on 2 MILLION DOLLARS WORTH OF STOCK!</p>
          </div>
          <div className="club__wrapper-right">
            <img className="wow animate__animated animate__fadeInUp" src="img/img-club.png" srcSet="img/img-club@2x.png 2x" alt="" data-wow-duration="1.25s" />
          </div>
        </div>
      </div>
    </section>
  )
}


export default ClubPhysiqueSection
