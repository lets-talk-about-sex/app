import React from 'react';
import styled from '@emotion/styled/macro';
import {Link} from 'gatsby';


const SmallCardWrapper = styled.div`
    position: relative;
    height: 250px;
    overflow: hidden;
`
//container and styles for smallCard
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
    border-radius: 10px 10px 0 0;
    height: 100%;
    object-fit: cover;
`
const SmallCardTitle = styled.h4` 
    font-family: Poppins;
`
const SmallTitleWrapper = styled.div`
    height: 56px; 
    padding: 16px 10px;
    position: relative; 
`
const SmallCardCarousel = styled.div`
    display: flex;
    height: 250px;
    height: 280px;
    width: 100% !important;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-left: 30px;
    position: relative;
    z-index: 999;
    &::-webkit-scrollbar {
        display: none;
    }
`

const SmallCard = (props) => {
    return (
        <SmallCardWrapper>
            <SmallCardCarousel> 
                {props.smallCards.map((item, i) => {
                return  item.link_to_article && 
                    <Link key={i} to={"/"+item.link_to_article._meta.uid}>
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
        </SmallCardWrapper>
    )};
    
export default SmallCard;
