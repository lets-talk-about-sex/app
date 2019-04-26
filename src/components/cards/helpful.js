import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';

import styled from '@emotion/styled/macro';
import ThumbsUpRed from '../../assets/icon/article/thumbsup.svg';
import ThumbsDownRed from '../../assets/icon/article/thumbsdown2.svg';

const HelpfulDiv = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(0,0,0,0.1);
  align-items: center;
  padding-left: 30px;
  margin-top: 30px;
`
const ThumbDiv = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.baseColors.coral};
  position: relative;
  margin-right: 15px;
  &:active {
    background-color: ${props => props.theme.baseColors.coral};
  }
`

// thumbs mynd 
const Thumb = styled.img`
  height: auto;
  width: 18px;
  cursor: pointer;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
`

const HelpfulText = styled.h3`
  margin-right: 30px;
`

// var ThumbsUpSwap = document.querySelectorAll("img");
// ThumbsUpSwap.addEventListener('click', function() {
//   if (img.getAttribute("data-text-swap") == img.innerHTML) {
//     img.innerHTML = img.getAttribute("data-text-original");
//   } else {
//     button.setAttribute("data-text-original", button.innerHTML);
//     button.innerHTML = button.getAttribute("data-text-swap");
//   }
// }, false);

// export default class Button extends Component{
//   render(){
//     return(
//       <div>
//         <button onClick={this.props.click}>{this.props.text}</button>
//       </div>
//     )
//   }
//  }


//  class App extends Component {
  
//   // verkefni 1
//    constructor(props){
//      super(props)
//        this.state = {
//          text: “ýta hér”
//      }
//    }
  
//    changeText = () =>{
//      this.setState({text: “hallo”})
//    };
  
//    render() {
//      return (
//        <div className=“App”>
//          <Button
//            //ýta hér
//            text={this.state.text}
//            //hallo
//            click={this.changeText}
//          ></Button>
//        </div>
//      );
//    }
//   }
  
  
  
  // export default App;

const Helpful = (props) => {
    return (
        <div>
            <HelpfulDiv>
              <HelpfulText id="pText" >Var efnið hjálplegt?</HelpfulText>
              <ThumbDiv>
                <img  src={ThumbsUpRed} alt="" onclick="changeText(this.value);" value="Thumbs Up" ></img>
                {/* <Thumb src={ThumbsUpRed} alt="" onclick="changeText(this.value);" value="Thumbs Up"></Thumb> */}
              </ThumbDiv>
              <ThumbDiv>
              <Thumb src={ThumbsDownRed} alt="" value="Thumbs Down"></Thumb>
              </ThumbDiv>
            </HelpfulDiv>     
        </div>
    )};
    

export default Helpful;