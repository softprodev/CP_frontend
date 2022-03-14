import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Flex } from 'penguinfinance-uikit2'
import ReactTooltip from 'react-tooltip'
import { useCryptoPuffies } from 'state/hooks'
import { useWeb3React } from '@web3-react/core'
// import useAuth from 'hooks/useAuth'

const TopBanner = ({ setMusicVolume, IsAutoPlay }) => {
  const history = useHistory();
  const { account } = useWeb3React();
  // const goldenTickets = useUserGoldenTickets(account);
  // const { login, logout } = useAuth()
  // const { onPresentConnectModal } = useWalletModal(login, logout)

  const { mintStartTimeStamp, earlyMintingWindow } = useCryptoPuffies(account);
  const startDate = mintStartTimeStamp * 1000;
  const currentDate = new Date().getTime();
  const isPresale = currentDate >= (startDate - earlyMintingWindow * 1000) && currentDate < startDate;

  const handleMintPuffy = () => {
    handleMusicVolume();
    history.push('/mint');
  };

  // const getGoldenTicketTooltip = () => {
  //   return `<div><p>Please connect your wallet view your Golden Ticket balance.</p></div>`
  // }

  const handleMusicVolume = () => {
    if (!IsAutoPlay) {
      // console.log('currentVolume : ', '0.01');
      setMusicVolume(0.01);
    }
  }

  return (
    <Section>
      <StyledCard>
        <Flex justifyContent='center' alignItems='center'>
          <BluePuffyImgWrapper>
            <BluePuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/buy-section/blue_puffy.png`}
              alt="blue puffy"
            />
          </BluePuffyImgWrapper>
          <ButtonContainer onClick={handleMintPuffy}>
            <BuyButton
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/buy-section/buy_button.svg`}
              alt="buy button" />
            <PriceText>
              {isPresale ?
                <>
                  <span>WHITELIST</span>
                  <div>LIVE</div>
                </>
                : <div>MINT NOW</div>
              }
            </PriceText>
            {/* <PriceButton>0.02</PriceButton> */}
          </ButtonContainer>
          {account ?
            <></>
            // <GoldenTicketButtonContainer onClick={handleMintPuffy}>
            //   <GoldenTicketButton
            //     src={`${process.env.PUBLIC_URL}/images/cryptopuffies/buy-section/golden_ticket_button.png`}
            //     alt="buy button" />
            //   <GoldenTicketText connected>×{goldenTickets}</GoldenTicketText>
            //   {/* <PriceButton>0.02</PriceButton> */}
            // </GoldenTicketButtonContainer>
            :
            <>
              {/* <GoldenTicketButtonContainer 
                data-for='golden-ticket-button'
                data-tip={getGoldenTicketTooltip()}
                onClick={onPresentConnectModal}>
                <GoldenTicketButton
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/buy-section/golden_ticket_button.png`}
                  alt="buy button" />
                <GoldenTicketText>?</GoldenTicketText>
              </GoldenTicketButtonContainer> */}
              <CustomAprToolTip
                id='golden-ticket-button'
                wrapper="div"
                delayHide={0}
                effect="solid"
                // index={index}
                multiline
                place="top"
                html
              />
            </>
          }
          <YellowPuffyImgWrapper>
            <YellowPuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/buy-section/yellow_puffy.png`}
              alt="yellow puffy"
            />
          </YellowPuffyImgWrapper>
        </Flex>
      </StyledCard>
    </Section>
  )
}

const CustomAprToolTip = styled(ReactTooltip)`
  font-family: 'Rowdies';
  font-weight; bold;
  z-index: 4;
  width: 100% !important;
  max-width: 310px !important;
  // background: ${({ theme }) => (theme.isDark ? '#ffffff!important' : '#322C59!important')};
  background: #fff !important;
  box-shadow: ${(props) => `${props.theme.card.boxShadow}!important`};
  // color: ${({ theme }) => (theme.isDark ? '#322C59!important' : '#ffffff!important')};
  color: #322C59!important;
  opacity: 1 !important;
  padding: 0px 8px !important;
  font-size: 16px !important;
  border: 2px solid #fff !important;
  border-radius: 16px !important;
  margin-top: 0px !important;
  > div {
    width: 100%;
    white-space: pre-wrap !important;
    padding: 8px 4px;
  }
  p {
    font-family: 'Rowdies';
    // font-weight; bold;
    text-align: center;
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (min-width: 968px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  &:before {
    border-top-color: #ffffff !important;
    border-bottom-color: #ffffff !important;
  }
  &:after {
    border-top-color: #ffffff!important;
    border-bottom-color: #ffffff!important;
  }
`

// const BuyNow = styled.div`
//   font-family: 'Rowdies';
//   font-size: 72px;
//   line-height: 89px;
//   color: white;
// `;

const Section = styled.div`
  position: relative;
  // padding-bottom: 16px;
  background: #FFE574;
`;

// const ArrowDownImg = styled.img`
//   width: 120px;
//   margin-top: 18px;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: #4FDBFA;
//   background-image: url('/images/cryptopuffies/background.png');
// `;

const ButtonContainer = styled.div`
  position: relative;
  border-radius: 62px;
  cursor: pointer;
  // width: 160px;
  margin: 20px 8px 20px 0;
  cursor: pointer;

  @media (min-width: 768px) {
    // width: 300px;
    margin: 32px 16px 32px 0;
  }
  @media (min-width: 1200px) {
    height: 140px;
    min-width: 420px;
    margin: 40px 8px;
  }

  img {
    height: 60px;
    min-width: 145px;
    @media (min-width: 768px) {
      height: 100px;
      min-width: 240px;
    }
    @media (min-width: 968px) {
      height: 120px;
      min-width: 350px;
    }
    @media (min-width: 1200px) {
      height: 140px;
      min-width: 420px;
    }
  }
`;

// const GoldenTicketButtonContainer = styled.div`
//   position: relative;
//   border-radius: 62px;
//   cursor: pointer;
//   // width: 160px;
//   margin: 20px 0 20px 8px;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     margin: 32px 0 32px 16px;
//   }
//   @media (min-width: 1200px) {
//     height: 140px;
//     min-width: 270px;
//     margin: 40px 8px;
//   }

//   img {
//     height: 60px;
//     min-width: 120px;
//     @media (min-width: 768px) {
//       height: 100px;
//       min-width: 200px;
//     }
//     @media (min-width: 968px) {
//       height: 120px;
//       min-width: 230px;
//     }
//     @media (min-width: 1200px) {
//       height: 140px;
//       min-width: 270px;
//     }
//   }
// `;

// const GoldenTicketButton = styled.img``;

const BuyButton = styled.img``;

const PriceText = styled.div`
  font-family: 'Rowdies';
  font-weight; bold;
  color: black;
  position: absolute;
  left: 42%;
  top: 50%;
  transform: translate(0, -50%);

  div {
    font-family: 'Rowdies';
    font-weight; bold;
    color: black;
    font-size: 18px;
    line-height: 20px;
    @media (min-width: 768px) {
      font-size: 29px;
      line-height: 30px;
    }
    @media (min-width: 968px) {
      font-size: 42px;
      line-height: 44px;
    }
    @media (min-width: 1200px) {
      font-size: 50px;
      line-height: 50px;
    }
    @media (min-width: 1400px) {
      font-size: 56px;
      line-height: 50px;
    }
  }

  span {
    font-family: 'Rowdies';
    font-weight; bold;
    color: black;
    font-size: 12px;
    line-height: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (min-width: 968px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 22px;
      line-height: 24px;
    }
    @media (min-width: 1400px) {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 40px;
    }
  }
`;

// const GoldenTicketText = styled(PriceText) <{ connected?: boolean }>`
//   left: ${({ connected }) => connected ? '51%' : '58%'};
//   font-size: ${({ connected }) => connected ? '24px' : '30px'};
//   line-height: 32px;

//   @media (min-width: 768px) {
//     font-size: ${({ connected }) => connected ? '36px' : '42px'};
//     line-height: 48px;
//   }
//   @media (min-width: 768px) {
//     font-size: ${({ connected }) => connected ? '40px' : '46px'};
//     line-height: 50px;
//   }
//   @media (min-width: 968px) {
//     font-size: ${({ connected }) => connected ? '48px' : '54px'};
//     line-height: 64px;
//   }
//   @media (min-width: 1200px) {
//     font-size: ${({ connected }) => connected ? '50px' : '56px'};
//     line-height: 80px;
//   }
// `

// const PriceButton = styled(Button)`
//   border-radius: 57px;
//   background: #FFDB40;
//   color: black;
//   width: 100%;
//   height: 100%;
//   font-family: 'Rowdies';
//   font-weight: bold;
//   font-size: 36px;
//   line-height: 48px;

//   &:hover:not(:disabled):not(.penguin-button--disabled):not(.penguin-button--disabled):not(:active) {
//     opacity: 1;
//   }

//   @media (min-width: 768px) {
//     font-size: 48px;
//     line-height: 72px;
//   }
//   @media (min-width: 1200px) {
//     font-size: 96px;
//     line-height: 119px;
//   }
// `;

const StyledCard = styled(Card)`
  border-radius: 0px;
  padding: 0;
  background: white;
  position: relative;
  overflow: unset;
  background: transparent;
  box-shadow: none;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1200px) {
    padding: 0;
    // padding-top: 40px;
  }
`


const BluePuffyImgWrapper = styled(Flex)``

const BluePuffyImg = styled.img`
  // z-index: 1;
  max-width: 115px;
  width: 115px;
  margin-top: -120px;
  margin-right: -40px;

  @media (min-width: 440px) {
    margin-top: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) {
    max-width: 235px;
    width:235px;
    margin-top: -40px;
    margin-bottom: -40px;
  }
  @media (min-width: 968px) {
    width: 280px;
    max-width: 280px;
    margin-top: -40px;
    margin-bottom: -40px;
  }
  @media (min-width: 1200px) {
    width: 360px;
    height: 360px;
    max-height: 360px;
    max-width: 360px;
    margin-top: -180px;
  }
`

const YellowPuffyImgWrapper = styled(Flex)`
`

const YellowPuffyImg = styled.img`
  // z-index: 1;
  max-width: 120px;
  width: 120px;
  margin-top: -120px;
  margin-left: -40px;

  @media (min-width: 440px) {
    margin-top: 0;
    margin-left: 0;
  }

  @media (min-width: 768px) {
    width: 240px;
    max-width: 240px;
    margin-top: -40px;
    margin-bottom: -40px;
  }
  @media (min-width: 968px) {
    width: 288px;
    max-width: 288px;
    margin-top: -40px;
    margin-bottom: -40px;
  }
  @media (min-width: 1200px) {
    width: 375px;
    max-width: 375px;
    margin-top: -180px;
  }
`

export default TopBanner
