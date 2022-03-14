import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from 'penguinfinance-uikit2'

const lists = [
  { id: 1, image: '1.png', description: 'Earn passive income with PEFI & iPEFI rewards.', background: '#8DE6FF' },
  { id: 2, image: '2.png', description: 'Collect different puffies and battle against others.', background: '#FFDF69' },
  { id: 3, image: '3.png', description: 'Integrated DeFi functionality.', background: '#D0C0FF' },
  { id: 4, image: '4.png', description: 'Trade with other members of the AVAX community.', background: '#8AE083' },
]

const Welcome = () => {
  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <Flex>
          <WelcomePuffyImgWrapper>
            <WelcomePuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/welcome/welcome_puffy.png`}
              alt="welcome puffy"
            />
          </WelcomePuffyImgWrapper>
          <CardContainer flexDirection="column">
            <HeaderText>
              <FirstSentence>{`Welcome to the `}</FirstSentence>
              <SecondSentence>Family</SecondSentence>
            </HeaderText>
            <DescriptionText>
              Your CryptoPuffy doubles as your Puff Fam membership, and grants access to members-only benefits. Future areas and perks will be unleashed based on our current roadmap activation.
            </DescriptionText>
          </CardContainer>
        </Flex>
        <ListContainer>
          {lists.map((list) => (
            <ListCard key={list.id} background={list.background}>
              <ListImage
                src={`${process.env.PUBLIC_URL}/images/cryptopuffies/how-to-work/${list.id}.png`}
                alt="list image"
              />
              <ListDescription>{list.description}</ListDescription>
            </ListCard>
          ))}
        </ListContainer>
      </StyledCard>
    </Section>
  )
}

const Section = styled.div`
  position: relative;
  padding: 40px 16px;

  @media (min-width: 768px) {
    
  }
  @media (min-width: 968px) {
    padding: 120px 16px;
  }
  @media (min-width: 1200px) {
    padding: 200px 16px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_3.png');
  background-size: contain;
`;

const StyledCard = styled(Card)`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: none;
  border-radius: 0px;
  z-index: 0;
  background: white;
  // background: rgba(157, 126, 255, 0.63);
  // border-radius: 30px;
  border-radius: 20px;
  padding: 8px 12px 16px;
  // width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    border-radius: 117px;
    padding: 14px 47px 24px;
  }
`

const CardContainer = styled(Flex)`
  width: 100%;
  // background: #ffffff;
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
  flex-wrap: wrap;
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
  @media (min-width: 1400px) {
    font-size: 52px;
  }
`
const SecondSentence = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;
  background: #FF7988;
  // background: linear-gradient(to right, #9d7eff 0%, #ffc5e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
  @media (min-width: 1400px) {
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
  color: #050021;

  // @media (min-width: 768px) {
  //   padding: 0px 48px;
  // }
  // @media (min-width: 968px) {
  //   padding: 0px 120px;
  // }
  // @media (min-width: 1200px) {
  //   padding: 0px 120px;
  // }
  @media (min-width: 1400px) {
    // padding: 0px 204px;
    font-size: 24px;
  }
`

const WelcomePuffyImgWrapper = styled(Flex)`
  position: absolute;
  left: -48px;
  top: -100px;
  @media (min-width: 768px) {
    left: -140px;
    top: -230px;
  }
  @media (min-width: 968px) {
    left: -120px;
    top: -220px;
  }
  @media (min-width: 1200px) {
    position: unset;
    margin-top: -160px;
    margin-bottom: -120px;
  }
  @media (min-width: 1400px) {
    position: unset;
    margin-top: -160px;
    margin-bottom: -120px;
  }

  // position: absolute;
  // top: -140px;
  // left: -72px;
  // @media (min-width: 768px) {
  //   left: -200px;
  //   top: -140px;
  // }
  // @media (min-width: 968px) {
  //   left: -160px;
  //   top: -80px;
  // }
  // @media (min-width: 1200px) {
  //   left: -200px;
  //   top: -100px;
  // }
  // @media (min-width: 1400px) {
  //   left: -150px;
  //   top: -100px;
  // }
`
const WelcomePuffyImg = styled.img`
  z-index: 1;
  width: 160px;
  max-width: auto;

  @media (min-width: 768px) {
    width: 396px;
  }
  @media (min-width: 1200px) {
    width: 429px;
    max-width: 429px;
    object-fit: contain;
  }
  @media (min-width: 1400px) {
    width: 600px;
    max-width: 600px;
  }
`

const ListContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 24px;
    grid-template-columns: repeat(2, 1fr);
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

const ListCard = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  border-radius: 16px;

  @media (min-width: 768px) {
    border-radius: 32px;
  }
  @media (min-width: 1200px) {
    border-radius: 72px;
  }
  @media (min-width: 1400px) {
    border-radius: 80px;
  }
`

const ListImage = styled.img`
  width: 100%;
  z-index: -1;
`

const ListDescription = styled(Text)`
  margin: auto;
  margin-top: 0px;
  text-align: center;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #050021;
  opacity: 0.8;
  padding: 0 8px 16px;
  line-height: 20px;

  @media (min-width: 768px) {
    // margin-top: 26px;
    font-size: 18px;
    line-height: 20px;
    padding: 0 16px 20px;
  }
`

export default Welcome
