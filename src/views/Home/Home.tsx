import React, { useEffect } from 'react'

import styled from 'styled-components'
// import { Flex } from 'penguinfinance-uikit2'
import Page from 'components/layout/Page'
// import TopBanner from './components/TopBanner'
// import MarvelousNFT from './components/MarvelousNFT'
// import WhatCryptopuffies from './components/WhatCryptopuffies'
// import Welcome from './components/Welcome'
// import HowToWork from './components/HowToWork'
// import Roadmap from './components/Roadmap'
// import CommunityTools from './components/CommunityTools'
// import IntroducingTeam from './components/IntroducingTeam'
// import ExploreCollection from './components/ExploreCollection'
// import MyPuffies from './components/MyPuffies'
// import Faq from './components/Faq'
// import BuySection from './components/BuySection';
// import BuySection from './components/BuySection';
import Welcome from './components/Welcome';
import Benefits from './components/Benefits';
import ClubPhysiqueSection from './components/ClubPhysiqueSection';
import CPRoadmap from './components/CPRoadmap';
import CPTogether from './components/CPTogether';

interface Props {
  setMusicVolume: (musicVolume: number) => void;
  IsAutoPlay: boolean;
}

const Home: React.FC<Props> = ({ setMusicVolume, IsAutoPlay }) => {


  // useEffect(() => {
  //   const onScroll: EventListener = (event: Event) => { // <-- DOM-EventListener
  //     console.log("Scrolling event in Home", event.target);
  //   };

  //   console.log("UseEffect Called : in Home");
  //   const win: Window = window;   // <-- DOM-Window, extends DOM-EventTarget
  //   win.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);


  return (
    <>
      <main className="main main--start p-home">
        {/* <body> */}
        {/* <StyledPage> */}
        {/* <BackgroundImage /> */}
        {/* <div id='welcome'> */}
        <Welcome />
        {/* </div> */}
        {/* <div id='roadmap'> */}
        <CPRoadmap />
        {/* </div> */}
        {/* <div id='clubphysique'> */}
        <ClubPhysiqueSection />
        {/* </div> */}
        {/* <div id='together'> */}
        <CPTogether />
        {/* </div> */}
        {/* <div id='benefits'> */}
        <Benefits />
        {/* </div> */}
        {/* </StyledPage> */}
        {/* </body> */}
      </main>

    </>
  )
}

// const BackgroundImage = styled.div`
// width: 100%;
// min-height: 100vh;

// overflow-x: hidden;
// position: relative;
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-orient: vertical;
// -webkit-box-direction: normal;
//     -ms-flex-direction: column;
//         flex-direction: column;
// margin: 0;
// padding: 105px 0 0;
// background-color: #131313;
// background-image: url("../img/img-bg@2x.png");
// background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
// line-height: 1.42857143;
// font-size: 14px;
// font-weight: normal;
// font-family: "Poppins", sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;

// `;
const BackgroundImage = styled.div`
 width: 100%;
 height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // background-image: url('/images/background.png');
  // // background-size: contain;
  // background-repeat: no-repeat;
  // background-size: contain;

  background: url("../img/img-bg@2x.png"); no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


  z-index : -1;

`;


const StyledPage = styled(Page)`
  max-width: unset;
  padding-top: 0px;
  padding: 0px;
  height: 100%;
`

const AContainer = styled.div`
  margin-top: 0px;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`

export default Home
