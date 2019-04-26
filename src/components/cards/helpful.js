import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import ThumbsUpRed from '../../assets/icon/article/thumbsup.svg';
import ThumbsDownRed from '../../assets/icon/article/thumbsdown.svg';

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

const Helpful = (props) => {
    return (
        <div>
            <HelpfulDiv>
              <HelpfulText>Var efnið hjálplegt?</HelpfulText>
              <ThumbDiv>
                <Thumb src={ThumbsUpRed} alt="" onClick=""></Thumb>
              </ThumbDiv>
              <ThumbDiv>
              <Thumb src={ThumbsDownRed} alt=""></Thumb>
              </ThumbDiv>
            </HelpfulDiv>     
        </div>
    )};
    

export default Helpful;