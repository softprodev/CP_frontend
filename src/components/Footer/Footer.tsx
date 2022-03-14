import React from 'react'
import styled from 'styled-components'
import { Flex, Text, ResetCSS } from 'penguinfinance-uikit2'
// import SvgIcon from 'components/SvgIcon'
import config from './config'

const Footer = () => {
  const { socialLinks } = config

  return (
    <>
      <ResetCSS />
      <FooterContainer>
        <FooterWrapper alignItems="center" justifyContent="space-between" width="100%">
          <LeftSection>
            <GeneralInfoContainer flexDirection="column" alignItems="flex-start">
              <LogoText>{`CryptoPuffies `}</LogoText>
              <CopyRightText>{`© 2022 All Rights Reserved `}</CopyRightText>
            </GeneralInfoContainer>
            <FooterLogoImageContainer>
              <FooterLogoImage
                src={`${process.env.PUBLIC_URL}/images/footers/cryptopuffies_logo.png`}
                alt="footer logo"
              />
            </FooterLogoImageContainer>
          </LeftSection>
          <RightSection>
            <SocialLinksContainer>
              {socialLinks.map((row) => {
                return (
                  <SocialLinkItem key={row.value} href={row.href} target='_blank'>
                    <img src={`${process.env.PUBLIC_URL}/images/footers/${row.icon}`} width="24px" height="24px" alt={row.value} />
                  </SocialLinkItem>
                )
              })}
            </SocialLinksContainer>
            {/* <TermsAndPolicyContainer>
              <TCLink href="/" target="_blank">{`Terms & Conditions `}</TCLink>
              {windowSize.width >= 768 && 
                <StyledDot />
              }
              <TCLink href="/" target="_blank">{`Privacy Policy `}</TCLink>
            </TermsAndPolicyContainer> */}
          </RightSection>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

const FooterWrapper = styled(Flex)`
  flex-direction: column;
  max-width: 1440px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterContainer = styled(Flex)`
  width: 100%;
  height: 340px;
  padding: 0px 16px;
  align-items: center;
  background: #3e2054;
  // max-width: 1440px;
  // margin: auto;
  justify-content: center;

  @media (min-width: 768px) {
    height: 144px;
    padding: 0px 40px;
  }
  @media (min-width: 1200px) {
    height: 144px;
    padding: 0px 105px 0px 105px;
  }
`

// left section
const LeftSection = styled(Flex)`
  align-items: center;
  flex-direction: column-reverse;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`

// general info
const GeneralInfoContainer = styled(Flex)`
  align-items: center;

  @media (min-width: 768px) {
    
  }
  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`
const LogoText = styled(Text)`
  font-family: 'Gotham-bold';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`
const CopyRightText = styled(Text)`
  font-family: 'Gotham';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 16px;
`

// footer logo
const FooterLogoImageContainer = styled(Flex)`
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`
const FooterLogoImage = styled.img`
  width: 88px;
  height: 88px;

  @media (min-width: 768px) {
    width: 129px;
    height: 129px;
  }
`

// right section
const RightSection = styled(Flex)`
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    // height: 144px;
  }
  @media (min-width: 1200px) {
    align-items: flex-end;
  }
`

// social links
const SocialLinksContainer = styled(Flex)`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 90px;
    justify-content: flex-end;
  }
`
const SocialLinkItem = styled.a`
  margin-right: 40px;
  cursor: pointer;
  &:last-child {
    margin: 0px;
  }
`

// terms & policy container
// const TermsAndPolicyContainer = styled(Flex)`
//   margin-top: 16px;
//   align-items: center;
//   flex-direction: column;

//   @media (min-width: 768px) {
//     margin-left: 90px;
//     flex-direction: row;
//     justify-content: flex-end;
//   }
// `

// const TCLink = styled.a`
//   font-family: 'Gotham';
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ffffff;
//   opacity: 0.9;
//   margin-bottom: 10px;

//   &:hover {
//     text-decoration: underline;
//   }

//   @media (min-width: 768px) {
//     margin-bottom: 0;
//   }
// `
// const StyledDot = styled.div`
//   width: 4px;
//   height: 4px;
//   border-radius: 50%;
//   background: white;
//   margin: 0px 16px;
// `

export default Footer
