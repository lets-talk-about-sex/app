import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import { Link } from "gatsby"

import closeButton from '../../assets/icon/article/close.svg';

import Footer from 'components/footer/Footer';
import SmallCard from 'components/cards/small-card';

import Helpful from 'components/cards/helpful';
import ShareComponent from 'components/cards/share';
import OutsideLinks from 'components/slices/outsideLinks';

import { renderSlices } from '../../components/slices/index.js';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';

// Bannermynd
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

//loka modal takki
const Close = styled.img`
   height: auto;
   width: 18px;
   cursor: pointer;
   position: absolute;
  top: 50px;
  right: 30px;
`

// container - á að taka í burtu 
const Container = styled.div`
   margin: 0 30px;
`

// category container
const CategoryDiv = styled.div`
   color: #FC4255;
   border: 1px solid #FC4255;
   display: inline;
   padding: 5px 10px;
   border-radius: 5px;
`

// category
const Category = styled.h6`
   color: #FC4255;
   font-weight: 700;
   display: inline;
`

// allt fyrsta section
const FirstSectionDiv = styled.div`
   margin-top: 50px;
   position: relative;
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

// langt card
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

// lítið kort 
const SmallCardDiv = styled.div`
 display: flex;
 height: 250px;
 width: auto;
 margin-bottom: 50px;
 overflow-x: auto;
 scroll-behavior: smooth;
  & ::-webkit-scrollbar {
  display: none;
  }
`

const Intro = styled.p`
 margin-bottom: 30px;
`


const Article = (props) => {

    const slices = renderSlices(props.pageContext.node.body);
    
    return (
        <div> 
          <ThemeProvider theme={theme}>
            <Global>
              <Container>
                <HeroBanner>
                  <HeroImg alt="" src={props.pageContext.node.article_img.url}></HeroImg>
                  <Link to="/"><Close src={closeButton} alt=""></Close></Link>
                </HeroBanner>
                
                <FirstSectionDiv>

                  <CategoryDiv>
                    {/* spurning um að gera function hér sem gerir það að verkum að ef article er með fleiri en eitt tag þá birtast þau öll? */}
                    <Category>{props.pageContext.node._meta.tags[0]}</Category>
                  </CategoryDiv>

                  <TitleDiv>
                    <Title>{props.pageContext.node.title[0].text}</Title>
                    
                    <ShareComponent></ShareComponent>
                    
                  </TitleDiv>

                  <SynonymDiv>
                    <Synonym>Samheiti</Synonym>
                    <p>{props.pageContext.node.synonyms[0].text}</p>
                  </SynonymDiv>

                  <Intro>{props.pageContext.node.intro_text[0].text}</Intro>

                </FirstSectionDiv>

                <LongCard>
                  <LongCardImg src={props.pageContext.node.link.article_img.url}></LongCardImg>
                  <LongCardTitle>{props.pageContext.node.link.title[0].text}</LongCardTitle>
                </LongCard>

                {slices}

                <Helpful></Helpful>
                <OutsideLinks></OutsideLinks>

                <Read>LESTU LÍKA</Read>
                <SmallCardDiv>
                    <SmallCard data={props.pageContext.node}/>
                    <SmallCard data={props.pageContext.node}/>
                    <SmallCard data={props.pageContext.node}/>
                    <SmallCard data={props.pageContext.node}/>
                    {/* <SmallCard data={props.pageContext.node}/> */}
                </SmallCardDiv>

              
            </Container>
          </Global>
        </ThemeProvider> 
        <Footer/>
      </div>
    )};


    //livechat widget
  //   <script type="text/javascript">
  //     window._chatlio = window._chatlio||[];
  //     !function(){ var t=document.getElementById("chatlio-widget-embed");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");
  //       n.setAttribute('data-widget-id','2c5a506b-18b2-407e-5dc3-dfebac4d8b9b');
  //       c.parentNode.insertBefore(n,c);
  //     }();
  // </script>
    

export default Article;