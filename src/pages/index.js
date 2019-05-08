import React from 'react';
// import Article from 'template/article/article-template';
// import Footer from 'components/footer/Footer';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Link } from "gatsby";
import LoadingPage from './loadingPage';

//Photos 
import Mynstur_dark from '../assets/icon/mynstur_dark.svg';
import ChatIcon from '../assets/icon/chaticon.svg';
import Ordabanki from '../assets/icon/ordabankaicon.svg';
import SturlStad from '../assets/icon/sturlstad.svg';
import ArrowRight from '../assets/icon/article/arrowRightLinks.svg';

// Til að service workerinn virki
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }

const SkipButton = styled.a`
    margin-left: 30px;
    display: block;
    font-size: 18px;
    color: #FC4255 !important;
    font-weight: 600;
    z-index: 99;
    &:visited {
        color: #FC4255 !important;
    }
    &:active {
        color: #D13847;
    }
    &:focus {
        outline: none;
    }
`
const ButtonDiv = styled.div`
    display: flex;
`
const ArrowDiv = styled.div`
    height: 27px;
    width: 27px;
    background-color: #FC4255;
    border-radius: 50%;
    position: relative;
    position: absolute;
    right: 40%;
    &:active {
        background-color: #D13847;
    }
`
const ArrowImg = styled.img`
    cursor: pointer;
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const OBCards = styled.div`
    display: flex;
    height: 550px;
    width: auto;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-top: 40%;
    & ::-webkit-scrollbar {
        display: none;
    }
 `
const OBCardContainer = styled.div`
    width: 286px;
    height: 273px;
    padding-bottom: 24px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:15px;
    background-color: #fff;
    margin-left: 30px;
    position: relative;
`
const MynsturImg = styled.img`
    width: 100vw;
    height: calc(100vh + 80px);
    position: absolute;
    top:-80px;
    left:0;
`
const IconDiv = styled.div`
    border-radius: 50%;
    background-color: #FC4255;
    width: 48px;
    height: 48px;
    position: absolute;
    top: -10px;
    left: 20px;
`
const IconImg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const SturlIconImg = styled.img`
    position: absolute;
    left: 2px;
    top: 11px;
`
const TitleOnCard = styled.h1`
    color: #FC4255;
    line-height: 30px;
    margin-bottom: 20px;
`
const TextDiv = styled.div`
    padding: 100px 30px 40px 30px;
    width: 300px;
    &.sturladurTitle {
        padding-top:70px;
    }
`
const CarouselIndicator = styled.div`
    width: 100px;
    height: auto;
`
const LineTheFine1 = styled.span`
    background-color: #C7C7C7;
    height: 4px;
    width: 27px;
    border-radius: 50px; 
    position: absolute;
    bottom: 30%;
    left: 30px;
    &.red {
        background-color:#FC4255; 
    }
`
const LineTheFine2 = styled.span`
    background-color: #C7C7C7;
    height: 4px;
    width: 27px;
    border-radius: 50px; 
    position: absolute;
    bottom: 30%;
    left: 60px;
    &.red {
        background-color:#FC4255; 
    }
`
const LineTheFine3 = styled.span`
    background-color: #C7C7C7;
    height: 4px;
    width: 27px;
    border-radius: 50px; 
    position: absolute;
    bottom: 30%;
    left: 90px;
    &.red {
        background-color:#FC4255; 
  }
  `

  class Onboarding extends React.Component {
    constructor() {
        super();
        this.state = {
          scrolling: 0
        };
      }

      scrolling =(e) => {
        this.setState({scrolling:Math.floor(e.target.scrollLeft/250)})
      }

      render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                <LoadingPage />
                    <Global>
                        <div>
                            <MynsturImg src={Mynstur_dark} alt=""></MynsturImg>
                            <OBCards onScroll={this.scrolling}>
                                <OBCardContainer>
                                    <IconDiv>
                                        <IconImg src={ChatIcon} alt=""></IconImg>
                                    </IconDiv>
                                    <TextDiv>
                                    <TitleOnCard>Netspjall</TitleOnCard>
                                    <h4>Nafnlaust spjall svarað af hjúkrunar- og kynfræðingum</h4>
                                    </TextDiv>
                                </OBCardContainer>
                                <OBCardContainer>
                                    <IconDiv>
                                    <IconImg src={Ordabanki} alt=""></IconImg>
                                    </IconDiv>
                                    <TextDiv>
                                    <TitleOnCard>Orðabanki</TitleOnCard>
                                    <h4>Í appinu er hægt að finna yfir 500 orð um allt  sem tengist kynheilbrigði</h4>
                                    </TextDiv>
                                </OBCardContainer>
                                <OBCardContainer>
                                    <IconDiv>
                                        <SturlIconImg src={SturlStad} alt=""></SturlIconImg>
                                    </IconDiv>
                                    <TextDiv className="sturladurTitle">
                                    <TitleOnCard>Sturlaðar staðreyndir</TitleOnCard>
                                    <h4>Staðreyndir tengdar kynheilbrigði sem þú hefur aldrei heyrt áður</h4>
                                    </TextDiv>
                                </OBCardContainer>
                            </OBCards>

                            <CarouselIndicator>
                                <LineTheFine1 className={this.state.scrolling == 0? 'red' : ""}></LineTheFine1>
                                <LineTheFine2 className={this.state.scrolling == 1? 'red' : ""}></LineTheFine2>
                                <LineTheFine3 className={this.state.scrolling == 2? 'red' : ""}></LineTheFine3>
                            </CarouselIndicator>
                            <Link to={"/feed"}>
                                <ButtonDiv>
                                    <SkipButton>Let's talk about sex</SkipButton>
                                    <ArrowDiv>
                                        <ArrowImg src={ArrowRight} alt=""></ArrowImg>
                                    </ArrowDiv>
                                </ButtonDiv>
                            </Link>
                        </div>
                    </Global>
                </ThemeProvider> 

            </div>
     ) 
    }
};

export default Onboarding;