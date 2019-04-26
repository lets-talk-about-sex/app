import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import hot from 'assets/icon/hot.svg';

const CardContainer = styled.div`
    width: 354px;
    height: 450px;
    padding-bottom: 24px;
    margin: 30px auto;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  15px;
`
const ImgWrapper = styled.div`
    height:350px;
    width: 354px;
`

const SexImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius:  15px 15px 0 0;
`

const CardTitle = styled.h2`  
`
//muna að þegar spjald er með slug þá þarf height að vera 100px;
const TitleWrapper = styled.div`
    height: 90px; 
    padding: 30px 0 30px 29px;
    position: relative; 
`

const HotIcon = styled.img`
    position: absolute;
    top:-15px;
`

const Slug = styled.h5`
    text-transform: uppercase;
`

const Card = (props) => {
    return (
        <div>   
            <CardContainer>
                <ImgWrapper>
                    <SexImg src={props.node.article_img?props.node.article_img.url:""}></SexImg>
                </ImgWrapper>
                <TitleWrapper>
                    {/* <HotIcon src={hot} alt=""/> */}
                    {/* <Slug>Kynþroski</Slug> */}
                    <CardTitle>{RichText.asText(props.node.title)}</CardTitle>
                </TitleWrapper>
            </CardContainer>
        </div>
    )};
    
export default Card;