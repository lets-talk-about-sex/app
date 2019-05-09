import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import styled from '@emotion/styled/macro';
import { Link, navigate } from "gatsby"
import { renderSlices } from '../../components/slices/index.js';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import {keyframes} from 'emotion';
import { Container } from 'components/theme/container';


// keyframe fyrir hvernig article á að opnast
const ContentAnimation = keyframes`
    0% {
      transform: translateY(100vh) scale(0.8);
      opacity:0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity:1;
    }
`
// keyframe fyrir hverning article á að lokast
const ExitAnimation = keyframes`
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
`
const Animation = styled.div`
    position: relative;
    animation: ${ContentAnimation} 0.7s cubic-bezier(.48,.49,.5,1.10); 
    &.exitAnimation {
      animation: ${ExitAnimation} 0.5s ease; 
    }
    &.transitionIsDone {
      display:none;
  }
`
// Bannermynd
const HeroBanner = styled.div`
    margin-left: -30px;
    width: calc(100% + 60px);
    height: 60vh;
    position: relative;
`
const HeroImg = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
`
//loka modal takki
const Close = styled.img`
   height: auto;
   width: 18px;
   cursor: pointer;
   position: absolute;
   top: 25px;
   right: 30px;
`
const Hot = styled.img`
  position: absolute;
  bottom : -22px;
  left: 30px;
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
// heldur utan um titil og share
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
  object-fit: cover;
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
const Intro = styled.p`
 margin-bottom: 30px;
`
class Article extends React.Component {
  constructor( ) {
    super();
    this.state = {
      className: "",

    };
  }
    render() {
      let slices;
      const props = this.props;
      if(props.pageContext && props.pageContext.node.body) {
        slices = renderSlices(get(props, "pageContext.node.body", []));
      } else {
        slices = [];
      }
  
      const closeArticle = () => {
        // geri eitthvað hér sem sýnir animation
        this.timerHandle = setTimeout(() => {
          navigate('/feed')
          }, 500);

        this.setState({
          className: "exitAnimation"
        })
      }
      return (
          <div> 
          <ThemeProvider theme={theme}>
            <Global>
            {props.pageContext? (
              <Container>
                <Animation className={this.state.className}> 
                <HeroBanner>
                  <HeroImg alt="" src={props.pageContext.node.article_img.url}></HeroImg>
                  <Close onClick={closeArticle} src={closeButton} alt=""></Close>
                  {props.pageContext.node.hot &&
                    <Hot src={props.pageContext.node.hot.url}></Hot>
                  }
                </HeroBanner>
                    <FirstSectionDiv>
                    <CategoryDiv>
                       <Link to="/feed"
                       state={{categoryTag:props.pageContext.node._meta.tags[0]}}>
                       <Category>{props.pageContext.node._meta.tags[0]}</Category>
                       </Link>
                     </CategoryDiv>
                      <TitleDiv>
                        <Title>{props.pageContext.node.title[0].text}</Title>
                        <ShareComponent location={props.location}></ShareComponent> 
                      </TitleDiv>
                  {props.pageContext.node.synonyms[0].text &&
                  <SynonymDiv>
                    <Synonym>Samheiti</Synonym>
                    <p>{props.pageContext.node.synonyms[0].text}</p>
                  </SynonymDiv>
                  }
                  <Intro>{RichText.render(props.pageContext.node.intro_text)}</Intro>
                </FirstSectionDiv>
                {props.pageContext.node.link &&
                <Link to={props.pageContext.node.link._meta.uid}>
                  <LongCard>
                    <LongCardImg src={props.pageContext.node.link.article_img.url}></LongCardImg>
                    <LongCardTitle>{props.pageContext.node.link.title[0].text}</LongCardTitle>
                  </LongCard>
                </Link>
                }
                {slices}
                <Helpful></Helpful>
                <Read>LESTU LÍKA</Read>
              </Animation>
            </Container>
            ):<div>loading</div>}
          </Global>
        </ThemeProvider> 
            <Link to={get(props, "pageContext.node.small_card[0].link_to_article._meta.uid", "")}>
              <SmallCard smallCards={get(props, "pageContext.node.small_card", [])}/>
            </Link>
        <Footer/>
      </div>
      )
    }
};
    
export default Article;