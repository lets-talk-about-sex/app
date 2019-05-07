import React from 'react';
import { get } from 'lodash';
import styled from '@emotion/styled/macro';
import hot from 'assets/icon/hot.svg';
import {Link} from 'gatsby';



const SmallCardContainer = styled.div`
    width: 140px;
    height: 196px;
    padding-bottom: 24px;
    margin-right: 10px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 15px;
`
const SmallImgWrapper = styled.div`
    height:140px;
    width: 140px;
`

const SmallSexImg = styled.img`
    border-radius:  10px 10px 0 0;
    height: 100%;
    object-fit: cover;
`

const SmallCardTitle = styled.h4` 
    font-family: Poppins;
`
//muna að þegar spjald er með slug þá þarf height að vera 100px;
const SmallTitleWrapper = styled.div`
    height: 56px; 
    padding: 16px 10px;
    position: relative; 
`

const SmallCardCarousel = styled.div`
    display: flex;
    height: 250px;
    width: auto;
    margin-bottom: 50px;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 30px;
        & ::-webkit-scrollbar {
        display: none;
        }
`

const SmallCard = (props) => {
    // console.log('renderaði small card')
    // console.log('title', props.title)
    // console.log('image', props.image)
    console.log(props)
    
    return (
        <SmallCardCarousel> 
            {props.smallCards.map((item, i) => {
            return  item.link_to_article && 
                <Link to={item.link_to_article._meta.uid}>
                    <SmallCardContainer>
                        <SmallImgWrapper>
                            <SmallSexImg src={item.link_to_article.article_img.url} />
                        </SmallImgWrapper>
                        <SmallTitleWrapper>
                            <SmallCardTitle>{item.link_to_article.title[0].text}</SmallCardTitle>
                        </SmallTitleWrapper>
                    </SmallCardContainer>
                </Link>
        })}
        </SmallCardCarousel>
    )};
    

export default SmallCard;
