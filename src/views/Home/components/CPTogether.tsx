import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from 'penguinfinance-uikit2'


const CPTogether = () => {
    return (
        <section className="together" id="together">
            <div className="together__content">
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">We believe in</h2>
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">a brand governed</h2>
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">by it’s tokenholders!</h2>
            </div>
            <div className="together__bg">
                <div>
                    <div id="togetherAnimation">
                        <div id="togetherAnimationImg1"><img src="img/togrther-flame-right.png" srcSet="img/togrther-flame-right@2x.png 2x" alt="" /></div>
                        <div id="togetherAnimationImg2"><img src="img/togrther-flame-left.png" srcSet="img/togrther-flame-left@2x.png 2x" alt="" /></div>
                        <div id="togetherAnimationImg3"><img src="img/togrther-flame-center.png" srcSet="img/togrther-flame-center@2x.png 2x" alt="" /></div>
                        <div id="togetherAnimationImg4"><img src="img/together-flame-blur.png" srcSet="img/together-flame-blur@2x.png 2x" alt="" /></div>
                        <div id="togetherAnimationImg5"><img src="img/togrther-man.png" srcSet="img/togrther-man@2x.png 2x" alt="" /></div>
                    </div>
                </div>
                <div>
                    <h2>We believe in a brand governed</h2>
                    <h2>by it’s tokenholders!</h2>
                    <h3>Let’s all</h3>
                    <h3><span>GROW</span></h3>
                </div>
            </div>
            <div className="c-grid">
                <div className="together__wrapper">
                    <h3><span>TOGETHER!</span></h3>
                </div>
            </div>
        </section>
    )
}

export default CPTogether
