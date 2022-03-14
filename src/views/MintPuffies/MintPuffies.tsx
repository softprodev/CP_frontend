/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import Slider from "react-slick";
import { Flex, useModal, useWalletModal } from 'penguinfinance-uikit2'
import { useHistory } from 'react-router-dom';
// import CountDown from 'components/CountDown';
import useWindowSize from 'hooks/useWindowSize';
import useMintingTokens from 'hooks/useMintingTokens';
import { useCryptoPuffies } from 'state/hooks';
import useMintPuffies, { useBatchMintPuffies } from 'hooks/useMintPuffies';
import useAuth from 'hooks/useAuth';
import { sleep } from 'utils/time'
import { fetchTokenData } from 'state/cryptopuffies/fetchCryptoPuffiesUser'
import {
  StyledPage, Section, BackgroundImage, Wrapper, MintWrapper,
  EggsContainer, EggImg, Egg2Img, Egg3Img, PuffiesCountText, PuffiesMintedText, RarityContainer, PuggleButton,
  PlusMinusButton, PuffyPerPrice, PuffyPlayer, PuffyPrice, LogoImg, CollectionText, CountDownContainer,
  PuffyPartyImg, PuffyGoImg, PuffyPartyShadowImg, PuffyPartyText, PlayerImg, PartySection, EggQuestionText,
  SliderContainer, SliderImage, GoldenTicketButton, GoldenTicketImg, ActionButtonsWrapper, PuffiesContainer
} from './MintPuffiesUI'
import MintingPhaseModal from './MintingPhaseModal';

const LEFT_IMAGES = [
  { id: 1, image: 'left1.jpg' },
  { id: 2, image: 'left2.jpg' },
  { id: 3, image: 'left3.jpg' },
  { id: 4, image: 'left4.jpg' },
  { id: 5, image: 'left5.jpg' },
  { id: 6, image: 'left6.jpg' },
  { id: 7, image: 'left7.jpg' },
]

const RIGHT_IMAGES = [
  { id: 1, image: 'right1.jpg' },
  { id: 2, image: 'right2.jpg' },
  { id: 3, image: 'right3.jpg' },
  { id: 4, image: 'right4.jpg' },
  { id: 5, image: 'right5.jpg' },
  { id: 6, image: 'right6.jpg' },
  { id: 7, image: 'right7.jpg' },
]

interface Props {
  setMusicVolume: (musicVolume: number) => void;
  volumeValue: number;
}

const MintPuffies: React.FC<Props> = ({ setMusicVolume, volumeValue }) => {

  const [rarity, setRarity] = useState(1);
  const [minting, setMinting] = useState(false);
  const windowSize = useWindowSize();
  const { account } = useWeb3React();
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const { updateMintingTokens } = useMintingTokens();
  const history = useHistory();
  const handleViewMyPuffies = () => {
    history.push('/my-puffies');
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [onViewMintingPhase] = useModal(<MintingPhaseModal onViewMyPuffies={handleViewMyPuffies} />)
  const { onMintPuffy } = useMintPuffies();
  const { onBatchMintPuffies } = useBatchMintPuffies();
  const { totalSupply, mintPrice, maxTokens, mintStartTimeStamp, earlyMintingWindow, goldenTickets, goldenTicketDiscount } = useCryptoPuffies(account);
  // console.log('ant : totalsupply, mintprice => ', totalSupply, mintPrice, maxTokens, earlyMintingWindow, mintStartTimeStamp, goldenTickets);
  const startDate = mintStartTimeStamp * 1000;
  const currentDate = new Date().getTime();
  const isPresale = currentDate >= (startDate - earlyMintingWindow * 1000) && currentDate < startDate;
  const mintDisabled = account && ((startDate - earlyMintingWindow * 1000) > currentDate || (isPresale && goldenTickets < rarity) || minting);
  const tokenPrice = isPresale ? (mintPrice - goldenTicketDiscount) : mintPrice;


  const handleMusicVolume = () => {
    if (volumeValue === 0.01) {
      setMusicVolume(0.1);
    } else if (volumeValue === 0.1) {
      setMusicVolume(0);
    } else if (volumeValue === 0) {
      setMusicVolume(0.01);
    }
  }

  const renderMusicButton = (): string => {
    switch (volumeValue) {
      case 0.01:
        return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_0.png`;
      case 0.1:
        return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_2.png`;
      // case 1:
      //   return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_2.png`;
      case 0:
      default:
        return `${process.env.PUBLIC_URL}/images/cryptopuffies/music/volume_mute.png`;
    }
  };
  const handleMinusRarity = () => {
    if (rarity > 1) {
      setRarity(prev => prev - 1);
    }
  };

  const handlePlusRarity = () => {
    // if (rarity < (maxMintPerUser - tokensMinted)) {
    if (rarity < 10 && !isPresale) {
      setRarity(prev => prev + 1);
    }
    // }
  };

  const handleMint = async () => {
    try {
      if (rarity) {
        setMinting(true);
        if (rarity === 1) {
          const transactionHash = await onMintPuffy((rarity * tokenPrice).toString());
          const { tokenId } = transactionHash.events.Transfer.returnValues;
          await sleep(1000);
          const tokenData = await fetchTokenData(`https://puffies.cloudtip.me/api/token-data/${tokenId}`);
          updateMintingTokens([tokenData.data]);
        } else {
          const transactionHash = await onBatchMintPuffies(rarity, (rarity * mintPrice).toString());
          const tokenIds = transactionHash.events.Transfer.map(transfer => transfer.returnValues.tokenId);
          await sleep(1000);
          const tokensData = await Promise.all(tokenIds.map(tokenId => fetchTokenData(`https://puffies.cloudtip.me/api/token-data/${tokenId}`)));
          updateMintingTokens(tokensData.map(tokenData => tokenData.data));
        }
        onViewMintingPhase();
        setMinting(false);
      }
    } catch (error) {
      setMinting(false);
    }
  };

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    vertical: true,
    verticalSwiping: true,
  };

  const renderPartySection = () => {
    return (
      <Flex flexDirection='column' alignItems='center'>
        {currentDate >= mintStartTimeStamp ?
          <PuffyGoImg
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/go_puffy.png`}
            alt="puffy go" />
          :
          <>
            <PuffyPartyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/puffy_party.png`}
              alt="mint logo" />
            {windowSize.width >= 1200 &&
              <PuffyPartyShadowImg
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/puffy_party_shadow.png`}
                alt="puffy shadow logo" />
            }
          </>
        }
        <PuffyPlayer alignItems='center' mt='20px'>
          <PuffyPartyText>Let’s PuggleParty! - Les Puffielers</PuffyPartyText>
          <Flex>
            <div onClick={handleMusicVolume} aria-hidden="true">
              <PlayerImg
                src={renderMusicButton()}
                alt='volume' />
            </div>
          </Flex>
        </PuffyPlayer>
      </Flex>
    )
  };

  const renderPuffyPrice = () => {
    let mintButtonText = 'Mint Puffy';
    if (rarity) {
      if (isPresale) {
        mintButtonText = 'Use Golden Ticket';
        // if (goldenTickets < rarity) {
        //   mintButtonText = 'No enough tickets';
        // }
      }
    }
    if (minting) {
      mintButtonText = 'Minting';
    }
    if (!account) {
      mintButtonText = 'Connect Wallet'
    }
    return (
      <>
        <ActionButtonsWrapper>
          {isPresale &&
            <GoldenTicketButton>
              <GoldenTicketImg
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/golden_ticket.png`}
                alt='golden_ticket'
                width='48px'
                height='48px'
              />
              {`x${goldenTickets || 0}`}
            </GoldenTicketButton>
          }
          <div>
            <RarityContainer justifyContent='space-between' alignItems='center'>
              <PlusMinusButton onClick={handleMinusRarity}>-</PlusMinusButton>
              <span>{rarity || '?'}</span>
              <PlusMinusButton onClick={handlePlusRarity}>+</PlusMinusButton>
            </RarityContainer>
            <PuggleButton onClick={account ? handleMint : onPresentConnectModal} disabled={mintDisabled}>{mintButtonText}</PuggleButton>
          </div>
        </ActionButtonsWrapper>
        <PuffyPerPrice>{tokenPrice.toFixed(2)} AVAX per Puffy</PuffyPerPrice>
        <PuffyPrice>{`Total: ${rarity ? (rarity * tokenPrice).toFixed(2) : '?'} AVAX`}</PuffyPrice>
      </>
    );
  };

  const renderPuffiesMinted = () => {
    return (
      <>
        <PuffiesCountText mt='8px'>
          {`${totalSupply}/${maxTokens}`}
        </PuffiesCountText>
        <PuffiesMintedText>Puffies Minted</PuffiesMintedText>
      </>
    )
  }

  const renderEggContainer = () => {
    return (
      <EggsContainer
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
        <EggImg
          rarity={rarity}
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/egg1.png`}
          alt="egg1" />
        {rarity > 1 &&
          <Egg2Img
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/egg2.png`}
            alt="egg2" />
        }
        {rarity > 2 &&
          <Egg3Img
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/egg3.png`}
            alt="egg3" />
        }
        {rarity === 0 &&
          <EggQuestionText>?</EggQuestionText>
        }
      </EggsContainer>
    )
  }

  const renderDesktopView = () => {
    return (
      <>
        <SliderContainer>
          <Slider {...settings}>
            {LEFT_IMAGES.map(leftImage => (
              <div key={`left-${leftImage.id}`}>
                <SliderImage
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/carousel/${leftImage.image}`}
                  alt="member image"
                />
              </div>
            ))}
          </Slider>
        </SliderContainer>
        {/* <MintBannerImage1
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner1.png`}
          alt="mint banner 1" /> */}
        <PartySection flexDirection='column' alignItems='center'>
          <LogoImg
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/logo.png`}
            alt="mint logo" />

          {isPresale ?
            <CollectionText> </CollectionText>
            :
            <>
              <CollectionText>Cutest collection in <span>AVAX</span>!</CollectionText>
            </>
          }
          <CountDownContainer><span><p>PUFFIES ARE LIVE!</p></span></CountDownContainer>
          {renderPartySection()}
        </PartySection>
        <PuffiesContainer
          isPresale={isPresale}
          flexDirection='column'
          alignItems='center'
          mr='16px'>
          {renderPuffiesMinted()}
          {renderEggContainer()}
          {renderPuffyPrice()}
        </PuffiesContainer>
        <SliderContainer>
          <Slider {...settings}>
            {RIGHT_IMAGES.map(rightImage => (
              <div key={`right-${rightImage.id}`}>
                <SliderImage
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/carousel/${rightImage.image}`}
                  alt="member image"
                />
              </div>
            ))}
          </Slider>
        </SliderContainer>
        {/* <MintBannerImage2
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner2.png`}
          alt="mint banner 2" /> */}
      </>
    )
  };

  const renderTabletView = () => {
    return (
      <>
        <LogoImg
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/logo.png`}
          alt="mint logo" />
        {isPresale ?
          <CollectionText> </CollectionText>
          :
          <>
            <CollectionText>Cutest collection in <span>AVAX</span>!</CollectionText>
          </>
        }
        <CountDownContainer><span><p>PUFFIES ARE LIVE!</p></span></CountDownContainer>
        <Flex mt='16px'>
          <SliderContainer mr='32px'>
            <Slider {...settings}>
              {LEFT_IMAGES.map(leftImage => (
                <div key={`left-${leftImage.id}`}>
                  <SliderImage
                    src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/carousel/${leftImage.image}`}
                    alt="member image"
                  />
                </div>
              ))}
            </Slider>
          </SliderContainer>
          {/* <MintBannerImage1
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner1.png`}
            alt="mint banner 1" /> */}
          <div>
            {renderPartySection()}
          </div>
          <SliderContainer ml='32px'>
            <Slider {...settings}>
              {RIGHT_IMAGES.map(rightImage => (
                <div key={`right-${rightImage.id}`}>
                  <SliderImage
                    src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/carousel/${rightImage.image}`}
                    alt="member image"
                  />
                </div>
              ))}
            </Slider>
          </SliderContainer>
          {/* <MintBannerImage2
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner2.png`}
            alt="mint banner 2" /> */}
        </Flex>
        <Flex alignItems='center' justifyContent='space-around'>
          {renderEggContainer()}
          <Flex flexDirection='column' alignItems='center' ml='16px'>
            {renderPuffiesMinted()}
            {renderPuffyPrice()}
          </Flex>
        </Flex>
      </>
    )
  };

  const renderMobileView = () => {
    return (
      <>
        <LogoImg
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/logo.png`}
          alt="mint logo" />
        {isPresale ?
          <CollectionText> </CollectionText>
          :
          <>
            <CollectionText>Cutest collection in <span>AVAX</span>!</CollectionText>
          </>
        }
        <CountDownContainer><span><p>PUFFIES ARE LIVE!</p></span></CountDownContainer>
        <Flex mt='32px' alignItems='center'>
          {windowSize.width >= 570 &&
            <Flex flexDirection='column'>
              <SliderContainer>
                <Slider {...settings}>
                  {LEFT_IMAGES.map(leftImage => (
                    <div key={`left-${leftImage.id}`}>
                      <SliderImage
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/carousel/${leftImage.image}`}
                        alt="member image"
                      />
                    </div>
                  ))}
                </Slider>
              </SliderContainer>
              {/* <MintBannerImage2
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner2.png`}
                alt="mint banner 2" />
              <MintBannerImage1
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/mint_banner1.png`}
                alt="mint banner 1" /> */}
            </Flex>
          }
          <Flex flexDirection='column' alignItems='center' ml={windowSize.width >= 570 && '24px'}>
            <div>
              {renderPartySection()}
            </div>
            {renderPuffiesMinted()}
            {renderEggContainer()}
            {renderPuffyPrice()}
          </Flex>
        </Flex>
      </>
    )
  };

  return (
    <StyledPage>
      <Section>
        <BackgroundImage />
        <Wrapper justifyContent='center'>
          <MintWrapper>
            {windowSize.width >= 1200 && renderDesktopView()}
            {(windowSize.width >= 768 && windowSize.width < 1200) && renderTabletView()}
            {windowSize.width < 768 && renderMobileView()}
          </MintWrapper>
        </Wrapper>
      </Section>
    </StyledPage>
  )
}

export default MintPuffies
