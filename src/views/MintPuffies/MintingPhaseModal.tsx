import React, { useState } from 'react'
import { Button, Modal, Flex, Text } from 'penguinfinance-uikit2'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core';
import { useCryptoPuffies } from 'state/hooks';
import Slider from 'react-slick'
import useAudio from 'hooks/useAudio';
import useWindowSize from 'hooks/useWindowSize';
import useMintingTokens from 'hooks/useMintingTokens';

interface Props {
  // eslint-disable-next-line react/require-default-props
  onDismiss?: () => void
  onViewMyPuffies: () => void
}

const CRACK_SOUND1 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644743111/cryptopuffies_soundfiles/click1and2_sound_lyx04h.wav';
// const CRACK_SOUND2 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644743111/cryptopuffies_soundfiles/click3_sound_ad9fjv.wav';

const REVEAL_SOUND1 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644736133/cryptopuffies_soundfiles/reveal_sound1_nwl0ld.wav';
const REVEAL_SOUND2 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644736133/cryptopuffies_soundfiles/reveal_sound2_uaps8x.wav';
const REVEAL_SOUND3 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644736133/cryptopuffies_soundfiles/reveal_sound3_gf7iiz.wav';
const REVEAL_SOUND4 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644736133/cryptopuffies_soundfiles/reveal_sound4_kxzsku.wav';
const REVEAL_SOUND5 = 'https://res.cloudinary.com/dbyunrpzq/video/upload/v1644736133/cryptopuffies_soundfiles/reveal_sound5_szoted.wav';


const MintingPhaseModal: React.FC<Props> = ({ onDismiss, onViewMyPuffies }) => {
  const [step, setStep] = useState(1);
  const { account } = useWeb3React();
  const [mintingCompleted, setMintingCompleted] = useState(false);
  const [viewMyPuffies, setViewMyPuffies] = useState(false);
  const { tokensData } = useCryptoPuffies(account);
  const [, playCrackSound1] = useAudio(CRACK_SOUND1);
  const [, playCrackSound2] = useAudio(CRACK_SOUND1);
  const [, playCrackSound3] = useAudio(CRACK_SOUND1);
  const [, playRevealSound1] = useAudio(REVEAL_SOUND1);
  const [, playRevealSound2] = useAudio(REVEAL_SOUND2);
  const [, playRevealSound3] = useAudio(REVEAL_SOUND3);
  const [, playRevealSound4] = useAudio(REVEAL_SOUND4);
  const [, playRevealSound5] = useAudio(REVEAL_SOUND5);
  const REVEAL_SOUNDS = [playRevealSound1, playRevealSound2, playRevealSound3, playRevealSound4, playRevealSound5];
  const [mintingTokenIndex, setMintingTokenIndex] = useState(0);
  const windowSize = useWindowSize();
  const { mintingTokens } = useMintingTokens();

  const renderGuideText = () => {
    switch (step) {
      case 1:
      case 2:
        return <>Tap to break your <span>Puffy Egg</span>!</>
      case 3:
        return <>Keep tapping to reveal your <span>Puffy</span>!</>
      case 4:
      case 5:
      return <>Your <span>Puffy</span> has been born!</>
      default:
        return ''
    }
  };

  const handleMoveToNextStep = () => {
    if (step === 1) {
      playCrackSound1();
    }
    if (step === 2) {
      playCrackSound2();
    }
    if (step === 3) {
      playCrackSound3();
    }
    if (step === 4) {
      playRevealSound2();
      REVEAL_SOUNDS[mintingTokenIndex % 5](); // SHOULD BE REPLACED
    }

    if (step === 4) {
      setStep(1);
      setMintingCompleted(true);
    } else {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handleSkipAnimation = () => {
    setStep(1);
    setMintingCompleted(true);
  }

  const renderEgg = () => {
    return (
      <>
        <EggImg
          active={step === 1}
          onClick={handleMoveToNextStep}
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/egg_initial.png`}
          alt='step1' />
        <EggImg
          active={step === 2}
          // className='step2'
          onClick={handleMoveToNextStep}
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/egg_click1.png`}
          alt='step2' />
        <EggImg
          active={step === 3}
          onClick={handleMoveToNextStep}
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/egg_click2.png`}
          alt='step3' />
        <EggImg
          active={step === 4}
          onClick={handleMoveToNextStep}
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/egg_click3.png`}
          alt='step4' />
      </>
    )
  };

  const handleViewPuffies = () => {
    setViewMyPuffies(true);
  };

  const handleMintNext = () => {
    setMintingTokenIndex(prev => prev + 1);
    setMintingCompleted(false);
  }

  const handleCloseModal = () => {
    onDismiss();
  }

  const handleViewMyPuffies = () => {
    onDismiss();
    onViewMyPuffies();
  }

  const renderActions = () => {
    return (
      <ActionsContainer>
        {mintingTokenIndex < mintingTokens.length-1 && // REPLACE BY MINTED TOKENS
          <ActionButton onClick={handleMintNext}>Mint Next!</ActionButton>
        }
        {mintingTokenIndex < mintingTokens.length-1 &&
          <ActionButton onClick={handleViewPuffies}>Mint All!</ActionButton>
        }
        {mintingTokenIndex === mintingTokens.length-1 &&
          <ActionButton onClick={handleViewMyPuffies}>View My Puffies</ActionButton>
        }
        {mintingTokenIndex === mintingTokens.length-1 &&
          <ActionButton onClick={handleCloseModal}>Mint More</ActionButton>
        }
      </ActionsContainer>
    )
  };

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    centerMode: windowSize.width >= 768,
    variableWidth: true,
    nextArrow: (
      <ArrowWrapper arrowType='right' margin='0 -16px 0 0'>
        <ArrowContainer arrowType='right' alignItems='center' justifyContent='center' mr='-16px'>
          <ArrowImg 
            arrowType='right'
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/arrow_right.png`}
            alt='Arrow Right' />
        </ArrowContainer>
      </ArrowWrapper>
    ),
    prevArrow: (
      <ArrowWrapper arrowType='left' margin='0 0 0 -20px'>
        <ArrowContainer arrowType='left' alignItems='center' justifyContent='center' ml='-40px'>
          <ArrowImg 
            arrowType='left'
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/arrow_left.png`}
            alt='Arrow left' />
        </ArrowContainer>
      </ArrowWrapper>
    )
  };

  const isSimpleView = (tokensData.length === 1 || (windowSize.width >= 768 && tokensData.length <= 2));
  const renderMyPuffies = () => {
    return (
      <SliderContainer justifyContent='center'>
        {isSimpleView ?
          <Flex>
            {[...tokensData].reverse().map(token => {
              return (
                <PuffyImage
                  key={token.tokenId}
                  src={`https://puffies.cloudtip.me/images/${token.tokenId}.jpg`}
                  alt="token image"
                  mb={windowSize.width < 968 ? '10px' : '6px'}
                />
              )
            })}
          </Flex>
        :
          <Slider {...settings}>
            {[...tokensData].reverse().map(token => (
              <div key={token.tokenId}>
                <PuffyImage
                  src={`https://puffies.cloudtip.me/images/${token.tokenId}.jpg`}
                  alt="token image"
                />
              </div>
            ))}
          </Slider>
        }
      </SliderContainer>
    )
  }

  return (
    <ModalWrapper>
      <Modal title='' hideCloseButton bodyPadding="0px" onDismiss={onDismiss}>
        <Wrapper>
          <WhiteBackground>
            <LogoImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/logo.png`}
              alt='background' />
            {viewMyPuffies ? 
              <>
                <MyPuffiesCount>
                  <span>{tokensData.length} Puffies</span> total
                </MyPuffiesCount>
                {renderMyPuffies()}
                <MintMoreButton onClick={handleCloseModal} mt='16px'>Mint More</MintMoreButton>
                <ActionButton onClick={handleViewMyPuffies}>View My Puffies</ActionButton>
              </>
            :
              <>
                {mintingCompleted ? 
                  <PuffyContainer justifyContent='center' flexDirection='column' alignItems='center'>
                    {/* <PuffyImg
                      src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/puffy.png`}
                      alt='puffy'
                    /> */}
                    <PuffyImg
                      src={`https://puffies.cloudtip.me/images/${mintingTokens[mintingTokenIndex].tokenId}.jpg`}
                      alt='puffy'
                    />
                    {renderActions()}
                  </PuffyContainer>
                  : <MintingContainer>
                    <MintingBgImg 
                      src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/background.png`}
                      alt='background' />
                    {renderEgg()}
                    {/* {step >= 4 &&
                      <NewPuffyImg
                        onClick={handleMoveToNextStep}
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/new_puffy.png`}
                        alt='background' />
                    } */}
                  </MintingContainer>
                }
                {mintingCompleted ? 
                  <>
                    <GuideText>
                      You got an <span>AMAZING</span> Puffy!
                    </GuideText>
                    <Flex mt='8px' alignItems='center'>
                      <TwitterLink 
                        target='_blank'
                        href='https://twitter.com/intent/tweet?via=CryptoPuffies&text=Just%20minted%20a%20brand%20new%20Puffy%21&hashtags=%23PuffiesFollowPuffies%20'>
                        <ShareOnTwitter>Share on <span>Twitter</span></ShareOnTwitter>
                        <TwitterImg 
                          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/mint/minting/twitter.png`}
                          alt='background' />
                      </TwitterLink>
                    </Flex>
                  </>
                  : <>
                    <GuideText>
                      {renderGuideText()}
                    </GuideText>
                    <SkipAnimationText onClick={handleSkipAnimation}>(<span>Skip animation</span>)</SkipAnimationText>
                  </>
                }
              </>
            }
          </WhiteBackground>
        </Wrapper>
      </Modal>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  z-index: 200;
  > div:first-child {
    border: none;
    z-index: 200;
    border-radius: 40px;

    @media (min-width: 768px) {
      border-radius: 80px;
    }
    > div:first-child {
      padding: 0;
    }
  }
`;

const Wrapper = styled.div`
  background-image: url('/images/cryptopuffies/bg_1.png');
  background-size: contain;
  padding: 32px 20px 20px;

  @media (min-width: 768px) {
    padding: 40px 40px 32px;
  }
  @media (min-width: 968px) {
    padding: 48px 60px 32px;
  }
  @media (min-width: 1200px) {
    padding: 64px 80px 40px;
  }
`;

const WhiteBackground = styled.div`
  position: relative;
  background: white;
  border-radius: 60px;
  padding: 48px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 48px 24px 24px;
    min-width: 600px;
  }
  @media (min-width: 968px) {
    padding: 48px 24px 24px;
    min-width: 800px;
  }
  @media (min-width: 1200px) {
    min-width: 1000px;
    padding: 48px 24px 24px;
  }
`;

const MintingContainer = styled.div`
  position: relative;
`;

const MintingBgImg = styled.img`
  height: 240px;
  max-width: 290px;
  border-radius: 32px;

  @media (min-width: 768px) {
    height: 400px;
    max-width: 500px;
    border-radius: unset;
  }
  @media (min-width: 968px) {
    height: 400px;
    max-width: unset;
  }
  @media (min-width: 1200px) {
    height: 400px;
  }
`

const GuideText = styled.div`
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  margin-top: 16px;

  span {
    font-family: 'Rowdies';
    color: #FA4D4B;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
    margin-top: 20px;
  }
`;

const MyPuffiesCount = styled(GuideText)`
  margin-top: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

const EggImg = styled.img<{ margin?: string, active: boolean }>`
  height: 180px;
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  margin-left: ${({ margin }) => margin};
  opacity: ${({ active }) => active ? 1 : 0};

  @media (min-width: 768px) {
    height: 320px;
    top: 50%;
  }
`;

// const Egg2Img = styled(EggImg)`
//   height: 230px;

//   @media (min-width: 768px) {
//     height: 400px;
//   }
// `;

// const NewPuffyImg = styled.img`
//   height: 240px;
//   position: absolute;
//   left: 50%;
//   top: 42%;
//   transform: translate(-50%, -50%);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     height: 360px;
//     top: 40%;
//   }
// `;

const SkipAnimationText = styled(Text)`
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  cursor: pointer;

  span {
    font-family: 'Rowdies';
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const LogoImg = styled.img`
  position: absolute;
  top: -5%;
  left: -1%;
  z-index: 1;
  width: 120px;

  @media (min-width: 768px) {
    width: 200px;
    top: -7%;
    left: -3%;
  }
  @media (min-width: 968px) {
    width: 240px;
  }
  @media (min-width: 1200px) {
    width: 300px;
  }
`;

const ShareOnTwitter = styled(Text)`
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  span {
    font-family: 'Rowdies';
    text-decoration: underline;
    color: rgb(79, 218, 247)
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const TwitterImg = styled.img`
  height: 16px;
  margin-left: 8px;

  @media (min-width: 768px) {
    height: 20px;
  }
`;

const TwitterLink = styled.a`
  display: flex;
  align-items: center;
`;

const PuffyContainer = styled(Flex)`
  position: relative;
  width: 100%;
`;

const PuffyImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 32px;

  @media (min-width: 768px) {
    height: 320px;
    width: 320px;
  }
  @media (min-width: 968px) {
    height: 320px;
    width: 320px;
  }
  @media (min-width: 1200px) {
    height: 400px;
    width: 400px;
  }
`;

const ActionButton = styled(Button)`
  color: white;
  background: #FA4D4B;
  border-radius: 100px;
  min-width: 160px;
  margin-bottom: 8px;
  box-shadow: none;
  font-family: 'Rowdies';
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  height: 36px;

  @media (min-width: 768px) {
    font-size: 16px;
    min-width: 160px;
    height: 40px;
    margin-left: 4px;
    margin-right: 4px;
  }

  @media (min-width: 968px) {
    font-size: 16px;
    min-width: 160px;
    height: 40px;
    margin-left: 4px;
    margin-right: 4px;
  }

  @media (min-width: 1200px) {
    height: 44px;
    font-size: 18px;
    min-width: 200px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const MintMoreButton = styled(ActionButton)`
  background: #FFDF65;
  margin-bottom: 2px;
`;

const ActionsContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 32px;
  }
  @media (min-width: 968px) {
    flex-direction: row;
    margin-top: 32px;
  }
  @media (min-width: 1200px) {
    position: absolute;
    right: 32px;
    top: 200px;
    transform: translate(0 , -50%);
    align-items: center;
    flex-direction: column;
    margin-top: 0;
  }
`;

const SliderContainer = styled(Flex)`
  // width: 100%;

  .slick-list {
    max-width: 290px;
    max-height: 322px;
    border-radius: 16px;

    @media (min-width: 768px) {
      max-width: 480px;
      border-radius: 32px;
    }
    @media (min-width: 968px) {
      max-width: 600px;
      border-radius: 32px;
    }
    @media (min-width: 1200px) {
      max-width: 800px;
      border-radius: 32px;
    }
  }

  .slick-next:focus, .slick-next:hover, .slick-prev:focus, .slick-prev:hover {
    // color: unset;
    // outline: unset;
    // background: rgb(79, 218, 247);
  }

  // .slick-prev {
  //   margin-left: -8px;

  //   @media (min-width: 968px) {
  //     margin-left: 0;
  //   }
  // }

  @media (min-width: 968px) {
    margin-bottom: 20px;
    margin-top: 4px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const PuffyImage = styled.img<{ mb?: string }>`
  width: 180px;
  height: 180px;
  margin-right: 8px;
  border-radius: 16px;
  margin-bottom: ${({ mb }) => mb && mb};

  @media (min-width: 768px) {
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 32px;
  }
  @media (min-width: 968px) {
    width: 320px;
    height: 320px;
    border-radius: 32px;
  }
  @media (min-width: 968px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1200px) {
    width: 320px;
    height: 320px;
  }
`;

const ArrowContainer = styled(Flex)<{ arrowType: string }>`
  background: rgb(79, 218, 247);
  height: 28px;
  width: 28px;
  border-radius: 32px;
  position: relative;
  // margin-top: -124px;
  // margin-left: ${({ arrowType }) => arrowType === 'right' ? '-40px' : '40px'};
  
  @media (min-width: 768px) {
    height: 180px;
    width: 40px;
    margin-left: unset;
    margin-top: -80px;
    border-radius: 16px;
  }
  @media (min-width: 968px) {
    height: 300px;
    width: 64px;
    margin-top: -140px;
  }
  @media (min-width: 1200px) {
    height: 320px;
    margin-top: -150px;
  }
`;

const ArrowWrapper = styled.div<{ arrowType: string, margin: string }>`
  // margin: ${({ arrowType }) => arrowType === 'left' ? '0 -20px 0 0px' : '0 -6px 0 0'};
  margin-top: -124px;
  margin-left: ${({ arrowType }) => arrowType === 'right' && '-40px'};
  margin-right: ${({ arrowType }) => arrowType === 'left' && '-100px'};
  right: ${({ arrowType }) => arrowType === 'right' && '8px'};

  @media (min-width: 768px) {
    margin: ${({ arrowType }) => arrowType === 'left' ? '0 0 0 -24px' : '0 -4px 0 0'};
    right: ${({ arrowType }) => arrowType === 'right' && '-25px'};
  }
  @media (min-width: 968px) {
    margin: ${({ arrowType }) => arrowType === 'left' ? '0 0 0 -60px' : '0 -16px 0 0'};
  }
  &::before {
    display: none;
  }
`;

const ArrowImg = styled.img<{ arrowType: string }>`
  width: 12px;
  position: absolute;
  top: 50%;
  left: ${({ arrowType }) => arrowType === 'left' ? '48%' : '52%'};
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 20px;
    left: 50%;
  }
  @media (min-width: 968px) {
    width: 32px;
  }
`;

export default MintingPhaseModal
