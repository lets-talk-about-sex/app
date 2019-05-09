import React from 'react';
import { get } from 'lodash';
import Card from './card';
import {CheckIfMatchesTags} from '../theme/filter';
import DidYouKnowCard from './didyouknow_card';
import FactCard from './fact_card';
import {Link} from 'gatsby';

// Function React Component AllCards sem tekur inn props
const AllCards = (props) => {
    let allArticlesArr = get(props.data, 'prismic.allArticles.edges', [])
    .filter(oneCard => CheckIfMatchesTags(oneCard.node._meta.tags, props.filtering))
    for (let i = allArticlesArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allArticlesArr[i], allArticlesArr[j]] = [allArticlesArr[j], allArticlesArr[i]];
    }

    let allDidYouKnowsArr = get(props.data, 'prismic.allDid_you_knows.edges', [])
    .filter(oneDYK => CheckIfMatchesTags(oneDYK.node._meta.tags, props.filtering));
    let allFactsArr = get(props.data, 'prismic.allFactss.edges', [])
    .filter(oneFact => CheckIfMatchesTags(oneFact.node._meta.tags, props.filtering));

    //búa til nýtt array sem tekur inn allar 3 tegundir af spjöldunum
    // þegar i er 3 setur inn AllDid..
    //Cardcounter er 0 til þess að sleppa ekki 4. spjalda í array-inu því erum að setja didyouknow og fact inn á milli article spjalda
    const allCardsArr = [];
    let cardCounter = 0;

     for( let i = 0; i < allArticlesArr.length + allDidYouKnowsArr.length + allFactsArr.length; i++) {
         if (i % 8 === 3) {
          allCardsArr.push(allDidYouKnowsArr[Math.floor(Math.random()* allDidYouKnowsArr.length)])
          cardCounter++
        }
        else if ( i % 8 === 7)  {
            allCardsArr.push(allFactsArr[Math.floor(Math.random()* allFactsArr.length)])
            cardCounter++
        }
        else {
            if (allArticlesArr[i - cardCounter])  {
                allCardsArr.push(allArticlesArr[i - cardCounter])
            }
            else {
                break;
            }
        }  
     }
 
    const getFeed = () => {
        let allArticles = allCardsArr.map((edge, i) => {
            let SomeCard;
            if (edge.node.article_img) {
                SomeCard = Card;
            }
            else if (edge.node.didyouknow) {
                SomeCard = DidYouKnowCard;
            }
            else if (edge.node.fact) {
                SomeCard = FactCard;
            }
           //bæta við props í node object-ið, bæta við key sem er filter, til að láta slugs birtast bara í Allt flokknum
           edge.node.filter=props.filtering
            return(
                <React.Fragment key={i}>
                    <Link to={edge.node._meta.uid} key={i} >
                        <SomeCard key={i} node={edge.node}/>
                    </Link>
                </React.Fragment>
            )
        })
        
        return allArticles;
    }

    return (
    <div>
        {getFeed()}
    </div>
    )
}

export default AllCards;








  
