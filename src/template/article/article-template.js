import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import Footer from 'components/footer/Footer';
import SmallCard from 'components/cards/small-card';

// import SliceContent from 'components/slices/text';
import { renderSlices } from '../../components/slices/index.js';

import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';

const HeroBanner = styled.div`
    margin-left: -30px;
    width: calc(100% + 60px);
    height: 60vh;
`

const HeroImg = styled.img`
    width: 100%;
    height: 100%; 
    // object-fit: ;
`

const Close = styled.button`
   height: auto;
   width: 18px;
`
// container - á að taka í burtu 
const Container = styled.div`
   margin: 0 30px;
`

// titill
const Title = styled.h1`
   margin: 20px 0;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
   font-size: 32px;
`
// heldur utan um tiitl og share
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
// samheiti
const Synonym = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  margin-right: 15px;
`

const SynonymDiv = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;
`
const LongCard = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(0,0,0,0.1);
  align-items: center;
`

const LongCardImg = styled.img`
  height: 80px;
  width: 80px;
  object-fit: fill;
  background-color: grey;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-right: 25px;
`

const LongCardTitle = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`

const Read = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: #FC4255;
  margin-top: 30px;
`

const SmallCardDiv = styled.div`
 display: flex;
 height: 200px;
`



const Article = (props) => {

    const slices = renderSlices(props.pageContext.node.body);
    
    return (
        <div> 
          <ThemeProvider theme={theme}>
            <Global>
              <Container>
                <HeroBanner>
                  <HeroImg src={props.pageContext.node.article_img.url}></HeroImg>
                  <Close><i class="fas fa-times"></i></Close>
                </HeroBanner>
                <div>
                  {/* <Category>KYNLÍF</Category> */}
                  <TitleDiv>
                    <Title>{props.pageContext.node.title[0].text}</Title>
                    <button><img src="../../assets/icon/share.svg"></img></button>
                  </TitleDiv>

                  <SynonymDiv>
                    <Synonym>Samheiti</Synonym>
                    <p>{props.pageContext.node.synonyms[0].text}</p>
                  </SynonymDiv>

                  <p>{props.pageContext.node.intro_text[0].text}</p>
                </div>

                <LongCard>
                  <LongCardImg></LongCardImg>
                  <LongCardTitle>Typpi</LongCardTitle>
                  <i className="far fa-angle-right"></i>
                </LongCard>

                {slices}

                <Read>LESTU LÍKA</Read>
                <SmallCardDiv>
                    <SmallCard data={props.pageContext.node}/>
                    <SmallCard data={props.pageContext.node}/>
                    {/* <SmallCard data={props.pageContext.node}/> */}
                </SmallCardDiv>

                

              <Footer/>
            </Container>
          </Global>
        </ThemeProvider> 
      </div>
    )};
    

export default Article;