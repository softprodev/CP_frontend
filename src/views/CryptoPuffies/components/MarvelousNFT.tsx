import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'penguinfinance-uikit2'

const MarvelousNFT = () => {
  return (
    <StyledCard>
      <LoveTextImg src={`${process.env.PUBLIC_URL}/images/cryptopuffies/marvelous/love_text.png`} alt="love text" />
      {/* <LoveTextImg src={`${process.env.PUBLIC_URL}/images/cryptopuffies/marvelous/love_text.png`} alt="love text" /> */}
      <CrossIconWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/marvelous/cross.svg`}
          width="30px"
          height="30px"
          alt='marvelous_cross'
        />
      </CrossIconWrapper>
      <BuyButtonContainer>
        <Button size="sm" mr="8px">
          <span>Buy Now</span>
          <img
            src={`${process.env.PUBLIC_URL}/images/cryptopuffies/marvelous/double_right_arrow.svg`}
            width="48px"
            height="48px"
            alt='marvelous_double'
          />
        </Button>
      </BuyButtonContainer>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  border-radius: 0px;
  min-height: 320px;
  z-index: 0;
  background: rgba(157, 126, 255, 0.63);

  @media (min-width: 640px) {
    min-height: 380px;
  }
  @media (min-width: 768px) {
    min-height: 380px;
  }
  @media (min-width: 1200px) {
    min-height: 380px;
  }
  @media (min-width: 1400px) {
    min-height: 524px;
  }
`

const LoveTextImg = styled.img`
  position: absolute;
  margin-top: -60px;
  width: calc(100% - 32px);
  
  @media (min-width: 768px) {
    margin-top 0;
    width: 500px;
  }
  @media (min-width: 1200px) {
    width: auto;
  }
`

const CrossIconWrapper = styled.div`
  position: absolute;
  left: 5%;
  top: 70%;

  img {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 768px) {
    right: 9%;
    top: 25%;
    left: unset;

    img {
      width: 30px;
      height: 30px;
    }
  }
  @media (min-width: 1200px) {
    top: 25%;
    left: 90%;
  }
`

const BuyButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10%;
  border-radius: 117px;
  background: #ffffff;
  padding: 4px;

  @media (min-width: 968px) {
    left: 5%;
    bottom: 5%;
    transform: unset;
  }
  span {
    margin-right: 12px;

    @media (min-width: 768px) {
      margin-right: 12px;
    }
    @media (min-width: 1200px) {
      margin-right: 12px;
    }
    @media (min-width: 1400px) {  
      margin-right: 20px;
    }
  }
  button {
    background: #9D7EFF;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    margin: 0px;
    font-family: Aldrich;
    font-size: 18px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;

    @media (min-width: 768px) {
      height: 56px;
      font-size: 24px;
      line-height: 23px;
    }
    @media (min-width: 1200px) {
      height: 56px;
    }
    @media (min-width: 1400px) { 
      font-size: 30px;  
      line-height: 29px; 
      padding: 12px 30px;
      height: 72px;
    }
  }

  @media (min-width: 768px) {
    padding: 8px;
    bottom: 5%;
  }
  @media (min-width: 968px) {
    padding: 8px;
    bottom: 25%;
  }
  @media (min-width: 1200px) {
    padding: 8px;
    bottom: 25%;
  }
  @media (min-width: 1400px) {  
    padding: 11px 21px;
    bottom: 25%;
  }

  img {
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
    @media (min-width: 1200px) {
      width: 32px;
      height: 32px;
    }
    @media (min-width: 1400px) {  
      width: 48px;
      height: 48px;
    }
  }
`

export default MarvelousNFT
