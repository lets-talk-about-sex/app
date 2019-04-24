import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
// import {Thumbs_up_red} from '../../assets/icon/Vector.svg';
// import {Thumbs_up_red} from '../../assets/icon/Thumbs_up_red.svg';

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
const Thumb = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.baseColors.coral};
  position: relative;
  margin-right: 15px;
`

const HelpfulText = styled.h3`
  margin-right: 30px;
`

const Helpful = (props) => {
    return (
        <div>
            <HelpfulDiv>
              <HelpfulText>Var efnið hjálplegt?</HelpfulText>
              <Thumb>
                <img src="../../assets/icon/Vector.svg"></img>
              </Thumb>
              <Thumb>
                {/* <img src={Thumbs_down_red}></img> */}
              </Thumb>
            </HelpfulDiv>     
        </div>
    )};
    

export default Helpful;