import React from 'react';
import styled from '@emotion/styled/macro';

//icon for right arrow
import ArrowRight from '../../assets/icon/article/arrowRightLinks.svg';

const EinnLinkurDiv = styled.div`
    display: flex;
    margin: 15px 0;
    align-items: center;
    // width: 100%;
`
const ArrowDiv = styled.div`
    height: 27px;
    width: 27px;
    background-color: #FC4255;
    border-radius: 50%;
    position: relative;
    position: absolute;
    right: 0;
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
const LineTheFine = styled.span`
    background-color: #FC4255;
    height: 27px;
    width: 4px;
    border-radius: 50px; 
`
const LinkName = styled.div`
    margin-left: 20px;    
`
const SliceLink = ({link, heading}) => {
  
    return (
        <div>   
            <a href={link} target="blank" rel="noopener noreferrer" >
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