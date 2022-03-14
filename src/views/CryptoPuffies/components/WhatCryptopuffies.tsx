import React from 'react'
import styled from 'styled-components'
import { Card, Text } from 'penguinfinance-uikit2'

const WhatCryptopuffies = () => {
  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <LeftPanel>
          <DescriptionContainer>
            <HeaderText>
              <FirstSentence>What are</FirstSentence>
              <SecondSentence>Cryptopuffies?</SecondSentence>
            </HeaderText>
            <DescriptionText>
              <p>
                {`CryptoPuffies is a collection of 8888 randomly generated cute monster avatars living on the Avalanche network. Each Puffy is completely unique with its own colors, clothing, and stats. `}
              </p>
              <p>
                The CryptoPuffies collection goes beyond intangible value, as each one comes with utility within the Avalanche ecosystem. No passive PEFI & iPEFI rewards, instead AVAX rewards.
              </p>
            </DescriptionText>
          </DescriptionContainer>
          {/* <SpinIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/what-are-cryptopuffies/spin.svg`}
              width="30px"
              height="30px"
              alt='cryptopuffies_spin'
            />
          </SpinIconWrapper>
          <WaveIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/what-are-cryptopuffies/wave.svg`}
              width="74px"
              height="70px"
              alt='cryptopuffies_wave'
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/what-are-cryptopuffies/wave2.svg`}
              width="74px"
              height="70px"
              alt='cryptopuffies_wave2'
            />
          </WaveIconWrapper> */}
        </LeftPanel>
        <RightPanel>
          <CryptoPuffiesGroupImg
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/what-are-cryptopuffies/cryptopuffies_group.png`}
            alt="love text"
          />
        </RightPanel>
      </StyledCard>
    </Section>
  )
}

const Section = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_2.png');
  background-size: contain;
`;

const DescriptionContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 968px) {
    padding: 36px 32x;
    border-radius: 36px;
  }
  @media (min-width: 1200px) {
    padding: 72px 64px;
    border-radius: 36px;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  background: transparent;
  justify-content: space-between;
  box-shadow: none;
  position: relative;
  overflow: visible;
  border-radius: 0px;
  z-index: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  // padding: 32px 16px;

  @media (min-width: 968px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    // padding: 0 16px;
  }
`

// const SpinIconWrapper = styled.div`
//   position: absolute;
//   display: none;

//   @media (min-width: 968px) {
//     left: 35%;
//     top: 0%;
//     display: block;

//     img {
//       width: 50px;
//       height: 60px;
//     }
//   }
//   @media (min-width: 1200px) {
//     top: 0%;
//     left: 20%;
//   }
// `;

// const WaveIconWrapper = styled.div`
//   position: absolute;
//   right: -15%;
//   bottom: 45%;
//   img {
//     width: 74px;
//     height: 70px;
//   }
//   img {
//     &:last-child {
//       margin-bottom: -20px;
//       margin-left: -40px;
//     }
//   }

//   @media (min-width: 768px) {
//     right: -5%;
//     bottom: -20%;
//   }
//   @media (min-width: 968px) {
//     right: -5%;
//     bottom: -20%;
//   }
//   @media (min-width: 1200px) {
//     left: -12%;
//     bottom: 0%;
//     top: unset;
//   }
// `;

const LeftPanel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  // padding-right: 40px;
  padding: 32px 16px;

  @media (min-width: 968px) {
    width: 50%;
    padding-right: 60px;
  }
`
const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    flex-direction: column;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`

const FirstSentence = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;
  color: #050021;
  white-space: nowrap;
  margin-right: 8px;

  @media (min-width: 968px) {
    font-size: 52px;
    line-height: 64px;
  }
`
const SecondSentence = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;

  color: #BE9BDB;
  // background: linear-gradient(to right, #9d7eff 0%, #ffc5e3 100%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  @media (min-width: 968px) {
    font-size: 52px;
    line-height: 64px;
  }
`

const DescriptionText = styled.div`
  p {
    margin-top: 24px;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    // padding-right: 36px;
    color: #050021;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 968px) {
      padding-right: 36px;
    }
  }
`

const RightPanel = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 16px 16px;

  @media (min-width: 570px) {
    padding: unset;
    padding: 0 16px 16px;
    // margin-top: 20px;
  }
  @media (min-width: 968px) {
    padding: 0;
    width: 50%;
    margin-top: 0;
    padding-left: 16px;
  }
`

const CryptoPuffiesGroupImg = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-height: 500px;
    width: 120%;
  }
  @media (min-width: 968px) {
    max-height: unset;
  }
`

export default WhatCryptopuffies
