import React from 'react'
import styled from 'styled-components'
import { Card, Flex } from 'penguinfinance-uikit2'
// import CountDown from 'components/CountDown';

const TopBanner = () => {
  // const startDate = 1644948000000;
  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <BannerImage src={`${process.env.PUBLIC_URL}/images/cryptopuffies/puffies_banner.png`} alt="v2 farm banner" />
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
          <CountDownContainer>
            {/* <CountDown date={startDate} /> */}
            <span>Let&apos;s Puffin Go!</span>
            {/* <span><br />WHITELIST SALE 2/15 9AM UTC<br />PUBLIC SALE STARTS IN <CountDown date={startDate} /><br /></span> */}
          </CountDownContainer>
          {/* <BuyNow>
            Buy Now
          </BuyNow> */}
          <ArrowDownImg src={`${process.env.PUBLIC_URL}/images/cryptopuffies/arrow-down.svg`} alt='arrow-down' />
        </Flex>
        {/* <RedPuffyImage src={`${process.env.PUBLIC_URL}/images/cryptopuffies/red_puffy.png`} alt="red puffy" /> */}
      </StyledCard>
    </Section>
  )
}

// const BuyNow = styled.div`
//   font-family: 'Rowdies';
//   font-size: 36px;
//   line-height: 44px;
//   color: white;

//   @media (min-width: 768px) {
//     font-size: 44px;
//     line-height: 54px;
//   }
//   @media (min-width: 968px) {
//     font-size: 56px;
//     line-height: 64px;
//   }
//   @media (min-width: 1200px) {
//     font-size: 72px;
//     line-height: 89px;
//   }
// `;

const CountDownContainer = styled.div`
  // width: 320px;
  // @media (min-width: 768px) {
  //   width: 394px;
  // }
  // @media (min-width: 968px) {
  //   width: 480px;
  // }
  // @media (min-width: 1200px) {
  //   width: 616px;
  // }
  // span {
  //   font-family: 'Rowdies';
  //   font-size: 36px;
  //   line-height: 44px;
  //   color: white;

  //   @media (min-width: 768px) {
  //     font-size: 44px;
  //     line-height: 54px;
  //   }
  //   @media (min-width: 968px) {
  //     font-size: 56px;
  //     line-height: 64px;
  //   }
  //   @media (min-width: 1200px) {
  //     font-size: 72px;
  //     line-height: 89px;
  //   }
  // }
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  span {
    font-family: 'Rowdies';
    font-size: 12px;
    line-height: 14px;
    color: white;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
    @media (min-width: 968px) {
      font-size: 26px;
      line-height: 34px;
    }
    @media (min-width: 1200px) {
      font-size: 42px;
      line-height: 59px;
    }
  }
`;

const Section = styled.div`
  position: relative;
  padding-bottom: 16px;
`;

const ArrowDownImg = styled.img`
  width: 60px;
  margin-top: 12px;

  @media (min-width: 768px) {
    width: 60px;
    margin-top: 12px;
  }
  @media (min-width: 968px) {
    width: 80px;
    margin-top: 16px;
  }
  @media (min-width: 1200px) {
    width: 120px;
    margin-top: 18px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_1.png');
  background-size: contain;
`;

const StyledCard = styled(Card)`
  border-radius: 0px;
  padding: 0 16px;
  background: white;
  position: relative;
  overflow: unset;
  background: transparent;
  box-shadow: none;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 56px;
  
  @media (min-width: 768px) {
    padding: 0 40px;
    padding-top: 87px;
  }
  @media (min-width: 1200px) {
    padding: 0;
    padding-top: 105px;
  }
`

const BannerImage = styled.img`
  width: 100%;
  z-index: -1;
`

// const RedPuffyImage = styled.img`
//   position: absolute;
//   width: 20%;
//   right: 3%;
//   bottom: -15%;

//   @media (min-width: 768px) {
//     width: 18%;
//     right: 5%;
//     bottom: -14%;
//   }

//   @media (min-width: 968px) {
//     width: 18%;
//     right: 4%;
//     bottom: -14%;
//   }

//   @media (min-width: 1200px) {
//     width: 20%;
//     right: 0%;
//     bottom: -15%;
//   }
// `;

export default TopBanner
