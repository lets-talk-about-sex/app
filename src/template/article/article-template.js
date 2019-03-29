import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import Footer from 'components/footer/Footer';
import SmallCard from 'components/cards/small-card';
import SliceContent from 'components/slices/text';
import { renderSlices } from '../../components/slices/index.js';

const HeroBanner = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
    top: 0;
`

const HeroImg = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
`

const Close = styled.button`
   height: auto;
   width: 18px;
`


const Article = (props) => {
    console.log(props);
    const slices = renderSlices(props.pageContext.node.body);
    console.log("slices2", slices)
    
    return (
        <div>   
            <HeroBanner>
              <HeroImg src={props.pageContext.node.article_img.url}></HeroImg>
              <Close><i class="fas fa-times"></i></Close>
            </HeroBanner>

            <div>
              {/* <Category>KYNLÍF</Category> */}
              <div>
                <h1>{props.pageContext.node.title[0].text}</h1>
                <button><img src="../../assets/icon/share.svg"></img></button>
              </div>
              <div>
                <p>Samheiti</p>
                <p>{props.pageContext.node.synonyms[0].text}</p>
              </div>
              <p>{props.pageContext.node.intro_text[0].text}</p>
            </div>

          <div>
            <img></img>
            <h4>Typpi</h4>
            <i className="far fa-angle-right"></i>
          </div>

          {/* <Slicetext data={props.pageContext.node}/>   */}
          {/* Á eftir að tengja */}

          <div>
              <p>LESTU LÍKA</p>
                <SmallCard data={props.pageContext.node}/>
                <SmallCard data={props.pageContext.node}/>
                <SmallCard data={props.pageContext.node}/>
          </div>

          {slices}

          <Footer/>

        </div>
    )};
    

export default Article;