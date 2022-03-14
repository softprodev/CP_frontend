import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Button, Card } from 'penguinfinance-uikit2'
import useWindowSize from 'hooks/useWindowSize'

const collections = [
  { id: 1, name: 'Puffy 239', price: '59.48', image: 'collection1.png', bgColor: '#FFDF65' },
  { id: 2, name: 'Puffy 48', price: '94.38', image: 'collection2.png', bgColor: '#FA4D4B' },
  { id: 3, name: 'Puffy 329', price: '43.38', image: 'collection3.png', bgColor: '#89D560' },
  { id: 4, name: 'Puffy 3821', price: '25.39', image: 'collection4.png', bgColor: '#FFA15C' },
  { id: 5, name: 'Puffy 259', price: '283.8', image: 'collection5.png', bgColor: '#FDB1D5' },
  { id: 6, name: 'Puffy 385', price: '23.48', image: 'collection6.png', bgColor: '#89D560' },
]

const MyPuffies = () => {
  const windowSize = useWindowSize();

  const colCount = windowSize.width >= 768 ? 4 : 2;

  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <ExploreCollectionHeader>
          <TitleSection>
            <ExploreCollectionHeaderTitle>
              <FirstSentence>{`My `}</FirstSentence>
              <SecondSentence>{`Puffies `}</SecondSentence>
            </ExploreCollectionHeaderTitle>
            <ExploreCollectionHeaderDescription>
              View all of your Puffies in one place. Read about their stats, traits, and more!
            </ExploreCollectionHeaderDescription>
          </TitleSection>

          <ExplorePuffyImgWrapper>
            <ExplorePuffyImg
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/explore/explore_puffy.png`}
              alt="explore puffy"
            />
          </ExplorePuffyImgWrapper>
          {/* <CrossIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/explore/cross.svg`}
              width="30px"
              height="30px"
              alt='collection_corss'
            />
          </CrossIconWrapper>
          <WaveIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/explore/wave.svg`}
              width="74px"
              height="70px"
              alt='collection_wave'
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/explore/wave2.svg`}
              width="74px"
              height="70px"
              alt='collection_wave2'
            />
          </WaveIconWrapper> */}
        </ExploreCollectionHeader>
        <CollectionListContainer>
          {(windowSize.width > 1400 ? collections : collections.filter((collection, index) => index < colCount)).map((collection) => (
            <CollectionCard key={collection.id}>
              <CollectionImageWrapper color={collection.bgColor}>
                <CollectionImage
                  src={`${process.env.PUBLIC_URL}/images/cryptopuffies/collection/${collection.image}`}
                  alt="collection image"
                />
                {/* <VoteIconWrapper>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/cryptopuffies/collection/heart.png`}
                    width="40px"
                    height="40px"
                    alt='collection_heart'
                  />
                </VoteIconWrapper> */}
              </CollectionImageWrapper>
              <CollectionInfo>
                <CollectionName>{collection.name}</CollectionName>
              </CollectionInfo>
            </CollectionCard>
          ))}
        </CollectionListContainer>
        <Actions>
          <BrowseButton>
            View Puffies
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/collection/grip_group_icon.svg`}
              width="48px"
              height="48px"
              alt='collection_grip'
            />
          </BrowseButton>
          {/* <RectIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/explore/rect.svg`}
              width="60px"
              height="60px"
              alt='collection_rect'
            />
          </RectIconWrapper> */}
        </Actions>
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
  background-image: url('/images/cryptopuffies/bg_1.png');
  background-size: contain;
`;

const StyledCard = styled(Card)`
  background: transparent;
  box-shadow: none;
  position: relative;
  overflow: visible;
  border-radius: 0px;
  z-index: 0;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`

const TitleSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 968px) {
    padding: 24px 24px 48px;
    border-radius: 36px;
  }
`;

// const CrossIconWrapper = styled.div`
//   position: absolute;
//   right: -2%;
//   top: 30%;

//   img {
//     width: 20px;
//     height: 20px;
//   }
//   @media (min-width: 768px) {
//     bottom: 5%;
//     left: -2%;
//     right: unset;
//     top: unset;

//     img {
//       width: 30px;
//       height: 30px;
//     }
//   }
//   @media (min-width: 1400px) {
//     bottom: 5%;
//     left: -2%;
//   }
// `;

// const RectIconWrapper = styled.div`
//   position: absolute;
//   bottom: -80%;
//   right: -10%;

//   img {
//     width: 48px;
//     height: 48px;
//   }
//   @media (min-width: 768px) {
//     bottom: -80%;
//     right: -2%;

//     img {
//       width: 60px;
//       height: 60px;
//     }
//   }
//   @media (min-width: 1400px) {
//     bottom: -300%;
//     right: -2%;
//   }
// `;

// const WaveIconWrapper = styled.div`
//   position: absolute;
//   left: -12%;
//   top: -5%;
//   img {
//     width: 44px;
//     height: 40px;
//   }
//   img {
//     &:last-child {
//       margin-bottom: -20px;
//       margin-left: -60px;
//     }
//   }

//   @media (min-width: 768px) {
//     display: block;
//     right: -2%;
//     top: -5%;
//     left: unset;

//     img {
//       width: 74px;
//       height: 70px;
//     }

//     div {
//       &:last-child {
//         margin-top: -56px;
//         margin-left: 24px;
//       }
//     }
//   }
//   @media (min-width: 968px) {
//     right: -2%;
//     top: -55%;
//   }
//   @media (min-width: 1200px) {
//     right: -2%;
//     bottom: unset;
//     top: 0%;
//     left: unset;
//   }
//   @media (min-width: 1400px) {
//     right: -12%;
//     bottom: 0%;
//     top: unset;
//     left: unset;
//   }
// `;

// header
const ExploreCollectionHeader = styled.div`
  margin: auto;
  text-align: center;
  position: relative;
  min-height: 320px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
    min-height: 468px;
    margin-bottom: 0;
  }
`
const ExploreCollectionHeaderTitle = styled(Flex)`
  white-space: break-spaces;
  flex-wrap: wrap;
  justify-content: center;
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
    line-height: 72px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`
const SecondSentence = styled.span`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 42px;
  color: #4FDBFA;
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
const ExploreCollectionHeaderDescription = styled.div`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  max-width: 410px;
  margin: auto;
  margin-top: 8px;
  color: black;
`

// statistics info
// const StatisticInfo = styled(Flex)`
//   justify-content: center;
//   margin-top: 16px;
//   z-index: 2;
// `
// const StatisticsCard = styled.div`
//   padding: 8px 12px;
//   background: #ffffff;
//   box-shadow: 4px 4px 15px rgba(166, 129, 255, 0.08);
//   border-radius: 8px;
//   margin: 0px 8px;
//   z-index: 2;

//   @media (min-width: 768px) {
//     padding: 16px 24px 14px;
//   }
//   @media (min-width: 1200px) {
//     padding: 16px 24px 14px;
//   }
//   @media (min-width: 1400px) {
//     padding: 16px 32px 14px;
//     margin: 0 16px;
//   }
// `
// const Value = styled(Text)`
//   font-family: 'Rowdies';
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 24px;
//   color: #050021;
//   margin-left: 7px;

//   @media (min-width: 768px) {
//     font-size: 24px;
//   }
// `
// const Field = styled(Text)`
//   font-family: 'Rowdies';
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 27px;
//   color: #050021;

//   @media (min-width: 768px) {
//     font-size: 18px;
//   }
// `

// list
const CollectionListContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 24px 0 0;
  padding-right: 50px;
  padding-left: 50px;

  @media (min-width: 576px) {
    padding: 24px 0 0;
  }
  @media (min-width: 768px) {
    grid-gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    padding: 24px 0;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
  }
`
// background image
const ExplorePuffyImgWrapper = styled(Flex)`
  position: unset;
  left: 0;
  right: 0;
  margin-top: -7%;
  z-index: 1;

  @media (min-width: 576px) {
    margin-top: -10%;
  }
  @media (min-width: 640px) {
    margin-top: -10%;
  }

  @media (min-width: 968px) {
    margin-top: 0;
    left: 0;
    right: 0;
    top: 120px;
    position: absolute;
  }
  @media (min-width: 1200px) {
    top: 40px;
  }
  @media (min-width: 1400px) {
    top: -50px;
  }
`
const ExplorePuffyImg = styled.img`

  z-index: 2;
  width: auto;
  @media only screen and (max-width: 768px) {
    display: none;
    }
  }
`

const CollectionCard = styled.div`
  width: 100%;
`
const CollectionImageWrapper = styled(Flex) < { color: string } > `
  position: relative;
  background: ${({ color }) => color};
  border-radius: 16px;
  // max-width: 180px;
  // height: 180px;
  width: 100%;
  height: 100%;
  max-height: 160px;
  align-items: center;
  padding: 24px;

  @media (min-width: 480px) {
    max-height: 220px;
  }
  @media (min-width: 640px) {
    max-height: 240px;
  }
  @media (min-width: 768px) {
    max-height: 200px;
  }
  @media (min-width: 968px) {
    max-height: 240px;
  }

  @media (min-width: 1200px) {
    max-height: 260px;
  }
  @media (min-width: 1400px) {
    max-height: 210px;
  }
`
const CollectionImage = styled.img`
  // height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (min-width: 968px) {
    // height: 160px;
  }

  // @media (min-width: 1200px) {
  //   height: 160px;
  // }

  @media (min-width: 1200px) {
    // height: unset;
  }
`
// const VoteIconWrapper = styled(Flex)`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   height: 40px;
//   width: 40px;
//   align-items: center;
//   justify-content: center;
//   // background: rgba(255, 255, 255, 0.4);
//   backdrop-filter: blur(37px);
//   border-radius: 50%;

//   img {
//     border-radius: 50%;
//   }
// `
const CollectionInfo = styled(Flex)`
  text-align: center;
  padding: 8px;
  justify-content: center;
  // max-width: 180px;
`
const CollectionName = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #050021;

  @media (min-width: 968px) {
    font-size: 18px;
    line-height: 27px;
  }
`
// const CollectionPrice = styled(Text)`
//   font-family: 'Rowdies';
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 24px;
//   color: #050021;
//   // margin: auto;
//   display: flex;
//   margin-left: 4px;

//   @media (min-width: 968px) {
//     font-size: 24px;
//     line-height: 24px;
//   }
// `

// actions
const Actions = styled(Flex)`
  position: relative;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 978px) {
    margin-top: 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 20px;
  }
  @media (min-width: 1400px) {
    margin-top: 0;
  }
`
const BrowseButton = styled(Button)`
  font-family: 'Rowdies';
  padding: 12px 30px;
  // background: #9d7eff !important;
  background: transparent;
  box-shadow: none;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
  font-size: 28px;
  line-height: 36px;
  // text-transform: uppercase;
  border-radius: 32px;
  color: white;

  > div {
    align-items: center;
    display: flex;
  }

  img {
    margin-left: 8px;
    width: 28px;
    height: 28px;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
    @media (min-width: 978px) {
      margin-left: 16px;
    }
    @media (min-width: 1200px) {
      margin-left: 32px;
      width: 48px;
      height: 48px;
    }
    @media (min-width: 1400px) {
      margin-left: 32px;
    }
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 978px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 1200px) {
    font-size: 48px;
    line-height: 72px;
  }
  @media (min-width: 1400px) {
    font-size: 48px;
    -height: 72px;
  }
`

export default MyPuffies
