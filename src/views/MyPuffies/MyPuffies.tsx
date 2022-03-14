import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core';
import { Flex, Text, Button, useWalletModal, Modal, useModal } from 'penguinfinance-uikit2'
import Page from 'components/layout/Page'
import { useCryptoPuffies } from 'state/hooks';
import useAuth from 'hooks/useAuth';
import useWindowSize from 'hooks/useWindowSize';

interface AttributeProps {
  // eslint-disable-next-line camelcase
  trait_type: string
  value: string
}

interface TokenProps {
  image: string
  name: string
  tokenId: number
  attributes: AttributeProps[]
}

interface Props {
  // eslint-disable-next-line react/require-default-props
  onDismiss?: () => void
  puffy: TokenProps
  bestfriend: number
  nemesis: number
}

const TokenModal: React.FC<Props> = ({ puffy, bestfriend, nemesis, onDismiss }) => {
  return (
    <ModalWrapper>
      <Modal hideCloseButton title='' onDismiss={onDismiss} bodyPadding='0px'>
        <TokenDetailWrapper isModal>
          <CloseButton onClick={onDismiss}><div>×</div></CloseButton>
          <Flex flexDirection='column' alignItems='center'>
            <TokenDetailImg
              src={puffy.image}
              alt='selected-token-image' />
            {/* <Flex mt='8px' alignItems='center'>
              <ShareOnTwitter>Share on Twitter</ShareOnTwitter>
              <TwitterImg 
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/twitter.png`}
                alt='background' />
            </Flex> */}
            <Flex mt='8px' alignItems='center' display='contents !important'>
              <BestFriendNemesisDiv>
                <BestFriendContentBox>
                  <BestFriendTitle justifyContent='left' alignItems='left'>BEST FRIEND:</BestFriendTitle>
                  <BestFriendContent justifyContent='center' alignItems='center'>Earn: Extra AVAX incentives, potions, and in-game abilities.</BestFriendContent>
                </BestFriendContentBox>

                <BestFriendImgContentBox>
                  <BestFriendImg
                    src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/empty_puffy_black.png`}
                    alt='background' />
                  <BestFriendPuffyName justifyContent='center' alignItems='center'>Puffy #{bestfriend}</BestFriendPuffyName>
                </BestFriendImgContentBox>
              </BestFriendNemesisDiv>
            </Flex>
            <Flex mt='8px' alignItems='center' display='contents !important'>
              {/* <BestFriendOuterBox mt='8px' alignItems='center' display='contents'> */}
              <BestFriendNemesisDiv>
                <BestFriendContentBox>
                  <BestFriendTitle justifyContent='left' alignItems='left'>NEMESIS:</BestFriendTitle>
                  <BestFriendContent justifyContent='center' alignItems='center'>Tip: Keep your friends close and your enemies closer.</BestFriendContent>
                </BestFriendContentBox>

                <BestFriendImgContentBox>
                  <NemesisImg
                    src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/empty_puffy_red.png`}
                    alt='background' />
                  <BestFriendPuffyName justifyContent='center' alignItems='center'>Puffy #{nemesis}</BestFriendPuffyName>
                </BestFriendImgContentBox>
              </BestFriendNemesisDiv>
            </Flex>
            {/* <MarketplaceText mt='4px' mb='12px'>View in Marketplace</MarketplaceText> */}
            <TraitsWrapper isModal>
              <Heading justifyContent='center' alignItems='center'>{puffy.name}</Heading>
              {puffy.attributes.map((attribute, index) => {
                return (
                  <AttributeContainer key={attribute.trait_type} index={index}>
                    <div className='type'>{attribute.trait_type}</div>
                    <div className='value'>{attribute.value === 'None' ? '-' : attribute.value}</div>
                  </AttributeContainer>
                )
              })}
            </TraitsWrapper>
          </Flex>
        </TokenDetailWrapper>
      </Modal>
    </ModalWrapper >
  )
}

const Puffy = ({ selectedToken, puffy, onSetToken, tokenIndex, bestfriend, nemesis }) => {
  const windowSize = useWindowSize();
  const [onOpenTokenModal] = useModal(<TokenModal puffy={puffy} bestfriend={bestfriend} nemesis={nemesis} />)

  const handleSetToken = () => {
    onSetToken(puffy, tokenIndex);
    if (windowSize.width < 1200) {
      onOpenTokenModal();
    }
  }
  return (
    <>
      <Flex key={puffy.tokenId} flexDirection='column' alignItems='center'>
        <TokenImg
          isActive={selectedToken && selectedToken.tokenId === puffy.tokenId}
          onClick={handleSetToken}
          src={puffy.image}
          alt={`token-image-${puffy.tokenId}`} />
        <PuffyName isActive={selectedToken && selectedToken.tokenId === puffy.tokenId}>{puffy.name}</PuffyName>
      </Flex>
    </>
  )
}
const MyPuffies = () => {
  const { account } = useWeb3React();
  const { tokensData, tokensBestFriends, tokensNemesis } = useCryptoPuffies(account);
  const [selectedToken, setToken] = useState<TokenProps>();
  const [selectedTokenIndex, setTokenIndex] = useState(0);
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const history = useHistory();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (tokensData.length && !selectedToken) {
      setTokenIndex(0)
      setToken(tokensData[0])
    }
  }, [selectedToken, tokensData]);

  const handleSetToken = (token, tokenIndex) => {
    setTokenIndex(tokenIndex)
    setToken(token);
  };

  const handleMintMore = () => {
    history.push('/mint');
  };

  return (
    <StyledPage>
      <Section>
        <BackgroundImage />
        <Wrapper justifyContent='center' alignItems='flex-start'>
          <MyPuffiesSection isOverFlow={account && tokensData.length > 0} flexDirection='column' alignItems='center'>
            <MyPuffiesContainer>
              <div>My Puffies</div>
              <MyPuffiesImg
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/my_puffies_logo.png`}
                alt='my-puffies'
              />
            </MyPuffiesContainer>
            {tokensData.length === 0 &&
              <>
                <EmptyPuffyImg
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/empty_puffy.png`}
                  alt='empty-puffy' />
                <NotificationText>{account ? 'You don’t have any Puffies yet.' : 'Connect your Wallet to view your Puffies.'}</NotificationText>
              </>
            }
            {!account ?
              <ConnectButton onClick={onPresentConnectModal}>Connect Wallet</ConnectButton>
              :
              <>
                {tokensData.length === 0 &&
                  <ConnectButton onClick={handleMintMore}>Mint More</ConnectButton>
                }
                <FlexLayout>
                  {tokensData.map((token, tokenIndex) => {
                    return (
                      <Puffy
                        key={token.tokenId}
                        selectedToken={selectedToken}
                        onSetToken={handleSetToken}
                        tokenIndex={tokenIndex}
                        bestfriend={tokensBestFriends[tokenIndex]}
                        nemesis={tokensNemesis[tokenIndex]}
                        puffy={token} />
                    )
                  })}
                </FlexLayout>
              </>
            }
          </MyPuffiesSection>
          {selectedToken && account && windowSize.width >= 1200 &&
            <TokenDetailWrapper>
              <Flex flexDirection='column' alignItems='center'>
                <TokenDetailImg
                  src={selectedToken.image}
                  alt='selected-token-image' />
                <Flex mt='8px' alignItems='center'>
                  <TwitterLink
                    target='_blank'
                    href='https://twitter.com/intent/tweet?via=CryptoPuffies&text=Just%20minted%20a%20brand%20new%20Puffy%21&hashtags=%23PuffiesFollowPuffies%20'>
                    <ShareOnTwitter>Share on Twitter</ShareOnTwitter>
                    <TwitterImg
                      src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/twitter.png`}
                      alt='background' />
                  </TwitterLink>
                </Flex>
                <Flex mt='8px' alignItems='center'>
                  <BestFriendNemesisDiv>
                    <BestFriendContentBox>
                      <BestFriendTitle justifyContent='left' alignItems='left'>BEST FRIEND:</BestFriendTitle>
                      <BestFriendContent justifyContent='center' alignItems='center'>Earn: Extra AVAX incentives, potions, and in-game abilities. &nbsp;&nbsp;&nbsp;</BestFriendContent>
                    </BestFriendContentBox>

                    <BestFriendImgContentBox>
                      <BestFriendImg
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/empty_puffy_black.png`}
                        alt='background' />
                      <BestFriendPuffyName justifyContent='center' alignItems='center'>Puffy #{tokensBestFriends[selectedTokenIndex]}</BestFriendPuffyName>
                    </BestFriendImgContentBox>
                  </BestFriendNemesisDiv>
                </Flex>
                <Flex mt='8px' alignItems='center'>
                  <BestFriendNemesisDiv>
                    <BestFriendContentBox>
                      <BestFriendTitle justifyContent='left' alignItems='left'>NEMESIS:</BestFriendTitle>
                      <BestFriendContent justifyContent='center' alignItems='center'>Tip: Keep your friends close and your enemies closer.</BestFriendContent>
                    </BestFriendContentBox>

                    <BestFriendImgContentBox>
                      <NemesisImg
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/my-puffies/empty_puffy_red.png`}
                        alt='background' />
                      <BestFriendPuffyName justifyContent='center' alignItems='center'>Puffy #{tokensNemesis[selectedTokenIndex]}</BestFriendPuffyName>
                    </BestFriendImgContentBox>
                  </BestFriendNemesisDiv>
                </Flex>
                {/* <MarketplaceText mt='4px' mb='12px'>View in Marketplace</MarketplaceText> */}
                <TraitsWrapper>
                  <Heading justifyContent='center' alignItems='center'>{selectedToken.name}</Heading>
                  {selectedToken.attributes.map((attribute, index) => {
                    return (
                      <AttributeContainer key={attribute.trait_type} index={index}>
                        <div className='type'>{attribute.trait_type}</div>
                        <div className='value'>{attribute.value === 'None' ? '-' : attribute.value}</div>
                      </AttributeContainer>
                    )
                  })}
                </TraitsWrapper>
              </Flex>
            </TokenDetailWrapper>
          }
        </Wrapper>
      </Section>
    </StyledPage>
  )
};

const ModalWrapper = styled.div`
  z-index: 200;
  > div:first-child {
    border: none;
    z-index: 200;
    
    > div:first-child {
      padding: 0;
    }
  }
`;

const NotificationText = styled(Text)`
  color: white;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 968px) {
    font-size: 32px;
  }
  @media (min-width: 1200px) {
    font-size: 36px;
  }
  @media (min-width: 1400px) {
    font-size: 36px;
  }
`;

export const StyledPage = styled(Page)`
  max-width: unset;
  padding-top: 0px;
  padding: 0px;
`

export const Section = styled.div`
  position: relative;
  padding-bottom: 16px;
  min-height: calc(100vh - 64px);
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_1.png');
  background-size: contain;
`;


export const Wrapper = styled(Flex)`
  position: relative;
  padding-top: 60px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 80px;
    padding-bottom: 60px;
  }
  @media (min-width: 1200px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 120px;
  }
  @media (min-width: 1400px) {
    padding: 0;
    padding-top: 120px;
    padding-bottom: 80px;
  }
`;

const FlexLayout = styled.div`
  display: flex;
  // justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  & > * {
    margin: 0 8px;
    margin-bottom: 32px;
    width: 100%;

    @media (min-width: 440px) {
      min-width: unset;
      max-width: 44%;
      width: unset;
    }
    @media (min-width: 768px) {
      min-width: unset;
      max-width: 30.5%;
      width: 100%;
    }
    @media (min-width: 1400px) {
      min-width: unset;
      max-width: 22.5%;
      width: 100%;
    }
  }
`

const TokenImg = styled.img<{ isActive: boolean }>`
  border-radius: 60px;
  margin-bottom: 16px;
  border: 4px solid ${({ isActive }) => isActive ? 'white' : '#01CBF3'};
  cursor: pointer;
`;

const EmptyPuffyImg = styled.img`
  width: 180px;
  margin-bottom: 24px;

  @media (min-width: 968px) {
    width: 240px;
  }
`;

const PuffyName = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => isActive ? '#D1F7FF' : 'white'};
  border: 2px solid white;
  border-radius: 40px;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #01CBF3;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPuffiesContainer = styled(Flex)`
  div {
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    color: #FA4D4B;

    @media (min-width: 564px) {
      font-size: 44px;
      line-height: 64x;
    }

    @media (min-width: 968px) {
      font-size: 64px;
      line-height: 96px;
    }
  }
  border-radius: 48px;
  background: white;
  margin-bottom: 60px;
  position: relative;
  margin-top: 36px;
  padding: 12px 100px 12px 48px;

  @media (min-width: 564px) {
    padding: 24px 100px 24px 48px;
    border-radius: 24px;
  }
  @media (min-width: 968px) {
    padding: 24px 120px 24px 72px;
    border-radius: 48px;
  }
`;

const MyPuffiesImg = styled.img`
  position: absolute;
  right: -40px;
  width: 160px;
  top: -40px;
  
  @media (min-width: 564px) {
    right: -80px;
    width: 200px;
    top: -50px;
  }
  @media (min-width: 968px) {
    right: -160px;
    width: 320px;
    top: -80px;
  }
`;

const TokenDetailWrapper = styled.div<{ isModal?: boolean }>`
  background: white;
  border-radius: 40px;
  padding: 32px;
  margin-left: ${({ isModal }) => !isModal && '28px'};
  position: relative;
`;

const CloseButton = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 80px;
  border: 2px solid #01CBF3;
  color: #01CBF3;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12px;
  top: 12px;

  div {
    margin-right: -1px;
    margin-top: -6px;
    font-size: 40px;
    line-height: 14px;
  }
`;

const TokenDetailImg = styled.img`
  width: 300px;
  height: 300px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 40px;
`;

const ShareOnTwitter = styled(Text)`
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  color: rgb(79, 218, 247);
  // margin-top: 8px;
`;

const TwitterImg = styled.img`
  height: 14px;
  margin-left: 8px;

  @media (min-width: 768px) {
    height: 14px;
  }
`;

const TwitterLink = styled.a`
  display: flex;
  align-items: center;
`;
const BestFriendNemesisDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BestFriendContentBox = styled.div`
  display: block;
  align-items: center;
  text-align: left;
  width: 65%;
`;

const BestFriendImgContentBox = styled.div`
  display: block;
  align-items: center;
  text-align: center;
  width: 35%;
`;

const BestFriendImg = styled.img`
  height: 40px;
  margin-left: 8px;

  @media (min-width: 768px) {
    height: 40px;
  }
`;
const NemesisImg = styled.img`
  height: 40px;
  margin-left: 8px;

  @media (min-width: 768px) {
    height: 40px;
  }
`;

const BestFriendOuterBox = styled.div`

  display: contents';
mt='8px' alignItems='center' display='contents'
  // // background: rgba(79, 219, 250, 0.11);
  // color: #01CBF3;
  // font-family: 'Rowdies';
  // font-weight: normal;
  // font-style: normal;
  // font-size: 14px;
  // line-height: 18px;
  // height: 36px;
  // margin-top: -2px;
  // margin-left: -2px;
  // margin-right: -2px;
`;

const BestFriendContent = styled(Flex)`
  // background: rgba(79, 219, 250, 0.11);
  color: #01CBF3;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  height: 36px;
  // margin-top: -2px;
  // margin-left: -2px;
  // margin-right: -2px;
`;
const BestFriendTitle = styled(Flex)`
  // background: rgba(79, 219, 250, 0.11);
  color: #000000;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 10px;
  height: 24px;
  margin-top: -2px;
  margin-left: 2px;
  margin-right: -2px;
`;
const BestFriendPuffyName = styled(Flex)`
  // background: rgba(79, 219, 250, 0.11);
  color: #01CBF3;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  height: 36px;
  margin-top: -2px;
  margin-left: -2px;
  margin-right: -2px;
`;

const TraitsWrapper = styled.div<{ isModal?: boolean }>`
  border: 2px solid #4FDBFA;
  border-radius: 18px;
  width: 100%;
  margin-top: 20px;
  // max-height: ${({ isModal }) => !isModal && 'calc(100vh - 600px)'};
  // overflow-y: ${({ isModal }) => !isModal && 'auto'};
  // overflow-x: ${({ isModal }) => !isModal && 'hidden'};
`;

const Heading = styled(Flex)`
  background: rgba(79, 219, 250, 0.11);
  border: 2px solid #4FDBFA;
  border-radius: 64px;
  color: #01CBF3;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  height: 36px;
  margin-top: -2px;
  margin-left: -2px;
  margin-right: -2px;
`;

const AttributeContainer = styled(Flex) <{ index: number }>`
  div {
    font-family: 'Rowdies';
    font-weight: normal;
    font-style: normal;
    padding: 8px;
    display: flex;
    justify-content: center;
    background: ${({ index }) => index % 2 !== 0 && '#ECFBFE'};
  }
  .type {
    color: #00C0E6;
    width: 45%;
    border-right: 2px solid #4FDBFA;
  }
  .value {
    width: 55%;
  }
`;


const BestFriendAttributeContainer = styled(Flex) <{ index: number }>`
  div {
    font-family: 'Rowdies';
    font-weight: normal;
    font-style: normal;
    padding: 8px;
    display: block;
    justify-content: center;
    background: ${({ index }) => index % 2 !== 0 && '#ECFBFE'};
  }
  // .type {
  //   color: #00C0E6;
  //   width: 45%;
  //   border-right: 2px solid #4FDBFA;
  // }
  .value {
    width: 55%;
  }
`;

// const MarketplaceText = styled(Text)`
//   color: #9D7EFF;
//   font-family: 'Rowdies';
//   font-weight: normal;
//   font-style: normal;
//   font-size: 16px;
// `;

const ConnectButton = styled(Button)`
  background: #FA4D4B;
  color: white;
  box-shadow: none;
  border-radius: 100px;
  height: 40px;
  width: 240px;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  margin-top: 24px;

  @media (min-width: 564px) {
    margin-top: 20px; 
    font-size: 16px;
    height: 40px;
  }
  @media (min-width: 968px) {
    margin-top: 20px; 
    font-size: 20px;
    height: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 32px;
    font-size: 20px;
    height: 48x;
  }
`;

const MyPuffiesSection = styled(Flex) <{ isOverFlow: boolean }>`
  @media (min-width: 564px) {
    max-height: calc(100vh - 160px);
    overflow-y: ${({ isOverFlow }) => isOverFlow && 'auto'};
    overflow-x: ${({ isOverFlow }) => isOverFlow && 'hidden'};
    padding-right: 16px;
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 960px;
  }
  @media (min-width: 1400px) {
    max-width: 960px;
  }
`;

export default MyPuffies;