import React from 'react'

// import styled from 'styled-components'
// import { Flex } from 'penguinfinance-uikit2'
// import Page from 'components/layout/Page'
import Welcome from './components/Welcome';
import Benefits from './components/Benefits';
import ClubPhysiqueSection from './components/ClubPhysiqueSection';
import CPRoadmap from './components/CPRoadmap';
import CPTogether from './components/CPTogether';
import CPMint from './components/CPMint';

// import blockchainReducer from "../../redux/blockchain/blockchainReducer";
// import dataReducer from "../../redux/data/dataReducer";

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
