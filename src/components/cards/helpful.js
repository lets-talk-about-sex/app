import React, {Component} from 'react';
import styled from '@emotion/styled/macro';
import { get } from 'lodash';

//Icons for helpful card
import ThumbsUpRed from '../../assets/icon/article/thumbsup.svg';
import ThumbsDownRed from '../../assets/icon/article/thumbsdown.svg';
import ThumbUpWhite from '../../assets/icon/article/thumbUpWhite.svg';
import ThumbDownWhite from '../../assets/icon/article/thumbDownWhite.svg';

//Helpful card
const HelpfulDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(0,0,0,0.1);
  align-items: center;
  margin-top: 30px;
  align-items: center;
`
const NoMessage = styled.div`
  width: 100%;
  margin-top: 15px;
  display: block;
`
const ThumbsContainer = styled.div`
  display: flex;
`
const ThumbDiv = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: solid 1px ${props => get(props,"theme.baseColors.coral", "")};
  position: relative;
  margin-right: 5px;
  display: block;
  &.activeButton {
    background-color: ${props => get(props,"theme.baseColors.coral", "")};
  }
`
// thumbs icons 
const Thumb = styled.img`
  height: auto;
  width: 15px;
  cursor: pointer;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const HelpfulText = styled.h3`
  margin-right: 5px;
`
const Bolda = styled.span`
  font-weight: 700;
  color: ${props => get(props,"theme.baseColors.coral", "")};
`

class Helpful extends Component {
  constructor(props) {
    super(props);
    this.state = {Voting: undefined};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(VoteYesOrNo) {
    if (this.state.Voting !== undefined){
      return
    } 
    this.setState({
      Voting: VoteYesOrNo
    });
  }

  render() {
      return (
          <div>   
             <HelpfulDiv>
                {this.state.Voting === undefined ? (
                  <HelpfulText>Var efnið hjálplegt?</HelpfulText>
                ) : (
                  <HelpfulText>Takk fyrir að svara!</HelpfulText>
                )}
                <ThumbsContainer>
                    <ThumbDiv className={this.state.Voting==="yes"? "activeButton":""}>
                        <Thumb  src={this.state.Voting==="yes"? ThumbUpWhite: ThumbsUpRed} alt="" onClick={() => this.handleClick("yes")}></Thumb>
                    </ThumbDiv>
                    <ThumbDiv className={this.state.Voting==="no"? "activeButton":""}>
                      <Thumb src={this.state.Voting==="no"? ThumbDownWhite: ThumbsDownRed} alt="" onClick={() => this.handleClick("no")}></Thumb>
                    </ThumbDiv>
                </ThumbsContainer>
                {this.state.Voting === "no" && 
                  <NoMessage>
                      <p>Fékkstu ekki svarið sem þú varst að leita að? <br/> Endilega sendu línu á <Bolda>netspjallið </Bolda> og þú færð svar eins fljótt og auðið er, nafnlaust!</p>
                  </NoMessage> 
                } 
            </HelpfulDiv> 
          </div>
      )
    }
};
    
export default Helpful;