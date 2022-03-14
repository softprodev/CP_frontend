import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { Flex, Text, Card } from 'penguinfinance-uikit2'
import useWindowSize from 'hooks/useWindowSize'

const teamMembers = [
  { id: 1, name: 'Cody Maverick', role: 'Project Lead', image: 'member1.png', background: '#FFDF65' },
  { id: 2, name: 'Frostbyte', role: 'Team Manager', image: 'member2.png', background: '#89D560' },
  { id: 3, name: 'BraveSquare', role: 'Puffy Artist', image: 'member3.png', background: '#33BAEC' },
  { id: 4, name: 'CryptoBanker', role: 'Smart Contract Wizard', image: 'member4.png', background: '#FA4D4B' },
  { id: 5, name: 'Peter Jin', role: 'Software Engineer', image: 'member5.png', background: '#FDB1D5' },
  { id: 6, name: 'GarLock', role: 'Marketing Manager', image: 'member6.png', background: '#FFA15C' },
]


const IntroducingTeam = () => {
  const windowSize = useWindowSize();

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    nextArrow: (
      <NextArrow>
        <img src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/arrow-left.svg`} width='20px' height='20px' alt='team_arrow' />
      </NextArrow>
    )
  };

  return (
    <Section>
      <BackgroundImage />
      <StyledCard>
        <IntroductionContainer alignItems="center">
          <IntroducingTeamHeader>
            <IntroducingTeamHeaderTitle>
              <FirstSentence>{`Introducing the `}</FirstSentence>
              <SecondSentence>{`Team `}</SecondSentence>
            </IntroducingTeamHeaderTitle>
            <IntroducingTeamHeaderDescription>
              <p>
                {`Our team is composed of crypto investors, enthusiasts, and degenerates. What brings us together is our passion for crypto, NFTs, and most of all… `}
              </p>
              <p>
                <span>Decentralization.</span> We value the power of individuals having full control over their assets, and intend to grant this ability to as many users as possible.
              </p>
            </IntroducingTeamHeaderDescription>
          </IntroducingTeamHeader>
          {windowSize.width >= 1400 &&
            <SubListContainer>
              {teamMembers
                .filter((row) => row.id <= 2)
                .map((member) => (
                  <MemberCard key={member.id} memberId={member.id} background={member.background}>
                    <MemberImage
                      src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/${member.image}`}
                      alt="member image"
                    />
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </MemberInfo>
                  </MemberCard>
                ))}
            </SubListContainer>
          }
          {/* <RectIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/rect.svg`}
              width="56px"
              height="56px"
              alt='team_rect'
            />
          </RectIconWrapper>
          <SpinIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/spin.svg`}
              width="40px"
              height="40px"
              alt='team_spin'
            />
          </SpinIconWrapper>
          <CrossIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/cross.svg`}
              width="30px"
              height="30px"
              alt='team_cross'
            />
          </CrossIconWrapper>
          <ArrowLeftIconWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/arrow-left.svg`}
              width="30px"
              height="30px"
              alt='team_left'
            />
          </ArrowLeftIconWrapper> */}
        </IntroductionContainer>
        {windowSize.width < 968 ? 
          <SliderContainer flexDirection='column' mt='40px'>
            <Slider {...settings}>
              {teamMembers.map((member) => (
                  <MemberCard key={member.id} memberId={2} background={member.background}>
                    <Flex flexDirection='column' alignItems='center'>
                      <MemberImage
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/${member.image}`}
                        alt="member image"
                      />
                      <MemberInfo>
                        <MemberName>{member.name}</MemberName>
                        <MemberRole>{member.role}</MemberRole>
                      </MemberInfo>
                    </Flex>
                  </MemberCard>
                ))}
            </Slider>
          </SliderContainer>
          : <>
            {windowSize.width >= 1400 ?
              <ListContainer>
                {teamMembers
                  .filter((row) => row.id > 2)
                  .map((member) => (
                    <MemberCard key={member.id} memberId={member.id} background={member.background}>
                      <MemberImage
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/${member.image}`}
                        alt="member image"
                      />
                      <MemberInfo>
                        <MemberName>{member.name}</MemberName>
                        <MemberRole>{member.role}</MemberRole>
                      </MemberInfo>
                    </MemberCard>
                  ))}
              </ListContainer>
              :
              <Flex flexDirection='column' alignItems='center' mt='40px'>
                <MembersContainer colCount={4}>
                  {teamMembers
                    .filter(row => row.id <= 4)
                    .map((member) => (
                    <MemberCard key={member.id} memberId={member.id + 1} background={member.background}>
                      <MemberImage
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/${member.image}`}
                        alt="member image"
                      />
                      <MemberInfo>
                        <MemberName>{member.name}</MemberName>
                        <MemberRole>{member.role}</MemberRole>
                      </MemberInfo>
                    </MemberCard>
                  ))}
                </MembersContainer>
                <MembersContainer colCount={2}>
                  {teamMembers
                    .filter(row => row.id > 4)
                    .map((member) => (
                    <MemberCard key={member.id} memberId={member.id} background={member.background}>
                      <MemberImage
                        src={`${process.env.PUBLIC_URL}/images/cryptopuffies/team/${member.image}`}
                        alt="member image"
                      />
                      <MemberInfo>
                        <MemberName>{member.name}</MemberName>
                        <MemberRole>{member.role}</MemberRole>
                      </MemberInfo>
                    </MemberCard>
                  ))}
                </MembersContainer>
              </Flex>
            }
          </>
        }
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
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_4.png');
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
  background: white;
  border-radius: 31px;
  padding: 32px 24px 16px 24px;
  margin-left: auto;
  margin-right: auto;
`

const NextArrow = styled.div`
  // div {
    position: absolute;
    margin-top: -150px;
    right: 0;
    // margin-left: -40px;
  // }
`;

const SliderContainer = styled(Flex)`
  .slick-list {
    max-height: 214px;
  }
`;

const IntroductionContainer = styled(Flex)`
  flex-direction: column;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

// const SpinIconWrapper = styled.div`
//   position: absolute;
//   display: none;

//   img {
//     width: 40px;
//     height: 40px;
//   }
//   @media (min-width: 1400px) {
//     top: -25%;
//     left: 25%;
//     display: block;
//   }
// `;

// const CrossIconWrapper = styled.div`
//   position: absolute;
//   display: none;

//   img {
//     width: 30px;
//     height: 30px;
//   }
//   @media (min-width: 1400px) {
//     top: -25%;
//     right: -5%;
//     display: block;
//   }
// `;

// const ArrowLeftIconWrapper = styled.div`
//   position: absolute;
//   display: none;

//   img {
//     width: 30px;
//     height: 30px;
//   }
//   @media (min-width: 968px) {
//     bottom: -220%;
//     left: 5%;
//     display: block;
//   }
//   @media (min-width: 1400px) {
//     bottom: -150%;
//     left: 40%;
//     display: block;
//   }
// `;

// const RectIconWrapper = styled.div`
//   position: absolute;
//   left: -10%;
//   top: -10%;
//   img {
//     width: 56px;
//     height: 56px;
//   }
//   @media (min-width: 640px) {
//     left: -5%;
//   }
//   @media (min-width: 968px) {
//     left: 5%;
//     top: 0;
//   }
//   @media (min-width: 1400px) {
//     left: -6%;
//     top: unset;
//     bottom: -20%;
//   }
// `;

// header
const IntroducingTeamHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 968px) {
    width: 80%;
  }
  @media (min-width: 1400px) {
    width: 50%;
    padding-right: 24px;
    padding-left: 24px;
  }
`
const IntroducingTeamHeaderTitle = styled(Flex)`
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
  color: #9d7eff;
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

const IntroducingTeamHeaderDescription = styled.div`
  padding-right: 0px;
  color: black;
  P {
    margin-top: 8px;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;

    @media (min-width: 968px) {
      text-align: left;
    }
  }

  span {
    color: #01CBF3;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding-right: 30px;
  }
  @media (min-width: 1400px) {
    padding-right: 30px;
  }
`

// sub list
const SubListContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;
  width: 50%;

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1400px) {
    padding: 16px 0 16px 24px;
    grid-gap: 48px;
  }
`

// list
const ListContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    padding: 24px 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1400px) {
    grid-gap: 48px;
  }
`

const MembersContainer = styled.div<{ colCount: number }>`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 24px;
    grid-template-columns: repeat(8, 1fr);
    padding: 24px 0;

    div {
      grid-column: span 2;

      &:last-child:nth-child(2) {
        grid-column-end: ${({ colCount }) => colCount === 2 && -3};
      }
      
      &:first-child {
        grid-column-end: ${({ colCount }) => colCount === 2 && 5};
      }
    }
  }
`;

const MemberCard = styled.div<{ memberId?: number, background: string }>`
  background: ${({ background }) => background};
  border-radius: 16px;
  padding: 16px;
  // transform: ${({ memberId }) => memberId % 2 === 1 && 'translateY(-30px)'};
  width: 214px;
  min-width: 214px;
  margin-right: 16px;
  height: 214px;
  max-width: 214px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 968px) {
    width: 100%;
    height: unset;
    max-width: 285px;
    margin-right: 0;
  }
  @media (min-width: 1400px) {
    max-width: unset;
  }
`
const MemberImage = styled.img`
  height: 100px;
  margin-bottom: 24px;
  // z-index: -1;

  @media (min-width: 968px) {
    width: 80%;
    height: unset;
    margin-bottom: 0;
  }
  @media (min-width: 1400px) {
    width: 80%;
  }
`
const MemberInfo = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(37px);
  padding: 8px;
  width: 100%;

  @media (min-width: 968px) {
    // width: unset;
    // width
  }
`
const MemberName = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #050021;
  margin: auto;
`
const MemberRole = styled(Text)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #050021;
  margin: auto;
  margin-top: 2px;
`

export default IntroducingTeam
