import React, { MouseEvent } from 'react'
import { Button } from 'penguinfinance-uikit2'
import styled from 'styled-components'

interface Props {
    totalSupply: number;
    cost: number;
    fetchContractInfo: () => void;
    mintButtonCaption: string;
}

const CPMint: React.FC<Props> = ({ totalSupply, cost, fetchContractInfo, mintButtonCaption }) => {

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Connec button clicked");
        fetchContractInfo();
    };

    const handleMouseEvent = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Do something
    };

    const divClickedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const div = event.currentTarget;
        console.log(
            "Element name: ",
            div.tagName,
            "Width: ",
            div.clientWidth,
            "Height: ",
            div.clientHeight
        );
    };

    const onClickMenuItem = row => async event => {
        event.preventDefault();
        // setActiveSection(row.value)

        // if (row.href === '/mint' || row.href === '/my-puffies') {
        //   history.push(row.href);
        // } else {
        //   await history.push('/');
        //   const menuElement = document.getElementById(row.href);
        //   if (menuElement) {
        //     menuElement.scrollIntoView({ behavior: "smooth" });
        //   }
        // }

        // if (viewMenu) {
        //   setViewMenu(false);
        // }
    }
    return (
        <section className="get" id="get">
            <div className="c-grid">
                <div className="get__wrapper">
                    <div className="get__wrapper-left"><img className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s" src="img/sadiknft.gif" srcSet="img/sadiknft.gif" alt="" /></div>
                    <div className="get__wrapper-right">
                        <div>
                            <div className="get__header wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                                <div>
                                    <p>Minted NFTs: <span>{totalSupply}</span></p>
                                </div>
                                <div><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /><img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" /></div>
                                <div>
                                    <p>Total Number: <span>400</span></p>
                                </div>
                            </div>
                            <h2 className="get__title c-title wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">Get Yours <span>NOW</span></h2>
                            <p className="get__desc wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">A collection of <strong>8 exclusive NFTS</strong> sit amet, consectetur adipiscing elit. Vivamus luctus molestie nisi, pulvinar finibus ex. Phasellus et sollicitudin metus. In luctus, elit ac hendrerit cursus, augue sem sagittis eterum noi.</p>
                            <div className="get__footer wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                                <div>
                                    <div><img src="img/img-get-toggle.png" srcSet="img/img-get-toggle@2x.png" alt="" /></div>
                                    <p>{cost}</p><span>per NFT</span>
                                </div>
                                <div>
                                    <div className="c-btn__wrapper">
                                        <MintButton onClick={buttonHandler} className="c-btn" name="button 1">
                                            <u className="c-btn__mask">{mintButtonCaption}</u><span>{mintButtonCaption}</span>
                                        </MintButton>
                                        {/* <button className="c-btn" onClick={divClickedHandler}>
                                            <u className="c-btn__mask">Connect Wallet</u><span>Connect Wallet</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


const MintButton = styled.button`

outline: none;
  text-decoration: none;

margin-left: 20px !important;
background-color: transparent;
// outline: none;
// cursor: pointer;
// position: relative;
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-align: center;
//     -ms-flex-align: center;
//         align-items: center;
// -webkit-box-pack: center;
//     -ms-flex-pack: center;
//         justify-content: center;
// width: 100%;
// max-width: 250px;
// height: 60px;
// padding: 0 20px;
// margin: 0;
// border-radius: 0;
// border: 1px solid #FF871C;
// -webkit-box-shadow: 0px 5px 21px 0px rgba(255, 81, 28, 0.29);
//         box-shadow: 0px 5px 21px 0px rgba(255, 81, 28, 0.29);
// -webkit-transition: -webkit-box-shadow 0.3s ease-in-out;
// transition: -webkit-box-shadow 0.3s ease-in-out;
// -o-transition: box-shadow 0.3s ease-in-out;
// transition: box-shadow 0.3s ease-in-out;
// transition: box-shadow 0.3s ease-in-out, -webkit-box-shadow 0.3s ease-in-out;
`;

export default CPMint
