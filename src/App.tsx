import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Router, Route, Switch, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useFetchPublicData } from 'state/hooks'
import PageLoader from 'components/PageLoader'
import CurrentBlockWrapper from 'components/CurrentBlockWrapper'
import Header from 'components/Header'
import usePersistConnect from 'hooks/usePersistConnect'
import useBackgroundMusic from 'hooks/useBackgroundMusic';
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

const MINT_PARTY_AUDIO_URL = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644311286/CryptoPuffies_Track_MASTER_lotgfy.mp3';

const App: React.FC = () => {
  const [, setVolume] = useBackgroundMusic(MINT_PARTY_AUDIO_URL);
  const [volumeValue, setVolumeValue] = useState(0);
  const [IsAutoPlay, setIsAutoPlay] = useState(false);

  const setMusicVolume = (volume: number) => {
    setIsAutoPlay(true);
    setVolumeValue(volume);
    setVolume(volume);
  }
  useFetchPublicData()
  usePersistConnect()


  useEffect(() => {
    const onScroll: EventListener = (event: Event) => { // <-- DOM-EventListener
      // console.log("Scrolling event in App", event.target);
    };

    const win: Window = window;   // <-- DOM-Window, extends DOM-EventTarget
    win.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router history={history}>
      {/* <GlobalStyle /> */}
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        {/* <BackgroundMusic setMusicVolume={setMusicVolume} volumeValue={volumeValue} /> */}
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
            <CryptoPuffies setMusicVolume={setMusicVolume} IsAutoPlay={IsAutoPlay} />
          </Route>
          <Route path="/mint" exact>
            <MintPuffies setMusicVolume={setMusicVolume} volumeValue={volumeValue} />
          </Route>
          <Route path="/my-puffies" exact>
            <MyPuffies />
          </Route>
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
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
