import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text, Button } from 'penguinfinance-uikit2'

const CommunityTools = () => {
  const handleMoveToDiscord = () => {
    window.open('https://discord.gg/EUFSzWHUyb', '_blank');
  };

  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <CommunityToolsHeader>
          <CardContainer flexDirection="column">
            <HeaderText>
              <FirstSentence>{`Community `}</FirstSentence>
              <SecondSentence>{`Tools `}</SecondSentence>
            </HeaderText>
            <DescriptionText>
              Here are some helpful tools for the CryptoPuffy community. Please note that the rarity tracker will be unofficial. Every assignment of an Puffy’s overall value or rarity is inherently subjective.
            </DescriptionText>
            <Actions flexWrap='wrap'>
              <StyledButton type="primary" onClick={handleMoveToDiscord}>DISCORD</StyledButton>
              <StyledButton type="secondary">RARITY SOON</StyledButton>
            </Actions>
          </CardContainer>
          <CommunityToolsPuffyImgWrapper>
            <CommunityToolsPuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/community/community_puffy.png`}
              alt="community puffy"
            />
          </CommunityToolsPuffyImgWrapper>
          {/* <WaveIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/community/wave.svg`}
              width="74px"
              height="70px"
              alt='community_wave'
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/community/wave2.svg`}
              width="74px"
              height="70px"
              alt='community_wave2'
            />
          </WaveIconWrapper> */}
        </CommunityToolsHeader>
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
    padding-top: 200px;
    padding-bottom: 180px;
  }
  // @media (min-width: 1400px) {
  //   padding-top: 200px;
  //   padding-bottom: 180px;
  // }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_5.png');
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

// CommunityTools header
const CommunityToolsHeader = styled(Card)`
  position: relative;
  overflow: visible;
  display: flex;
  // justify-content: center;
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
    padding: 14px 47px 24px;
    border-radius: 30px;
  }
`

// const WaveIconWrapper = styled.div`
//   position: absolute;
//   display: none;
//   img {
//     width: 74px;
//     height: 70px;
//   }
//   img {
//     &:last-child {
//       margin-bottom: -20px;
//       margin-left: -56px;
//     }
//   }

//   @media (min-width: 768px) {
//     display: block;
//     right: -5%;
//     top: -20%;
//   }
//   @media (min-width: 968px) {
//     right: -2%;
//     top: -55%;
//   }
//   @media (min-width: 1200px) {
//     left: -5%;
//     bottom: -5%;
//     top: unset;
//   }
//   @media (min-width: 1400px) {
//     left: -12%;
//     bottom: 0%;
//     top: unset;
//   }
// `;

const CardContainer = styled(Flex)`
  width: 100%;
  // background: #ffffff;
  border-radius: 20px;
  padding: 16px 20px;

  @media (min-width: 768px) {
    border-radius: 117px;
    padding: 24px;
  }
  @media (min-width: 1200px) {
    width: 70%;
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
  color: #01CBF3;
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
    // padding: 0px 160px;
  }
  @media (min-width: 1200px) {
    // padding: 0px 160px;
  }
  @media (min-width: 1400px) {
    // padding: 0px 224px;
  }
`

const Actions = styled(Flex)`
  justify-content: center;
  margin-top: 24px;
`
const StyledButton = styled(Button)<{ type: string }>`
  background: ${({ type }) => type === 'primary' && '#EB5757'};
  background: ${({ type }) => type === 'secondary' && '#01CBF3'};
  color: ${({ type }) => type === 'primary' && '#ffffff'};
  color: ${({ type }) => type === 'secondary' && '#ffffff'};
  // border: 1px solid ${({ type }) => type === 'primary' ? '#7eb2ff' : '#9d7eff'};
  box-sizing: border-box;
  border-radius: 32px;
  display: flex;
  align-items: center;
  margin: 0px 15px;
  padding: 15px 40px;
  font-family: 'Gotham-bold';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 17px;
  box-shadow: none;
  width: 220px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: unset;
    margin-bottom: 0;
  }
`

const CommunityToolsPuffyImgWrapper = styled(Flex)`
  position: absolute;
  right: -32px;
  top: -80px;

  @media (min-width: 768px) {
    right: -100px;
    top: -120px;
  }
  @media (min-width: 1200px) {
    right: -160px;
    top: -40px;
  }
  @media (min-width: 1400px) {
    right: -180px;
    top: -50px;
  }
`
const CommunityToolsPuffyImg = styled.img`
  z-index: 1;
  width: auto;
  max-width: 165px;

  @media (min-width: 768px) {  
    max-width: 240px;
  }
  @media (min-width: 968px) {  
    max-width: 360px;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
  }
  @media (min-width: 1400px) {
    max-width: 600px;
  }
`

export default CommunityTools
