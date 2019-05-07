import React from 'react';

import styled from '@emotion/styled/macro';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Link } from "gatsby";
import { keyframes } from 'emotion'

//Photos 
import Mynstur from '../assets/icon/mynstur.svg';


const LoadingContainer = styled.div`
   display: block;
   
`

const LoadingBackground = styled.div`
   background-color: #FC4255;
   width: 100vw;
   height: calc(100vh + 80px);
   z-index:9999; 
   position: absolute;
   top:-80px;
   left:0;
   &.alert-shown {
       opacity: 1;
       transition: all 250ms linear;
   }
   &.alert-hidden {
       opacity: 0;
       transition: all 250ms linear;
   }
   &.transitionIsDone {
       display:none;
   }
`
const MynsturImg = styled.img`
   display: block;
   width: 100vw;
   height: calc(100vh + 300px);
   position: absolute;
   top:-80px;
   left:0;
`

const LogoAnimate = keyframes`
    0% {
        opacity: 0;
    }
    // 50% {
    //     opacity: 0.5;
    // }
    100% {
        opacity: 1;
    }
`

const AppLogo = styled.h3`
   color: white; 
   line-height: 45px;
   z-index: 9999;
   position: absolute;
   top: 450px;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 40px;
   text-align: center;
   animation: ${LogoAnimate} 1s ease-in-out ;
`

const Loader = keyframes`
    0% {
    transform: scale(1);
    }
    20% {
        transform: scale(1, 2.2);
    }
    40% {
        transform: scale(1);
    }
`

const LoadingWrapper = styled.div`
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`
const LoadingBar = styled.div`
    display: inline-block;
    width: 4px;
    height: 18px;
    border-radius: 5px;
    margin-right: 5px;
    animation: ${Loader} 1s ease-in-out infinite;
    &:nth-child(1) {
        background-color: #fff;
        animation-delay: 0;
    }
    &:nth-child(2) {
        background-color: #fff;
        animation-delay: 0.09s;
    }
    &:nth-child(3) {
        background-color: #fff;
        animation-delay: 0.18s;
    }
    &:nth-child(4) {
        background-color: #fff;
        animation-delay: 0.27s;
    }
`



class LoadingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        transitionDone: false
      };
    }

    componentDidMount(){
        console.log(this.state)
        this.timerHandle = setTimeout(() => {
            this.setState({ isLoading: false })
            this.timeHandleTwo = setTimeout(()=>{
                this.setState({transitionDone: true})
                console.log(this.state)
            }, 250)
        
        }, 3500);
    }

    componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      }

    

        render() {
            return (
            <div>
                <LoadingContainer>
                    <LoadingBackground className={`alert alert-success ${this.state.isLoading ? 'alert-shown' : 'alert-hidden'} ${this.state.transitionDone ? 'transitionIsDone' : ""}`}>
                        <MynsturImg src={Mynstur} alt=""></MynsturImg>
                        <AppLogo>Let's talk about sex</AppLogo>
                        <LoadingWrapper>
                            <LoadingBar></LoadingBar>
                            <LoadingBar></LoadingBar>
                            <LoadingBar></LoadingBar>
                            <LoadingBar></LoadingBar>
                        </LoadingWrapper>
                    </LoadingBackground>
                </LoadingContainer>
            </div>
            )
        } 


};



export default LoadingPage;