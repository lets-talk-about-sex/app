import React from 'react';
// import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

import ArrowRight from '../../assets/icon/article/arrowRightLinks.svg';

const LinksTitle = styled.h3`
    margin: 30px 0px 20px 0px;
`

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
`

const LineTheFine = styled.span`
    background-color: #FC4255;
    height: 27px;
    width: 4px;
    border-radius: 50px; 
`

// const BoldSpan = styled.span`
//     font-weight: 700;
//     margin-left: 20px;
    
// `

const SliceLink = ({link, heading}) => {
  
    return (
        <div>   
            <LinksTitle>Fylgstu með tíðahringnum í appi</LinksTitle>
            <a href={link}>
                <EinnLinkurDiv>
                    <LineTheFine></LineTheFine>
                    <p>{heading}</p>
                    <ArrowDiv>
                        <ArrowImg src={ArrowRight} alt=""></ArrowImg>
                    </ArrowDiv>
                </EinnLinkurDiv>
            </a>
            {/* <a href="https://flo.health/">
                <EinnLinkurDiv>
                    <LineTheFine></LineTheFine>
                    <p><BoldSpan>Flo</BoldSpan> - Period and Ovulation tracker</p>
                    <ArrowDiv>
                        <ArrowImg src={ArrowRight} alt=""></ArrowImg>
                    </ArrowDiv>
                </EinnLinkurDiv>
            </a>
            <a href="https://flo.health/">
                <EinnLinkurDiv>
                    <LineTheFine></LineTheFine>
                    <p><BoldSpan>Flo</BoldSpan> - Period and Ovulation tracker</p>
                    <ArrowDiv>
                        <ArrowImg src={ArrowRight} alt=""></ArrowImg>
                    </ArrowDiv>
                </EinnLinkurDiv>
            </a> */}
            
            
            
            {/* <a><BoldSpan>Clue</BoldSpan> - Period and Ovulation tracker</a>
            <a><span>Menstrual</span> Period tracker</a>
            <a><span>Monthly Cycles</span> app</a> */}
        </div>
    )};
    

export default SliceLink;