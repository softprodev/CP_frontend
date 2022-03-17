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
import CPMint from './components/CPMint';

import blockchainReducer from "../../redux/blockchain/blockchainReducer";
import dataReducer from "../../redux/data/dataReducer";

interface Props {
  totalSupply: number;
  cost: number;
  fetchContractInfo: () => void;
  mintButtonCaption: string;
}

const Home: React.FC<Props> = ({ totalSupply, cost, fetchContractInfo, mintButtonCaption }) => {
  // const Home = () => {
  return (
    <>
      <main className="main main--start p-home">
        <Welcome />
        <CPMint totalSupply={totalSupply} cost={cost} fetchContractInfo={fetchContractInfo} mintButtonCaption={mintButtonCaption} />
        <CPRoadmap />
        <ClubPhysiqueSection />
        <CPTogether />
        <Benefits />
      </main>

    </>
  )
}

export default Home
