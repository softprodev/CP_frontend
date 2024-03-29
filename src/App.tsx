import React, { Suspense, lazy, useEffect, useState, useCallback } from 'react'
import { Router, Route, Switch, useLocation } from 'react-router-dom'
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";


import truncateEthAddress from 'truncate-eth-address'

import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useFetchPublicData } from 'state/hooks'
import PageLoader from 'components/PageLoader'
import CurrentBlockWrapper from 'components/CurrentBlockWrapper'
import Header from 'components/Header'
import usePersistConnect from 'hooks/usePersistConnect'

import { useDispatch, useSelector } from "react-redux";
import { RootState } from 'redux/store'
import { useEthers, useEtherBalance } from "@usedapp/core";

import { connect } from "./redux/blockchain/blockchainActions";
import fetchData from "./redux/data/dataActions";

import history from './routerHistory'
// import config from 'components/Header/config'

import AccountModal from "./components/AccountModal";


import Layout from "./components/Layout";


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


// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;

const App: React.FC = () => {


  const dispatch = useDispatch();
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const data = useSelector((state: RootState) => state.data);
  const [initialLoad, setInitialLoad] = useState(true)

  const { activateBrowserWallet, account } = useEthers();

  const { isOpen, onOpen, onClose } = useDisclosure();



  const [claimingNft, setClaimingNft] = useState(false);
  const [walletButtonCaption, setWalletButtonCaption] = useState(`Connect Wallet`);
  const [mintButtonCaption, setMintButtonCaption] = useState(`Connect Wallet`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    const cost = CONFIG.WEI_COST;
    const gasLimit = CONFIG.GAS_LIMIT;
    const totalCostWei = String(cost * mintAmount);
    const totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setMintButtonCaption("Minting Now");
    console.log(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);



    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        console.log("Sorry, something went wrong please try again later.");
        setMintButtonCaption("Mint Now");
        alert("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        console.log(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setMintButtonCaption("Mint Now");
        alert(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit https://opensea.io/collection/club-physique to view it.`);
        setClaimingNft(false);
        dispatch(fetchData());
      });
  };


  const walletConnection = () => {
    if (!claimingNft) {
      dispatch(connect());
    }
    getData();
  };
  const fetchContractInfo = () => {
    if (claimingNft) {
      claimNFTs();
    } else {
      dispatch(connect());
    }
    console.log("fetch contact clicked");
    getData();
  };

  const getData = useCallback(() => {
    // if (blockchain.account !== "" && blockchain.smartContract !== null) {
    console.log("getData");
    dispatch(fetchData());
    // }
  }, [dispatch]);

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData());
  //   }
  // };

  const getConfig = async () => {
    console.log("set config1");

    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("set config2", configResponse);

    const config = await configResponse.json();
    console.log("set config", config);
    SET_CONFIG(config);
  };

  // useEffect(() => {
  //   getConfig();
  // });

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    console.log("useEffect");
    dispatch(connect());
    getData();
  }, [getData, dispatch]);

  useEffect(() => {

    console.log("Loading status update", blockchain.loading);
    getData();
    if (blockchain.isconnected) {
      if (blockchain.account) {
        setWalletButtonCaption(truncateEthAddress(blockchain.account));
        setMintButtonCaption("Mint Now");
        setClaimingNft(true);

      } else {
        setWalletButtonCaption("Connect Wallet");
        setMintButtonCaption("Connect Wallet");

        setClaimingNft(false);
      }
    } else {
      if (blockchain.errorMsg) {
        alert(blockchain.errorMsg);
      }
      setWalletButtonCaption("Connect Wallet");
      setMintButtonCaption("Connect Wallet");

      setClaimingNft(false);
    }

    // console.log("totalSupply:", data.totalSupply);
    // console.log("Cost:", data.cost);
    if (blockchain.loading) {
      setWalletButtonCaption("Connecting...");
      setMintButtonCaption("Connecting...");
      setClaimingNft(false);
    }

  }, [blockchain, getData]);

  // const fetchContractData = () => {
  //   dispatch(connect());
  //   getData();
  // };

  // useEffect(() => {
  //   console.log("Just called one time.");
  //   fetchContractData();
  // }, [])

  useFetchPublicData()
  usePersistConnect()


  return (
    <Router history={history}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Header walletConnection={walletConnection} walletButtonCaption={walletButtonCaption} handleOpenModal={onOpen} />

        <BackgroundImage />
        <Switch>
          <Route path="/" exact>
            <Home totalSupply={data.totalSupply} cost={CONFIG.DISPLAY_COST} fetchContractInfo={fetchContractInfo} mintButtonCaption={mintButtonCaption} />
            <section className="menu" id="menu" mobile-block-js="mobile-block-js">
              <div>
                <nav className="header__nav"><a className="is-active" href="#roadmap">ROADMAP</a><a href="#club">Club Physique</a><a href="#benefits">BENEFITS</a></nav>
                <div className="c-btn__wrapper"><a className="c-btn" href="https://https://discord.com/invite/clubphysique">
                  <u className="c-btn__mask"><i className="icon-font icon-discord" />Join Now
                  </u><span><i className="icon-font icon-discord" />Join Now</span></a><a className="c-btn" href="/">
                    <u className="c-btn__mask">{walletButtonCaption}
                    </u><span>{walletButtonCaption}</span></a></div>
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
        <Layout>
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Layout>
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
