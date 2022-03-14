import React from 'react'
import styled from 'styled-components'
import { Card, Text } from 'penguinfinance-uikit2'

const lists = [
  { id: 1, image: '1.png', description: 'Earn IPEFI, PEFI rewards.' },
  { id: 2, image: '2.png', description: 'Click and collect from a range of 10,000 cute collectibles.' },
  { id: 3, image: '3.png', description: 'Integrated DeFi functionality.' },
  { id: 4, image: '4.png', description: 'Share and collect between other members of the AVAX community.' },
]

const HowToWork = () => {
  return (
    <StyledCard>
      <ListContainer>
        {lists.map((list) => (
          <ListCard key={list.id}>
            <ListImage
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/how-to-work/${list.id}.png`}
              alt="list image"
            />
            <ListDescription>{list.description}</ListDescription>
          </ListCard>
        ))}
      </ListContainer>
      <ArrowIconWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/welcome/arrow-left.svg`}
          width="30px"
          height="30px"
          alt='howtowork_arrow'
        />
      </ArrowIconWrapper>
      <SpinIconWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/how-to-work/spin.svg`}
          width="50px"
          height="50px"
          alt='howtowork_spin'
        />
      </SpinIconWrapper>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  position: relative;
  overflow: visible;
  display: flex;
  box-shadow: none;
  justify-content: center;
  border-radius: 20px;
  padding: 12px;
  width: 100%;
  background: white;

  @media (min-width: 968px) {
    border-radius: 193.5px;
    padding: 14px 47px 24px;
  }
`

const ArrowIconWrapper = styled.div`
  position: absolute;
  display: none;

  img {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 968px) {
    top: -2%;
    left: 2%;
    display: block;
  }
  @media (min-width: 1200px) {
    top: -2%;
    left: 2%;
  }
`;

const SpinIconWrapper = styled.div`
  position: absolute;
  display: none;

  img {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 968px) {
    bottom: -5%;
    right: 0;
    display: block;
  }
  @media (min-width: 1200px) {
    bottom: -5%;
    right: 0;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    padding: 24px 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 48px;
    padding-right: 48px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ListCard = styled.div``

const ListImage = styled.img`
  width: 100%;
  z-index: -1;
`

const ListDescription = styled(Text)`
  margin: auto;
  margin-top: 0px;
  text-align: center;
  font-family: 'Gotham';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #050021;
  opacity: 0.8;

  @media (min-width: 768px) {
    margin-top: 26px;
    font-size: 18px;
  }
`

export default HowToWork
