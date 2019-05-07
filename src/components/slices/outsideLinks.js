import React from 'react';
import styled from '@emotion/styled/macro';
import { RichText } from 'prismic-reactjs';

import ArrowRight from '../../assets/icon/article/arrowRightLinks.svg';

const ArrowDiv = styled.div`
    height: 27px;
    width: 27px;
    background-color: #FC4255;
    border-radius: 50%;
    position: relative;
    position: absolute;
    right: 30px;
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
const EinnLinkurDiv = styled.div`
    display:flex;
    margin-bottom: 15px;
    align-items: center;
    margin-top: 15px;
`

const LineTheFine = styled.span`
    background-color: #FC4255;
    height: 27px;
    width: 4px;
    border-radius: 50px; 
`

const LinkName = styled.p`
    margin-left: 20px;    
`

const SliceLink = ({link, heading}) => {
  
    return (
        <div>   
            <a href={link}>
                <EinnLinkurDiv>
                    <LineTheFine></LineTheFine>
                    <LinkName>{heading}</LinkName>
                    <ArrowDiv>
                        <ArrowImg src={ArrowRight} alt=""></ArrowImg>
                    </ArrowDiv>
                </EinnLinkurDiv>
            </a>
        </div>
    )};
    

export default SliceLink;