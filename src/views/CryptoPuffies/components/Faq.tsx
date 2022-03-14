import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Card } from 'penguinfinance-uikit2'

interface FaqCardProps {
  id: number
  question: string
  answer: string
  secondanswer: string
}

const faqs = [
  {
    id: 1,
    question: 'What is an NFT?',
    answer: `An NFT (Non-fungible token) is a piece of digital art that is verifiable on the blockchain. CryptoPuffies take this a step further by adding utility to NFTs!`,
    secondanswer: ``
  },
  {
    id: 2,
    question: 'Wen mint ser?',
    answer: `CryptoPuffies will be minting on February 15th. The whitelist sale will open at 6AM UTC. The public sale starts at 9PM UTC.`,
    secondanswer: ``
  },
  {
    id: 3,
    question: 'How do I get whitelisted for the Puffy Pre-Sale?',
    answer: `Users that participated in the Penguin Launchpad Kassandra DAO IDO or held 500+ iPEFI during the snapshot will receive special tickets for the whitelist.`,
    secondanswer: `Additionally, you can get whitelist spots by participating in Twitter and Discord giveaways. There is no limit to the amount of golden tickets you can have in one wallet.`,

  },
  {
    id: 4,
    question: 'What is the minting price?',
    answer: `2 AVAX`,
    secondanswer: ``
  },
  {
    id: 5,
    question: 'How many CryptoPuffies will I be able to mint?',
    answer: `Members will be able to mint 10 Puffies per transaction and 200 Puffies per wallet!`,
    secondanswer: ``
  },
  {
    id: 6,
    question: 'Where can I trade my CryptoPuffies?',
    answer: `You'll be able to trade them on NFTrade, Kalao, and Yetiswap NFT Marketplace!`,
    secondanswer: ``
  },
  {
    id: 7,
    question: 'What are the royalties for CryptoPuffies?',
    answer: `Each CryptoPuffy will have a royalty of 5%, which will be sent to iPEFI token holders. This means that every time a Puffy is exchanged, 3% of that sale goes towards the Nest and 2% goes towards the Team.`,
    secondanswer: ``
  },
  {
    id: 8,
    question: 'Are Crypto Puffies a good investment?',
    answer: `CryptoPuffies are pushing the envelope on what NFTs can be. This is not financial advice, but there is a lot to come and we're excited to share the journey with you!`,
    secondanswer: ``
  },
]

const FaqCard = ({ data }: { data: FaqCardProps }) => {
  const [isExpanded, setExpanded] = useState(false)

  const onToggle = () => {
    setExpanded(!isExpanded)
  }

  return (
    <FaqCardContainer onClick={onToggle}>
      <FaqOrigin>
        <FaqQuestion>{data.question}</FaqQuestion>
        <img
          src={`${process.env.PUBLIC_URL}/images/cryptopuffies/faq/${isExpanded ? 'minus_icon.svg' : 'plus_icon.svg'}`}
          width="24px"
          height="24px"
          alt='faq_icon'
        />
      </FaqOrigin>
      {isExpanded && (
        <FaqExpanded>
          <FaqAnswer>{data.answer}</FaqAnswer>
          {data.secondanswer && (
            <FaqExpanded>
              <FaqAnswer>{data.secondanswer}</FaqAnswer>
            </FaqExpanded>
          )}
        </FaqExpanded>
      )}
    </FaqCardContainer>
  )
}

const Faq = () => {
  return (
    <Section>
      {/* <BackgroundImage /> */}
      <StyledCard>
        <FaqContainer>
          <FaqHeader>
            <FaqHeaderCard>
              <FaqHeaderTitle>
                <FirstSentence>{`Puffies `}</FirstSentence>
                <SecondSentence>{`FAQs `}</SecondSentence>
              </FaqHeaderTitle>
              <FaqHeaderDescription>
                If you cannot find answer to your question below, make sure to <a href='https://discord.gg/EUFSzWHUyb' target='_blank' rel="noreferrer">join our Discord</a> and ask a Puffy Mod!
              </FaqHeaderDescription>
            </FaqHeaderCard>
            <FaqPuffyImgWrapper>
              <FaqPuffyImg src={`${process.env.PUBLIC_URL}/images/cryptopuffies/faq/faq_puffy.png`} alt="faq puffy" />
            </FaqPuffyImgWrapper>
          </FaqHeader>
          <FaqContent>
            {faqs.map((faq) => (
              <FaqCard key={faq.id} data={faq} />
            ))}
          </FaqContent>
        </FaqContainer>
      </StyledCard>
    </Section>
  )
}

const Section = styled.div`
  position: relative;
  padding: 40px 16px;
  background-image: url('/images/cryptopuffies/bg_2.png');
  background-size: contain;

  @media (min-width: 968px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @media (min-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: #FFE574;
//   background-image: url('/images/cryptopuffies/bg_4.png');
//   background-size: contain;
// `;

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

const FaqContainer = styled(Flex)`
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// header
const FaqHeader = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 24px;
  }
`

const FaqHeaderCard = styled(Flex)`
  background: white;
  border-radius: 20px;
  padding: 24px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 968px) {
    border-radius: 31px;
    padding: 32px 48px 40px;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    border-radius: 31px;
    padding: 40px 72px 48px;
  }
`;

const FaqHeaderTitle = styled(Flex)`
  white-space: break-spaces;
  flex-wrap: wrap;
`
const FirstSentence = styled.span`
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
    line-height: 50px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
    line-height: 60px;
  }
  @media (min-width: 1400px) {
    font-size: 52px;
    line-height: 72px;
  }
`

const SecondSentence = styled.span`
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
    line-height: 50px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
    line-height: 60px;
  }
  @media (min-width: 1400px) {
    font-size: 52px;
    line-height: 72px;
  }
`
const FaqHeaderDescription = styled.div`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  margin-top: 8px;
  text-align: center;
  color: black;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 968px) {
    text-align: left;
  }

  a {
    color: #01CBF3;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
  }
`

// sub list
const FaqContent = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 50px;
  }
`

const FaqCardContainer = styled.div`
  padding: 14px 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(166, 129, 255, 0.08);
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`
const FaqOrigin = styled(Flex)`
  justify-content: space-between;
`
const FaqExpanded = styled.div`
  transition: height 1.5s ease;
`

const FaqQuestion = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #050021;
`
const FaqAnswer = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #050021;
  opacity: 0.8;
  margin-top: 16px;
  margin-left: 16px;
  max-width: 465px;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`

// faq puffy
const FaqPuffyImgWrapper = styled(Flex)`
  margin-top: 20px;
  
  @media (min-width: 1400px) {
    margin-left: 0px;
    margin-top: -20px;
  }
`

const FaqPuffyImg = styled.img`
  z-index: 1;
  width: auto;
  // max-width: 344px;

  @media (min-width: 768px) {
    max-width: 376px;
  }
  @media (min-width: 1200px) {
    max-width: 376px;
  }
  @media (min-width: 1400px) {
    max-width: 627px;
  }
`

export default Faq
