import styled from 'styled-components';
import { Flex, Text, Button } from 'penguinfinance-uikit2'
import Page from 'components/layout/Page'

export const StyledPage = styled(Page)`
  max-width: unset;
  padding-top: 0px;
  padding: 0px;
`

export const Section = styled.div`
  position: relative;
  padding-bottom: 16px;
  min-height: calc(100vh - 64px);
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('/images/cryptopuffies/bg_1.png');
  background-size: contain;
`;

export const Wrapper = styled(Flex)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 120px;
    padding-bottom: 20px;
  }
  @media (min-width: 1200px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 180px;
  }
  @media (min-width: 1400px) {
    padding: 0;
    padding-top: 190px;
    padding-bottom: 20px;
  }
`;

export const MintWrapper = styled(Flex)`
  background: white;
  border-radius: 100px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  padding: 24px;

  @media (min-width: 570px) {
    padding: 32px;
    border-radius: 60px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 32px;
    border-radius: 60px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    border-radius: 80px;
  }
  @media (min-width: 1400px) {
    padding: 32px;
    border-radius: 100px;
  }
`;

export const SliderContainer = styled(Flex)`
  .slick-list {
    max-height: 600px;
    border-radius: 60px;
    width: 220px;
    @media (min-width: 570px) {
      width: 220px;
      max-height: 730px;
      border-radius: 40px;
    }
    @media (min-width: 768px) {
      width: 170px;
      max-height: 348px;
      border-radius: 32px;
    }
    @media (min-width: 1200px) {
      width: 280px;
      max-height: 576px;
      border-radius: 60px;
    }
    @media (min-width: 1400px) {
      width: 300px;
      max-height: 626px;
    }
  }

  .slick-arrow {
    display: none !important;
  }
`;

export const SliderImage = styled.img`
  width: 220px;
  margin-top: 4px;
  margin-bottom: 4px;
  @media (min-width: 570px) {
    width: 220px;
  }
  @media (min-width: 768px) {
    width: 170px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  @media (min-width: 1400px) {
    width: 310px;
  }
`;

export const MintBannerImage1 = styled.img`
  object-fit: contain;
  width: 228px;
  margin-top: -146px;

  @media (min-width: 768px) {
    width: 170px;
    margin-right: 16px;
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    width: 290px;
    margin-left: 0;
  }
  @media (min-width: 1400px) {
    width: 320px;
  }
`;

export const MintBannerImage2 = styled.img`
  object-fit: contain;
  width: 216px;
  z-index: 1;
  margin-left: 5px;

  @media (min-width: 768px) {
    width: 160px;
    margin-left: 26px;
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    margin-left: 0;
  }
  @media (min-width: 1400px) {
    width: 310px;
  }
`;

export const EggsContainer = styled(Flex)`
  width: 280px;
  position: relative;
  @media (min-width: 570px) {
    width: 200px;
  }
  @media (min-width: 768px) {
    width: 310px;
  }
  @media (min-width: 1200px) {
    width: 250px;
  }
  @media (min-width: 1400px) {
    width: 310px;
  }
`;

export const EggImg = styled.img<{ rarity?: number }>`
  width: ${({ rarity }) => rarity <= 1 ? '280px' : '250px'};
  margin-top: ${({ rarity }) => rarity > 1 && '34px'};
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  @media (min-width: 570px) {
    width: ${({ rarity }) => rarity <= 1 ? '300px' : '160px'};
    margin-top: ${({ rarity }) => rarity > 1 && '46px'};
  }
  @media (min-width: 768px) {
    width: ${({ rarity }) => rarity <= 1 ? '300px' : '260px'};
    margin-top: ${({ rarity }) => rarity > 1 && '46px'};
  }
  @media (min-width: 1200px) {
    width: 280px;
    width: ${({ rarity }) => rarity <= 1 ? '280px' : '220px'};
    margin-top: ${({ rarity }) => rarity > 1 && '34px'};
  }
  @media (min-width: 1400px) {
    width: ${({ rarity }) => rarity <= 1 ? '300px' : '260px'};
    margin-top: ${({ rarity }) => rarity > 1 && '46px'};
  }
`;

export const Egg2Img = styled.img`
  width: 160px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-left: -16px;
  
  @media (min-width: 570px) {
    width: 140px;
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1200px) {
    width: 160px;
  }
  @media (min-width: 1400px) {
    width: 200px;
  }
`;

export const Egg3Img = styled.img`
  width: 140px;
  margin-top: -10px;
  margin-right: -8px;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: 570px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 180px;
    margin-top: -20px;
    margin-right: -8px;
  }
  @media (min-width: 1200px) {
    width: 140px;
  }
  @media (min-width: 1400px) {
    width: 180px;
    margin-right: -8px;
  }
`;


export const EggQuestionText = styled(Text)`
  color: #FFBE5C;
  font-family: 'Rowdies';
  font-size: 200px;
  z-index: 5;
  margin-top: -300px;
  text-shadow: -6px 0 #fff6c4, 0 6px #fff6c4, 6px 0 #fff6c4, 0 -6px #fff6c4;

  @media (min-width: 570px) {
    font-size: 140px;
    margin-top: -220px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    font-size: 180px;
    margin-top: -300px;
    margin-bottom: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 180px;
    margin-top: -280px;
    margin-bottom: 10px;
  }
  @media (min-width: 1400px) {
    font-size: 200px;
    margin-top: -320px;
    margin-bottom: 20px;
  }
`;

export const PuffiesCountText = styled(Text)`
  font-family: 'Rowdies';
  font-size: 32px;
  line-height: 40px;
  margin-top: 16px;

  @media (min-width: 570px) {
    font-size: 28px;
    line-height: 36px;
    margin-top: 0;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: 1400px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const PuffiesMintedText = styled(Text)`
  font-size: 28px;
  line-height: 36px;
  font-family: 'Rowdies';
  color: #FA4D4B;

  @media (min-width: 570px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 8px;
  }
  @media (min-width: 1200px) {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 0;
  }
  @media (min-width: 1400px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const RarityContainer = styled(Flex)`
  background: #FA4D4B;
  font-size: 32px;
  line-height: 40px;
  font-family: 'Rowdies';
  border-radius: 100px;
  min-width: 220px;
  height: 44px;
  margin-top: 16px;

  span {
    color: white;
    font-size: 32px;
    line-height: 40px;
    font-family: 'Rowdies';
  }

  @media (min-width: 1200px) {
    min-width: 200px;
  }
  @media (min-width: 1400px) {
    min-width: 220px;
  }
`;

export const PuggleButton = styled(Button)`
  background: #FA4D4B;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Rowdies';
  width: 220px;
  height: 44px;
  border-radius: 100px;
  color: white;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: none;

  @media (min-width: 1200px) {
    width: 200px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 1400px) {
    width: 220px;
    height: 40px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ActionButtonsWrapper = styled(Flex)`
  flex-direction: column;
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const GoldenTicketButton = styled(Button)`
  background: #FA4D4B;
  padding: 0 8px;
  font-size: 24px;
  line-height: 32px;
  font-family: 'Rowdies';
  height: 44px;
  min-width: 200px;
  border-radius: 100px;
  // margin-top: 16px;
  box-shadow: none;
  margin-bottom: -8px;
  
  img {
    margin-right: 8px;
    width: 32px;
    height: 32px;

    @media (min-width: 1400px) {
      width: 48px;
      height: 48px;
      margin-right: 4px;
    }
  }

  @media (min-width: 1400px) {
    margin-left: -120px;
    min-width: unset;
    height: 92px;
    border-radius: 24px;
    margin-right: 8px;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const GoldenTicketImg = styled.img`
`;

export const PlusMinusButton = styled.div`
  padding: 4px 16px;
  cursor: pointer;
  user-select: none;
`;

export const PuffyPerPrice = styled(Text)`
  font-size: 20px;
  line-height: 25px;
  font-family: 'Rowdies';
  margin-top: 14px;
`;

export const PuffyPlayer = styled(Flex)`
  flex-direction: column;
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`

export const PuffyPrice = styled(Text)`
  font-size: 24px;
  line-height: 32px;
  font-family: 'Rowdies';
  color: #4FDAF7;

  @media (min-width: 1200px) {
    flex-direction: row;
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const LogoImg = styled.img`
  margin-top: -100px;
  width: 180px;
  position: absolute;

  @media (min-width: 570px) {
    margin-top: -100px;
    width: 260px;
  }
  @media (min-width: 768px) {
    width: 240px;
    margin-top: -110px;
  }
  @media (min-width: 1200px) {
    width: 270px;
    margin-top: -110px;
  }
  @media (min-width: 1400px) {
    width: 320px;
    margin-top: -130px;
  }
`;

export const CollectionText = styled(Text)`
  font-size: 22px;
  line-height: 30px;
  font-family: 'Rowdies';
  margin-top: 80px;

  span {
    font-family: 'Rowdies';
    color: #FA4D4B;
  }

  @media (min-width: 570px) {
    font-size: 26px;
    line-height: 34px;
    margin-top: 140px;
  }
  @media (min-width: 768px) {
    margin-top: 110px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 28px;
    margin-top: 140px;
  }
  @media (min-width: 1400px) {
    font-size: 26px;
    line-height: 34px;
    margin-top: 160px;
  }
`;

export const CountDownContainer = styled.div`
  min-width: 280px;
  display: flex;
  justify-content: center;
  padding-top: 5px;

  span, p {
    font-family: 'Rowdies';
    font-size: 28px;
    line-height: 36px;
    display: flex;

    @media (min-width: 570px) {
      font-size: 36px;
      line-height: 44px;
    } 
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 48px;
    }
    // @media (min-width: 968px) {
    //   font-size: 56px;
    //   line-height: 64px;
    // }
    @media (min-width: 1200px) {
      font-size: 28px;
      line-height: 36px;
    }
    @media (min-width: 1400px) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    color: #FA4D4B;
    // margin-right: 8px;
  }

  @media (min-width: 570px) {
    min-width: 350px;
  }
  @media (min-width: 1200px) {
    min-width: 270px;
  }
  @media (min-width: 1400px) {
    min-width: 350px;
  }
`;

export const CountDownContainerText = styled(Text)`
  font-family: 'Rowdies';
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 12px;
  text-align:center;

  @media (min-width: 570px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 12px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  @media (min-width: 1400px) {
    font-size: 24px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

export const PuffyPartyImg = styled.img`
  margin-top: 0px;
  width: 260px;
  z-index: 1;

  @media (min-width: 570px) {
    width: 200px;
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    width: 260px;
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    width: 280px;
  }
  @media (min-width: 1400px) {
    width: 320px;
  }
`;

export const PuffyGoImg = styled.img`
  margin-top: 0px;
  width: 260px;
  z-index: 1;

  @media (min-width: 570px) {
    width: 200px;
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    width: 260px;
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    width: 280px;
  }
  @media (min-width: 1400px) {
    width: 320px;
  }
`;

export const PuffyPartyShadowImg = styled.img`
  width: 240px;
  margin-right: 40px;
  margin-top: -48px;

  @media (min-width: 1200px) {
    width: 220px;
  }
  @media (min-width: 1400px) {
    width: 240px;
  }
`

export const PuffyPartyText = styled(Text)`
  font-family: 'Rowdies';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;

  @media (min-width: 570px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

export const PlayerImg = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;

  &:last-child {
    margin-left: 8px;
  }
  @media (min-width: 1400px) {
    margin-left: 16px;
  }
`;

export const PartySection = styled(Flex)`
  margin-left: 16px;
  margin-right: 16px;
  @media (min-width: 1200px) {
    margin-left: 16px;
    margin-right: 8px;
  }
  @media (min-width: 1400px) {
    margin-left: 24px;
    margin-right: 16px;
  }
`;

export const GotoMyPuffies = styled(Text)`
  font-family: 'Rowdies';
  font-size: 24px;
  line-height: 32px;
  color: #FA4D4B;
  cursor: pointer;
`;

export const PuffiesContainer = styled(Flex) <{ isPresale?: boolean }>`
  margin-left: ${({ isPresale }) => isPresale && '16px'};
`;