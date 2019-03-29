import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
// import sex from 'assets/images/sex.png';
// import iceboob from 'assets/images/iceboob.png';
import hot from 'assets/icon/hot.svg';



const SmallCardContainer = styled.div`
    width: 140px;
    height: 196px;
    padding-bottom: 24px;
    margin: 30px auto;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  15px;
`
const SmallImgWrapper = styled.div`
    height:140px;
    width: 196px;
`

const SmallSexImg = styled.img`
    border-radius:  15px 15px 0 0;
`

const SmallCardTitle = styled.h4`  
`
//muna að þegar spjald er með slug þá þarf height að vera 100px;
const SmallTitleWrapper = styled.div`
    height: 56px; 
    padding: 16px 10px;
    position: relative; 
`



const SmallCard = (props) => {
    console.log(props)
    return (
        <div>   
            <SmallCardContainer>
                <SmallImgWrapper>
                    <SmallSexImg src={props.data.article_img?props.data.article_img.url:""}></SmallSexImg>
                </SmallImgWrapper>
                <SmallTitleWrapper>
                    <SmallCardTitle>{props.data.title[0].text}</SmallCardTitle>
                </SmallTitleWrapper>
            </SmallCardContainer>
        </div>
    )};
    

export default SmallCard;