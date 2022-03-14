import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from 'penguinfinance-uikit2'


const CPRoadmap = () => {
    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__bg" id="roadmapAnimationImg">
                <img src="img/bar-icon-1.svg" alt="" floating-node-js />
                <img src="img/bar-icon-2.svg" alt="" floating-node-js />
                <img src="img/bar-icon-3.svg" alt="" floating-node-js />
            </div>
            <div className="c-grid">
                <div className="roadmap__wrapper">
                    <p className="roadmap__desc wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">A limited NFT collection where each token drop comes with an exclusive release of our best selling protein bars. Each token also gives you a membership level seat at the business table & opens the build real wealth through brand ownership!!
                        <div className="roadmap__title-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <h2 className="roadmap__title c-title">
                                <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
                                <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
                                <span>roadmap</span>
                            </h2>
                        </div>
                    </p>
                    <div className="roadmap__block-wrapper">
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>2</span></p>
                                    <p className="roadmap__block-progress is-active">
                                        <i className="icon-font icon-check-mark" />
                                        <span>25%</span>
                                    </p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">8 EXCLUSIVE BAR DROPS<br />8 EXCLUSIVE NFTS</p>
                                    <p className="roadmap__block-desc">Peer-to-peer blockchain transactions are the way of the future. Each limited edition protein bar release will be through an exclusive NFT drop! Each drop comes with unique perks & special rights within our community but holding all 8 brings you to another level… </p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>3</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" />
                                        <span>50%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">We Are Granting Equity Ownership In Our Operating Company</p>
                                    <p className="roadmap__block-desc">We are giving away half of the company to our token holders. For those individuals that collect & own all 8 NFTs, you will be granted membership interest in the operating business entity</p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>3 q2</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" />
                                        <span>75%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">Token Holder Access to Chef Physique Gym</p>
                                    <p className="roadmap__block-desc">We plan to open a membership only gym owner & operated by the brand. We will build airBNB units on the facility to help offset some of the maintenance costs. Entry will be through holding any of the 8 NFTs</p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>4</span>-2<span>5</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" /><span>100%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">Company Strategic Exit or Initial Public Offering (IPO)</p>
                                    <p className="roadmap__block-desc">What’s the biggest value in owning a part of a company? The exit where lifechanging wealth is often made! We want our token holders to benefit from the upside and with real equity interest in the business, this is possible! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-btn__wrapper c-btn__wrapper--center wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                    <a className="c-btn" href="https://discord.gg/WP8RNZkx" rel="noreferrer" target="_blank">
                        <u className="c-btn__mask">Join The Community</u><span>Join The Community</span></a></div>
            </div>
        </section >
    )
}

export default CPRoadmap
