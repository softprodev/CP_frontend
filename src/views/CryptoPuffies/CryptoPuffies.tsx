import React from 'react'
import styled from 'styled-components'
// import { Flex } from 'penguinfinance-uikit2'
import Page from 'components/layout/Page'
import TopBanner from './components/TopBanner'
// import MarvelousNFT from './components/MarvelousNFT'
import WhatCryptopuffies from './components/WhatCryptopuffies'
import Welcome from './components/Welcome'
// import HowToWork from './components/HowToWork'
import Roadmap from './components/Roadmap'
import CommunityTools from './components/CommunityTools'
import IntroducingTeam from './components/IntroducingTeam'
// import ExploreCollection from './components/ExploreCollection'
import MyPuffies from './components/MyPuffies'
import Faq from './components/Faq'
import BuySection from './components/BuySection';

interface Props {
  setMusicVolume: (musicVolume: number) => void;
  IsAutoPlay: boolean;
}

const CryptoPuffies: React.FC<Props> = ({ setMusicVolume, IsAutoPlay }) => {
  // const handleMusicVolume = () => {
  //   if (!IsAutoPlay) {
  //     console.log('currentVolume : ', '0.01');
  //     setMusicVolume(0.01);
  //   }
  // }

  return (
    <>
      <StyledPage>
        <TopBanner />
        <BuySection setMusicVolume={setMusicVolume} IsAutoPlay={IsAutoPlay} />
        <AContainer>
          <div id='about'>
            <WhatCryptopuffies />
          </div>
          <div>
            <div>
              <Welcome />
            </div>
          </div>
        </AContainer>
        <div id='roadmap'>
          <Roadmap />
        </div>
        <div>
          <CommunityTools />
        </div>
        <div id='faqs'>
          <Faq />
        </div>
        {/* <div id='explore'>
          <ExploreCollection />
        </div> */}
        <div id='explore'>
          <MyPuffies />
        </div>
        <div id='team'>
          <IntroducingTeam />
        </div>
      </StyledPage>
    </>
  )
}

const StyledPage = styled(Page)`
  max-width: unset;
  padding-top: 0px;
  padding: 0px;
`

const AContainer = styled.div`
  margin-top: 0px;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`

export default CryptoPuffies
