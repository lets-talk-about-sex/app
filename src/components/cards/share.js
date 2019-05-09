import React, {Component} from 'react';
import styled from '@emotion/styled/macro';
import shareButton from '../../assets/icon/article/share.svg';
import MessengerButton from '../../assets/icon/article/messenger.svg';
import GmailButton from '../../assets/icon/article/gmail.svg';
import ExitButton from '../../assets/icon/article/closeshare.svg';

// deilivirkni -  animations button container
const ShareAnimation = styled.div`
  position: absolute;
  right: 70px;
  top: 40px;
  background-color: tomato;
  &.active {
    .closeShareButton{
        z-index: 100;
        background-color: white;
    } 
    .messengerButton {
        transform:translateY(calc(-100% - 10px));
    }
    .gmailButton {
        transform:translateY(calc(-100% - 70px));
    }
  }
`
// share button container
const ShareDiv = styled.div`
   height: 50px;
   width: 50px;
   cursor: pointer;
   border-radius: 50%;
   position: absolute;
   top:0;
   left: 0;
   transition:transform .35s ease;
   &.firstState {
        z-index: 99;
        background-color: white;
        -webkit-box-shadow: 5px 0px 30px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 5px 0px 30px 0px rgba(0,0,0,0.1);
        box-shadow: 5px 0px 30px 0px rgba(0,0,0,0.1);
   }
`
// share button
const Share = styled.img`
  height: auto;
  width: 18px;
  cursor: pointer;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`
// messenger logo
const MessengerLogo = styled.img`
  width: 100px;
  cursor: pointer;
`
// gmail logo
const GmailLogo = styled.img`
  width: 100px;
  cursor: pointer;
`
// exit share logo 
const Exit = styled.img`
  height: auto;
  width: 18px;
  cursor: pointer;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
class ShareComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.location)
      this.state = {isToggleOn: false};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {
        return (
            <div>   
                <ShareAnimation className={this.state.isToggleOn ? "active":""}>
                  <ShareDiv onClick={this.handleClick} className={"firstState"}>
                    <Share src={shareButton} alt="" ></Share>
                  </ShareDiv>
                  <ShareDiv className={"messengerButton"}>
                    <a href={"fb-messenger://share/?link="+this.props.location.href+"&app_id=470392137039381"}><MessengerLogo src={MessengerButton} alt=""></MessengerLogo></a> 
                  </ShareDiv>
                  <ShareDiv className={"gmailButton"}>
                    <a href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&body="+this.props.location.href+"&ui=2&tf=1&pli=1"} ><GmailLogo src={GmailButton} alt=""></GmailLogo> </a>
                  </ShareDiv>
                  <ShareDiv onClick={this.handleClick} className={"closeShareButton"}>
                    <Exit src={ExitButton} alt=""></Exit>
                  </ShareDiv> 
                </ShareAnimation> 
            </div>
        )
      } 
  };
    
export default ShareComponent;