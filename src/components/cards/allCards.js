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


    //Create new array that takes in all 3 types of cards
    // when i is 3 then put in AllDidYouKnow card
    //Cardcounter is 0 so it will not skip 4th card in the array
    //because we are adding didyouknow and fact between article card
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
 //getFeed are all card types, we create Somecard and tell when to put in an article card, didyouknow card and fact card with an if statement. 
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
           
           //add props in node object, then add the key that´s a filter, so slugs are showing only when the category Allt is active
           edge.node.filter=props.filtering
           
            return(
                <React.Fragment key={i}>
                    {edge.node.article_img?( <Link to={edge.node._meta.uid} key={i} duration={3}> 
                        <SomeCard key={i} node={edge.node}/>
                    </Link> ): <SomeCard key={i} node={edge.node}/> }
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








  
