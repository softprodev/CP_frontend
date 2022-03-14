import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Card, Button } from 'penguinfinance-uikit2'
import useWindowSize from 'hooks/useWindowSize';

interface ClubPhysiqueContentCardProps {
  id: number
  description: string
}

const clubphysiqueContents = [
  {
    id: 1,
    description: `The inner circle in our discord is where legendary physiques are made & excessive weight is gained (via your wallet) ~ Our community has professional workouts, diet plans, challenges and daily engagement with our athlete team. This is also where you’ll be able to participate in the future of the brand! Our management team will host bi-weekly business updates and you’ll be able to vote on future flavors & business decisions. You’ll also be invited to exclusive meet up training sessions with our athlete team & be whitelisted to future flavor drops!`,
  },
  {
    id: 2,
    description: `But that’s just the beginning... Family that grows together tends to prosper together & that’s what this is all about! `,
  },
  {
    id: 3,
    description: `Premier Protein has a market cap of near 1 Billion Dollars. Imagine if you bought stock when the company was worth 1M? That is a 10,000% return on your money!!! That means if you would’ve invested $2000 at a 1M valuation, you’d be sitting on 2 MILLION DOLLARS WORTH OF STOCK! `,
  },
]


const ClubPhysiqueContentCard = ({ data }: { data: ClubPhysiqueContentCardProps }) => {

  return (
    <TextCardContainer>
      <ContentContainer>
        <ContentDescriptioinContainer>
          <ContentText>{data.description}</ContentText>
        </ContentDescriptioinContainer>
      </ContentContainer>
    </TextCardContainer>
  )
}

const ClubPhysiqueSection = () => {
  const windowSize = useWindowSize();
  return (

    <section className="club" id="club">
      <div className="c-grid">
        <div className="club__title-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
          <h2 className="club__title c-title">
            <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
            <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
            <span>club physique</span></h2>
        </div>
        <div className="club__wrapper">
          <div className="club__wrapper-left">
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">The inner circle in our discord is where legendary physiques are made & excessive weight is gained (via your wallet) ~ Our community has professional workouts, diet plans, challenges and daily engagement with our athlete team. This is also where you’ll be able to participate in the future of the brand! Our management team will host bi-weekly business updates and you’ll be able to vote on future flavors & business decisions. You’ll also be invited to exclusive meet up training sessions with our athlete team & be whitelisted to future flavor drops!</p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">But that’s just the beginning... Family that grows together tends to prosper together & that’s what this is all about!</p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">Premier Protein has a market cap of near 1 Billion Dollars. Imagine if you bought stock when the company was worth 1M? That is a 10,000% return on your money!!! That means if you would’ve invested $2000 at a 1M valuation, you’d be sitting on 2 MILLION DOLLARS WORTH OF STOCK!</p>
          </div>
          <div className="club__wrapper-right">
            <img className="wow animate__animated animate__fadeInUp" src="img/img-club.png" srcSet="img/img-club@2x.png 2x" alt="" data-wow-duration="1.25s" />
          </div>
        </div>
      </div>
    </section>


    // <Section>
    //   <BackgroundImage />
    //   <StyledCard>
    //     <ClubPhysiqueContainer>
    //       <ClubPhysiqueHeader>
    //         <HeaderTopImgWrapper>
    //           <HeaderTopImg src={`${process.env.PUBLIC_URL}/images/stripe.png`} alt="header top stripe" />
    //         </HeaderTopImgWrapper>
    //         <HeaderTitleContainer>
    //           <HeaderTitle>CLUB PHYSIQUE</HeaderTitle>
    //         </HeaderTitleContainer>
    //         <HeaderBottomImgWrapper>
    //           <HeaderBottomImg src={`${process.env.PUBLIC_URL}/images/stripe.png`} alt="header Bottom stripe" />
    //         </HeaderBottomImgWrapper>
    //         <ClubPhysiqueContentContainer>
    //           <ClubPhysiqueContentInnerContainer>
    //             <ClubPhysiqueContent>
    //               {clubphysiqueContents.map((clubphysiqueContent) => (
    //                 <ClubPhysiqueContentCard key={clubphysiqueContent.id} data={clubphysiqueContent} />
    //               ))}
    //             </ClubPhysiqueContent>
    //             <ClunPhysiqueShopImgWrapper>
    //               <ClunPhysiqueShopImg src={`${process.env.PUBLIC_URL}/images/theclub.png`} alt="The Club" />
    //             </ClunPhysiqueShopImgWrapper>
    //           </ClubPhysiqueContentInnerContainer>
    //         </ClubPhysiqueContentContainer>
    //       </ClubPhysiqueHeader>
    //     </ClubPhysiqueContainer>

    //   </StyledCard>
    //   {windowSize.width < 1200 ?
    //     <ClunPhysiqueBottomImgWrapper>
    //       <ClunPhysiqueBottomImg src={`${process.env.PUBLIC_URL}/images/theclubbottommobile.png`} alt="The Club" />
    //     </ClunPhysiqueBottomImgWrapper>
    //     :
    //     <ClunPhysiqueBottomImgWrapper>
    //       <ClunPhysiqueBottomImg src={`${process.env.PUBLIC_URL}/images/theclubbottom.png`} alt="The Club" />
    //     </ClunPhysiqueBottomImgWrapper>
    //   }

    // </Section>
  )
}

const ClubPhysiqueContainer = styled(Flex)`
    display: contents;
`;

const ClubPhysiqueContentContainer = styled.div`
  margin-top: 80px;

//   text-align: -webkit-center;
`;
const ClubPhysiqueContentInnerContainer = styled.div`
  margin-top: 80px;
  display: block;
//   text-align: -webkit-center;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 968px) {
    display: block;
  }
  @media (min-width: 1200px) {
    display: block;
  }
  @media (min-width: 1400px) {
    display: flex;
  }
`;
const CallActionButtonContainer = styled.div`
  margin-top: 80px;
  text-align: -webkit-center;
`;

// header
const ClubPhysiqueHeader = styled.div`
  width: 100%;
`

const HeaderTopImgWrapper = styled(Flex)`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 50%;
`
const HeaderBottomImgWrapper = styled(Flex)`
  margin-top: 5px;
  margin-bottom: 130px;
  width: 50%;
  margin-left: auto; 
  margin-right: 0;
`
const ClunPhysiqueShopImgWrapper = styled(Flex)`
  // margin-top: 5px;
  // margin-bottom: 130px;
  // width: 50%;
  margin-left: 30px; 
  margin-right: 30px;
  display: contents;
`
const ClunPhysiqueBottomImgWrapper = styled(Flex)`
  margin-left: auto; 
  margin-right: auto;
  width: 100%;
`

const HeaderTopImg = styled.img`
  z-index: 1;
  width: 100%;
  height: 20px;
`
const HeaderBottomImg = styled.img`
  z-index: 1;
  width: 100%;
  height: 20px;
`
const ClunPhysiqueShopImg = styled.img`
  z-index: 1;
  width: 70%;
  height: 70%;
  margin-left : auto;
  margin-right : auto;
  display: block;
`
const ClunPhysiqueBottomImg = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-left : auto;
  margin-right : auto;
  display: block;
`

const HeaderTitleContainer = styled(Flex)`
  white-space: break-spaces;
  flex-wrap: wrap;
`

const HeaderTitle = styled.span`
  font-family: 'CheddarGothicSansItalic';
  font-style: normal;
  font-size: 46px;
  line-height: 46px;
  color: white;
  display: table;
  margin: 0 auto;
  letter-spacing: 27px;

  @media (min-width: 768px) {
    font-size: 46px;
    line-height: 46px;
  }
  @media (min-width: 968px) {
    font-size: 70px;
    line-height: 70px;
  }
  @media (min-width: 1200px) {
    font-size: 100px;
    line-height: 100px;
  }
  @media (min-width: 1400px) {
    font-size: 152px;
    line-height: 152px;
  }
`

const ContentContainer = styled(Flex)`
  display: -webkit-inline-box;

`
const ContentDescriptioinContainer = styled(Flex)`
  white-space: break-spaces;
  flex-wrap: wrap;
  display: block;
`
const ContentImgContainer = styled.div`
  white-space: break-spaces;
  flex-wrap: wrap;
  display: block;
`


const ContentFirstSentence = styled.span`
  font-family: 'PoppinsBold';
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  color: #ff511c;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 968px) {
    font-size: 23px;
    line-height: 38px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
    line-height: 47px;
  }
  @media (min-width: 1400px) {
    font-size: 35px;
    line-height: 50px;
  }
`

const ContentText = styled.span`
  font-family: 'PoppinsRegular';
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 968px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (min-width: 1400px) {
    font-size: 22px;
    line-height: 40px;
  }
`


const CheckmarkRed = styled.img`
  z-index: 1;
  width: auto;
  margin-right: 30px;
  margin-top: 1px;
  @media (min-width: 768px) {
    margin-top: 1px;

  }
  @media (min-width: 968px) {
    margin-top: 1px;

  }
  @media (min-width: 1200px) {
    margin-top: 6px;

  }
  @media (min-width: 1400px) {
    margin-top: 10px;

  }
`

const ClubPhysiqueContent = styled.div`
  width: 100%;

`

const TextCardContainer = styled.div`
  padding: 5px 5px;
  width: 100%;
  // background: #ffffff;
  // box-shadow: 4px 4px 15px rgba(166, 129, 255, 0.08);
  // border-radius: 8px;
  margin-bottom: 5px;
  // cursor: pointer;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`

const Section = styled.div`
  position: relative;
  padding: 40px 16px;
  background: transparent;

  @media (min-width: 968px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @media (min-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('/images/theclubbg.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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




export default ClubPhysiqueSection
