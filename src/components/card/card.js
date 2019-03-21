import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import sex from 'assets/images/sex.png';
import iceboob from 'assets/images/iceboob.png';
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
    border-radius:  15px 15px 0 0;
`

const CardTitle = styled.h2`  
`
//muna að þegar spjald er með slug þá þarf height að vera 100px;
const TitleWrapper = styled.h5`
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
   const {data} = props;
    console.log(data);
    return (
    <div>
        <CardContainer>
            <ImgWrapper>
                <SexImg src={iceboob} alt=""/>
            </ImgWrapper>
            <TitleWrapper>
                <HotIcon src={hot} alt=""/>                
                <Slug>Kynþroski</Slug>
                <CardTitle>{RichText.asText(get(data, 'prismic.article.title', [{}]))}</CardTitle>
            </TitleWrapper>
        </CardContainer>

        <CardContainer>
            <ImgWrapper>
                <SexImg src={sex} alt=""/>
            </ImgWrapper>
            <TitleWrapper>
                <Slug>Kynlíf</Slug>
                {/* <CardTitle>Smokkur</CardTitle> */}
            </TitleWrapper>
        </CardContainer>
    </div>
    );
};


export default Card;