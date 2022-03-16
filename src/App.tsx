import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Router, Route, Switch, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useFetchPublicData } from 'state/hooks'
import PageLoader from 'components/PageLoader'
import CurrentBlockWrapper from 'components/CurrentBlockWrapper'
import Header from 'components/Header'
import usePersistConnect from 'hooks/usePersistConnect'
import history from './routerHistory'

const MintPuffies = lazy(() => import('./views/MintPuffies'))
const CryptoPuffies = lazy(() => import('./views/CryptoPuffies'))
const MyPuffies = lazy(() => import('./views/MyPuffies'))
const NotFound = lazy(() => import('./views/NotFound'))

const Home = lazy(() => import('./views/Home'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0)
  }, [pathname])



  return null
}

const App: React.FC = () => {

  useFetchPublicData()
  usePersistConnect()


  return (
    <Router history={history}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Header />
        <BackgroundImage />
        <Switch>
          <Route path="/" exact>
            <Home />
            <section className="menu" id="menu" mobile-block-js="mobile-block-js">
              <div>
                <nav className="header__nav"><a className="is-active" href="#roadmap">ROADMAP</a><a href="#club">Club Physique</a><a href="#benefits">BENEFITS</a></nav>
                <div className="c-btn__wrapper"><a className="c-btn" href="https://https://discord.com/invite/clubphysique">
                  <u className="c-btn__mask"><i className="icon-font icon-discord" />Join Now
                  </u><span><i className="icon-font icon-discord" />Join Now</span></a><a className="c-btn" href="/">
                    <u className="c-btn__mask">Connect Wallet
                    </u><span>Connect Wallet</span></a></div>
              </div>
            </section>
          </Route>
          <Route path="/puffy" exact>
            <CryptoPuffies />
          </Route>
          <Route path="/mint" exact>
            <MintPuffies />
          </Route>
          <Route path="/my-puffies" exact>
            <MyPuffies />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <CurrentBlockWrapper />
    </Router>
  )
}

const BackgroundImage = styled.div`
  background-image: url('/img/img-bg@2x.png');
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

export default React.memo(App)
