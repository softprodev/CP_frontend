import React from 'react'
import styled from 'styled-components'

import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

interface Props {
  walletConnection: () => void;
  walletButtonCaption: string;
  handleOpenModal: any;
}

const Header: React.FC<Props> = ({ walletConnection, walletButtonCaption, handleOpenModal }) => {

  const { activateBrowserWallet, account } = useEthers();

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    walletConnection();
    // activateBrowserWallet();

  };
  const buttonHandlerEmpty = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    walletConnection();

  };

  return (

    <nav className="header" id="header">
      <div className="c-grid">
        <div className="header__wrapper">
          <div className="header__wrapper-left">
            <nav className="header__nav"><a className="is-active" href="#roadmap">ROADMAP</a><a href="#club">Club Physique</a><a href="#benefits">BENEFITS</a></nav>
          </div>
          <div className="header__wrapper-right">
            <div>
              <div className="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
            <div>
              <img className="header__logo" src="img/logo.png" srcSet="img/logo@2x.png 2x" alt="" />
            </div>
            <div className="c-btn__wrapper c-btn__wrapper--center">
              <a className="c-btn" href="https://discord.com/invite/clubphysique" rel="noreferrer" target="_blank">
                <u className="c-btn__mask">
                  <i className="icon-font icon-discord" />
                  Join Now
                </u><span>
                  <i className="icon-font icon-discord" />
                  Join Now
                </span>
              </a>
              {/* <WalletButton onClick={account ? handleOpenModal : buttonHandler} className="c-btn" type="button"> */}
              <WalletButton onClick={account ? buttonHandlerEmpty : buttonHandler} className="c-btn" type="button">
                {/* <u className="c-btn__mask">{account ? `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}` : 'Connect Wallet'}</u><span>{account ? `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}` : 'Connect Wallet'}</span> */}
                <u className="c-btn__mask">{walletButtonCaption}</u><span>{walletButtonCaption}</span>
              </WalletButton>
              {/* </div> */}

            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}
const WalletButton = styled.button`

  outline: none;
  text-decoration: none;
  margin-left: 20px !important;
  background-color: transparent;

`;


export const PlayerImg = styled.img`
                    padding-left: 10px,
                    padding-right: 10px,
                    width: 26px;
                    height: 26px;
                    cursor: pointer;

                    &:last-child {
                      margin - left: 8px;
  }
                    @media (min-width: 1400px) {
                      margin - left: 16px;
  }
                    `;

export default Header
