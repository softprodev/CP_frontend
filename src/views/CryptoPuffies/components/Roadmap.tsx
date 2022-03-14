import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { Card, Flex, Text } from 'penguinfinance-uikit2'
import useWindowSize from 'hooks/useWindowSize'

interface RoadmapStepProps {
  step: number
  title: string
  description: string
  position: string
  color: string
  mainIcon?: string
  wrapperIcon?: string
  mobileIcon?: string
  mobileWrapperIcon?: string
  wrapperIconSize?: number,
  iconSize?: number,
  iconLeft?: string,
  wrapperIconLeft?: string,
  iconRight?: string,
  wrapperIconRight?: string
}

const roadmapSteps = [
  {
    step: 1,
    title: 'Puffies are Born!',
    description:
      `At long last! No more "WEN MINT?" You'll have your chance to mint a CryptoPuffy straight from the website. The mint will be happening in two phases; Presale and Public Sale.   Whitelisted wallets will get early access to mint at a slightly reduced price and with less competition!`,
    position: 'left',
    color: '#8AE083',
    mainIcon: 'step1_main_icon.svg',
    wrapperIcon: 'step1_wrapper_icon.svg',
    mobileIcon: 'step1_main_icon_mobile.svg',
    mobileWrapperIcon: 'step1_wrapper_icon_mobile.svg',
    iconSize: 20,
    wrapperIconSize: 40,
    iconLeft: '-36%',
    wrapperIconLeft: '-44%'
  },
  {
    step: 2,
    title: 'DeFi + GameFi',
    description:
      `Stake your Puffies within the Penguin Ecosystem for passive income and additional perks. Earn passive PEFI and iPEFI rewards by leaving them in an Igloo, use them as Penguin Emperor skins, and receive bonus allocations on the Penguin Launchpad.`,
    position: 'right',
    color: '#feb17e',
    mainIcon: 'step2_main_icon.svg',
    wrapperIcon: 'step2_wrapper_icon.svg',
    mobileIcon: 'step2_main_icon_mobile.svg',
    mobileWrapperIcon: 'step2_wrapper_icon_mobile.svg',
    iconSize: 20,
    wrapperIconSize: 40,
    iconLeft: '65%',
    wrapperIconLeft: '65%'
  },
  {
    step: 3,
    title: '        Community Activities',
    description:
      `It’s not just your JPEG, it’s your new family! During Phase 3, a member-exclusive CryptoPuffy merch store will be unveiled, featuring limited edition hoodies, tees, hats, and other goodies. Additionally, we’ll host game nights, AMAs, and special Discord gatherings to build up the community.`,
    position: 'left',
    color: '#FFC5E3',
    mainIcon: 'step3_main_icon.svg',
    wrapperIcon: 'step3_wrapper_icon.svg',
    mobileIcon: 'step3_main_icon_mobile.svg',
    mobileWrapperIcon: 'step3_wrapper_icon_mobile.svg',
    iconSize: 20,
    wrapperIconSize: 40,
    iconLeft: '-36%',
    wrapperIconLeft: '-44%'
  },
  {
    step: 4,
    title: 'Penguin Arena',
    description:
      `CryptoPuffies will have full-fledged gaming utility inside of the Penguin Arena play-to-earn game. Use your Puffy to battle against other players in a 1v1 PvP arena. Every Puffy has unique stats that will play a crucial role in their performance, with each NFT having its own strengths & weaknesses. `,
    position: 'right',
    color: '#D1ABEF',
    mainIcon: 'step4_main_icon.svg',
    wrapperIcon: 'step4_wrapper_icon.svg',
    mobileIcon: 'step4_main_icon_mobile.svg',
    mobileWrapperIcon: 'step4_wrapper_icon_mobile.svg',
    iconSize: 20,
    wrapperIconSize: 40,
    iconLeft: '65%',
    wrapperIconLeft: '65%'
  },
]

const RoadmapStep = ({ data }: { data: RoadmapStepProps }) => {
  return (
    <RoadmapStepWrapper alignItems='center' justifyContent={data.position === 'left' ? 'flex-start' : 'flex-end'} mb='60px'>
      {data.step % 2 === 1 ? (
        <>
          <StepCard borderColor={data.color} step={data.step}>
            <StepCardInner borderColor={data.color} step={data.step}>
              <StepTitle color={data.color}>{data.title}</StepTitle>
              <StepDescription>{data.description}</StepDescription>
            </StepCardInner>
          </StepCard>
          <StepGraph stepPosition={data.position}>
            <Dot color={data.color} stepPosition={data.position} />
            <Line color={data.color} />
            <IconContainer stepPosition={data.position} step={data.step} left={data.iconLeft}>
              <img
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.mainIcon}`}
                width={`${data.iconSize}px`}
                height={`${data.iconSize}px`}
                alt={data.mainIcon}
              />
            </IconContainer>
            <IconWrapperContainer stepPosition={data.position} step={data.step} left={data.wrapperIconLeft}>
              <img
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.wrapperIcon}`}
                width={`${data.wrapperIconSize}px`}
                height={`${data.wrapperIconSize}px`}
                alt={data.wrapperIcon}
              />
            </IconWrapperContainer>
            <StepPercent color={data.color} step={data.step}>{`P${data.step}`}</StepPercent>
          </StepGraph>
        </>
      ) : (
        <>
          <StepGraph stepPosition={data.position}>
            <StepPercent color={data.color} step={data.step}>{`P${data.step}`}</StepPercent>
            <IconContainer stepPosition={data.position} step={data.step} left={data.iconLeft}>
              <img
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.mainIcon}`}
                width={`${data.iconSize}px`}
                height={`${data.iconSize}px`}
                alt={data.mainIcon}
              />
            </IconContainer>
            <IconWrapperContainer stepPosition={data.position} step={data.step} left={data.wrapperIconLeft}>
              <img
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.wrapperIcon}`}
                width={`${data.wrapperIconSize}px`}
                height={`${data.wrapperIconSize}px`}
                alt={data.wrapperIcon}
              />
            </IconWrapperContainer>
            <Line color={data.color} />
            <Dot color={data.color} stepPosition={data.position} />
          </StepGraph>
          <StepCard borderColor={data.color} step={data.step}>
            <StepCardInner borderColor={data.color} step={data.step}>
              <StepTitle color={data.color}>{data.title}</StepTitle>
              <StepDescription>{data.description}</StepDescription>
            </StepCardInner>
          </StepCard>
        </>
      )}
    </RoadmapStepWrapper>
  )
}

const MobileRoadmapStep = ({ data }: { data: RoadmapStepProps }) => {
  return (
    <div>
      <CardWrapper>
        <StepPercent color={data.color} step={data.step}>{`P${data.step}`}</StepPercent>
        <StepDivider color={data.color} />
        <StepGraph stepPosition={data.position}>
          <IconContainer stepPosition={data.position}>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.mobileIcon}`}
              width='20px'
              height='20px'
              alt={data.mobileIcon}
            />
          </IconContainer>
          <IconWrapperContainer stepPosition={data.position}>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/${data.mobileWrapperIcon}`}
              width='40px'
              height='40px'
              alt={data.mobileWrapperIcon}
            />
          </IconWrapperContainer>
          <Line color={data.color} />
          <Dot color={data.color} stepPosition={data.position} />
        </StepGraph>
        <StepCard borderColor={data.color} step={data.step}>
          <StepTitle color={data.color}>{data.title}</StepTitle>
          <StepDescription>{data.description}</StepDescription>
        </StepCard>
      </CardWrapper>
    </div>
  )
}

const Roadmap = () => {
  const windowSize = useWindowSize();

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: (
      <NextArrow>
        <img src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/arrow-left.svg`} width='20px' height='20px' alt='roadmap-left' />
      </NextArrow>
    )
  };

  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <RoadmapHeader>
          <CardContainer flexDirection="column">
            <HeaderText>
              <FirstSentence>{`Our `}</FirstSentence>
              <SecondSentence>{`Roadmap `}</SecondSentence>
            </HeaderText>
            <DescriptionText>
              The CryptoPuffies team works hard on bringing to life the cutest NFT collection yet. The further we go, the better we’re gonna be.
            </DescriptionText>
          </CardContainer>
          <RoadmapPuffyImgWrapper>
            <RoadmapPuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/puffy1.png`}
              alt="roadmap puffy"
            />
          </RoadmapPuffyImgWrapper>
        </RoadmapHeader>
        <RoadmapContent>
          {windowSize.width < 768 ? 
            <SliderContainer flexDirection='column' mt='40px'>
              <Slider {...settings}>
                {roadmapSteps.map(row => {
                  return (
                    <MobileRoadmapStep key={row.step} data={row} />
                  )
                })}
              </Slider>
            </SliderContainer>
          : 
            <>
              {roadmapSteps.map((row) => {
                return <RoadmapStep key={row.step} data={row} />
              })}
            </>
          }
          {windowSize.width >= 768 && 
            <RoadmapContentDivider />
          }
          <LeftPuffyImgWrapper>
            <RoadmapPuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/puffy3.png`}
              alt="roadmap puffy"
            />
          </LeftPuffyImgWrapper>
          <RightPuffyImgWrapper>
            <RoadmapPuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/roadmap/puffy2.png`}
              alt="roadmap puffy"
            />
          </RightPuffyImgWrapper>
        </RoadmapContent>
      </StyledCard>
    </Section>
  )
}

const Section = styled.div`
  position: relative;
  padding: 40px 16px;

  @media (min-width: 968px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @media (min-width: 1200px) {
    padding-top: 160px;
    padding-bottom: 80px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_4.png');
  background-size: contain;
`;

const StyledCard = styled(Card)`
  background: transparent;
  box-shadow: none;
  position: relative;
  overflow: visible;
  border-radius: 0px;
  z-index: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`

const CardWrapper = styled.div`
  position: relative;
`;

const NextArrow = styled.div`
  // div {
  //   position: absolute;
  // }
  position: absolute;
  top: 16px;
`;

const SliderContainer = styled(Flex)`
  .slick-arrow {
    position: absolute;
    left: 20px;
    top: 16px;
  }
`;

// roadmap header
const RoadmapHeader = styled(Card)`
  position: relative;
  overflow: visible;
  display: flex;
  justify-content: center;
  box-shadow: none;
  border-radius: 0px;
  z-index: 0;
  background: white;
  // background: rgba(157, 126, 255, 0.63);
  border-radius: 20px;
  padding: 8px 12px 16px;
  width: 100%;

  @media (min-width: 768px) {
    // border-radius: 117px;
    border-radius: 30px;
    padding: 14px 47px 24px;
  }
`

const CardContainer = styled(Flex)`
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  padding: 16px 20px;

  @media (min-width: 768px) {
    border-radius: 117px;
    padding: 24px;
  }
`
const HeaderText = styled(Flex)`
  font-size: 52px;
  line-height: 72px;
  white-space: break-spaces;
  justify-content: center;
`
const FirstSentence = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;
  color: #050021;

  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 968px) {
    font-size: 42px;
    line-height: 72px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`
const SecondSentence = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;
  color: #feb17e;
  // background: linear-gradient(to right, #9d7eff 0%, #ffc5e3 100%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 968px) {
    font-size: 42px;
    line-height: 72px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`

const DescriptionText = styled(Flex)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  margin-top: 8px;
  text-align: center;
  margin-top: 8px;
  padding: 0px;
  color: #050021;
  opacity: 0.8;

  @media (min-width: 768px) {
    padding: 0px 120px;
  }
  @media (min-width: 1200px) {
    padding: 0px 160px;
  }
  @media (min-width: 1400px) {
    padding: 0px 224px;
  }
`

const RoadmapPuffyImgWrapper = styled(Flex)`
  position: absolute;
  right: -84px;
  top: -100px;

  @media (min-width: 576px) {
    right: -60px;
    top: -100px;
  }
  @media (min-width: 768px) {
    right: -160px;
    top: -100px;
  }
  @media (min-width: 1200px) {
    right: -140px;
    top: -140px;
  }
  @media (min-width: 1400px) {
    right: -180px;
    top: -180px;
  }
`

const LeftPuffyImgWrapper = styled(Flex)`
  position: absolute;
  left: -15%;
  top: 25%;
  display: none;

  @media (min-width: 768px) {
    left: -15%;
    top: 25%;
    display: block;
  }
  @media (min-width: 1200px) {
    left: -15%;
    top: 27%;
  }
  @media (min-width: 1400px) {
    left: -15%;
    top: 18%;
  }
`

const RightPuffyImgWrapper = styled(Flex)`
  position: absolute;
  right: -15%;
  top: 50%;
  display: none;

  @media (min-width: 768px) {
    right: -15%;
    top: 50%;
    display: block;
  }
  @media (min-width: 1200px) {
    right: -15%;
    top: 55%;
  }
  @media (min-width: 1400px) {
    right: -15%;
    top: 45%;
  }
`

const RoadmapPuffyImg = styled.img`
  z-index: 1;
  width: 200px;
  max-width: auto;

  @media (min-width: 768px) {
    width: 410px;
  }
  @media (min-width: 1200px) {
    width: 450px;
  }
  @media (min-width: 1400px) {
    width: 554px;
  }
`

// roadmap content
const RoadmapContent = styled.div`
  margin-top: 40px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 80px;
  }
`

// roadmap content divider
const RoadmapContentDivider = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  height: 100%;
  // width: 2px;
  // background: radial-gradient(53.32% 53.32% at 50% 50%, #d1e3ff 0%, #d1e3ff 0.01%, rgba(209, 227, 255, 0) 100%);

  width: 32px;
  background: white;
  border-radius: 16px;
  transform: translate(-50%, 0);
  z-index: -1;
  margin-top: -100px;
`

const StepDivider = styled.div<{ color: string }>`
  position: absolute;
  top: 90px;
  height: 2px;
  width: 100%;
  background: radial-gradient(53.32% 53.32% at 50% 50%, ${({ color }) => color} 0%, ${({ color }) => color} 0.01%, rgba(209, 227, 255, 0) 100%);
  z-index: 1;
`;

const RoadmapStepWrapper = styled(Flex)`
`
const StepCard = styled.div<{ borderColor: string; step: number }>`
  padding: 24px;
  // max-width: 50%;
  border-radius: 30px;
  background: white;
  // margin-top: 100px;
  border-radius: 0 0 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: calc(50% - 86px);
    margin-top: 0;
    border-radius: 30px;
    align-items: flex-start;
    padding: 12px;
    margin-bottom: ${({ step }) => step !== 4 && '-40px'};
  }
`

const StepCardInner = styled.div<{ borderColor: string; step: number }>`
  padding: 20px;
  // max-width: 50%;
  border-radius: 22px;
  background: white;
  border: ${({ borderColor }) => `11px solid ${borderColor}`};

  @media (min-width: 768px) {
    padding: 38px;
  }
`;

const StepTitle = styled.div<{ color: string }>`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  color: ${({ color }) => color};
  opacity: 0.8;
  text-align: center;
`
const StepDescription = styled.div`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #050021;
  margin-top: 16px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const StepGraph = styled(Flex)<{ stepPosition?: string }>`
  position: relative;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 120px;
  background: white;
  border-radius: 20px 20px 0 0;

  @media (min-width: 768px) {
    padding: ${({ stepPosition }) => stepPosition === 'left' ? '0 32px 0 0' : '0 0 0 32px'};
    margin: ${({ stepPosition }) => stepPosition === 'left' ? '0 0 0 -12px' : '0 -12px 0 0'};
    border-radius: ${({ stepPosition }) => stepPosition && (stepPosition === 'left' ? '0 30px 30px 0' : '30px 0 0 30px')};
  }
`
const Dot = styled(Flex)<{ color: string; stepPosition: string }>`
  position: absolute;
  height: 16px;
  width: 16px;
  background: ${({ color }) => color};
  border-radius: 50%;
  margin: ${({ stepPosition }) => (stepPosition === 'left' ? '-5px' : '-5px')};
  right: ${({ stepPosition }) => stepPosition === 'right' && '0px'};
  left: ${({ stepPosition }) => stepPosition === 'left' && '0px'};

  position: absolute;
  left: 50%;
  top: 100px;
  display: none;

  @media (min-width: 768px) {
    position: initial;
    display: block;
    left: unset;
    top: unset;
  }
`

const Line = styled(Flex)<{ color: string }>`
  width: 1px;
  height: 30px;
  background: ${({ color }) => color};
  position: absolute;
  left: 50%;
  top: 70px;
  display: none;

  @media (min-width: 768px) {
    position: initial;
    left: unset;
    display: block;
    top: unset;
    height: 8px;
    width: 78px;
  }
`

const IconContainer = styled.div<{ stepPosition?: string, step?: number, left?: string, right?: string }>`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 90px;

  @media (min-width: 768px) {
    top: unset;
    left: unset;
    transform: unset;
    right: ${({ stepPosition }) => stepPosition === 'left' && '0px'};
    left: ${({ stepPosition }) => stepPosition === 'right' && '0px'};
    left: ${({ left }) => left };
    right: ${({ right }) => right };
    transform: ${({ stepPosition }) => stepPosition === 'left' && 'translateX(50%);'};
    transform: ${({ stepPosition }) => stepPosition === 'right' && 'translateX(-50%);'};
  }
`

const IconWrapperContainer = styled.div<{ stepPosition?: string, step?: number, left?: string, right?: string }>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 90px;
  z-index: 1;

  @media (min-width: 768px) {
    top: unset;
    left: unset;
    transform: unset;
    right: ${({ stepPosition }) => stepPosition === 'left' && '0px'};
    left: ${({ stepPosition }) => stepPosition === 'right' && '0px'};
    left: ${({ left }) => left };
    right: ${({ right }) => right };
    transform: ${({ stepPosition }) => stepPosition === 'left' && 'translateX(50%);'};
    transform: ${({ stepPosition }) => stepPosition === 'right' && 'translateX(-50%);'};
  }
`

const StepPercent = styled(Flex)<{ color: string; step: number }>`
  align-items: center;
  // justify-content: ${({ step }) => step % 2 === 0 && 'end'};
  // padding-left: ${({ step }) => step % 2 === 1 && '63px'};
  // padding-right: ${({ step }) => step % 2 === 0 && '63px'};
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 24px;
  color: ${({ color }) => color};
  // width: 164px;
  // min-width: 50%;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  margin-top: 24px;

  @media (min-width: 768px) {
    position: unset;
    left: unset;
    transform: unset;
    z-index: 0;
    margin-top: 0;
    width: 164px;
    
    justify-content: ${({ step }) => step % 2 === 0 && 'end'};
    padding-left: ${({ step }) => step % 2 === 1 && '63px'};
    padding-right: ${({ step }) => step % 2 === 0 && '63px'};
    min-width: 50%;
  }
`

export default Roadmap
