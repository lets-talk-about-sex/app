import React from 'react';
import styled from '@emotion/styled/macro';
import { keyframes } from 'emotion'

//Background for loading page
import Mynstur from '../assets/icon/mynstur.svg';

const LoadingContainer = styled.div`
   position: fixed; 
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   z-index: 999;
   &.transitionIsDone {
    display:none;
   }
`
const LoadingBackground = styled.div`
   background-color: ${props => props.theme.baseColors.coral};
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
    100% {
        opacity: 1;
    }
`
const AppLogo = styled.h3`
   color: ${props => props.theme.baseColors.white}; 
   line-height: 45px;
   z-index: 9999;
   position: absolute;
   top: 50%;
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
    &:nth-of-type(1) {
        background-color: ${props => props.theme.baseColors.white};
        animation-delay: 0;
    }
    &:nth-of-type(2) {
        background-color: ${props => props.theme.baseColors.white};
        animation-delay: 0.09s;
    }
    &:nth-of-type(3) {
        background-color: ${props => props.theme.baseColors.white};
        animation-delay: 0.18s;
    }
    &:nth-of-type(4) {
        background-color: ${props => props.theme.baseColors.white};
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
        this.timerHandle = setTimeout(() => {
            this.setState({ isLoading: false })
            this.timeHandleTwo = setTimeout(()=>{
                this.setState({transitionDone: true})
            }, 250)
        }, 2500);
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
                <LoadingContainer className={this.state.transitionDone ? 'transitionIsDone' : ""}>
                    <LoadingBackground className={`alert alert-success ${this.state.isLoading ? 'alert-shown' : 'alert-hidden'}`}>
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