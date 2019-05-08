import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled/macro';

const CardContainer = styled.div`
    width: 100%;
    height: 450px;
    padding-bottom: 24px;
    margin-bottom: 30px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  15px;
    background-color: #fff;
`
const ImgWrapper = styled.div`
    height:350px;
    width: 100%;
`
const SexImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius:  15px 15px 0 0;
    object-fit: cover;
`
//muna að þegar spjald er með slug þá þarf height að vera 100px;
const TitleWrapper = styled.div`
    height: 90px; 
    padding: 30px 0 30px 29px; 
    position: relative; 
`
const Slug = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #FC4255;
`

const CardTitle = styled.h2`  
`
const Hot = styled.img`
  position: absolute;
  top : -22px;
  left: 30px;
`

const Card = (props) => {
    return (
        <div> 
            <CardContainer>
                <ImgWrapper>
                    <SexImg src={props.node.article_img?props.node.article_img.url:""}></SexImg>
                </ImgWrapper>
                <TitleWrapper>
                    {props.node.hot &&
                    <Hot src={props.node.hot.url}></Hot>
                    }
                    <Slug>{props.node.filter?"":props.node._meta.tags[0]}</Slug>
                    <CardTitle>{RichText.asText(props.node.title)}</CardTitle>
                </TitleWrapper>
            </CardContainer>
        </div>
    )};
    
export default Card;