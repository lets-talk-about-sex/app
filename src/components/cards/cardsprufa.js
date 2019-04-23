import React from 'react';
import { get } from 'lodash';
import Card from './card';
import {CheckIfMatchesTags} from '../theme/filter';
import DidYouKnowCard from './didyouknow_card';
import FactCard from './fact_card';


const AllCards = (props) => {
    let sortedArticles = [];
    for (var a = 0; a < 12; a++) {
        const allArticlesArr = get(props.data, 'prismic.allArticles.edges', []);
        const allArticles = allArticlesArr.filter((edge) => {
            return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
        }).map((edge, i)  =>  sortedArticles.push(<Card key={i} node={edge.node}/>))
    }    

    let sortedAllDidYouKnows = [];
    for (var b = 0; b < 5; b++) {
        const allDidYouKnowsArr = get(props.data, 'prismic.allDid_you_knows.edges', []);
        const allDidYouKnows = allDidYouKnowsArr.filter((edge) => {
            return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
        }).map((edge, i) => sortedAllDidYouKnows.push(<DidYouKnowCard key={i} node={edge.node}/>))
    }

    let sortedAllFacts = [];
    for (var c = 0; c < 3; c++) {
        const allFactsArr = get(props.data, 'prismic.allFactss.edges', []);
        const allFacts = allFactsArr.filter((edge) => {
            return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
        }).map((edge, i) => sortedAllFacts.push(<FactCard key={i} node={edge.node}/>))

    }

    const getSortedCards = () => {
        //Inn í þessu falli byrjum við með tómt array
        var sortedCards = [];
       
        /*Hér fáum við heildarfjölda allra spjalda, 
        þrjár tegundir spjalda */ 
        var totalLength = sortedArticles.length + sortedAllDidYouKnows.length + sortedAllFacts.length;
    
        /*Þessi while lúpa mun keyrast þar til búið er að birta öll spjöld(totalLenght reaches zero)
        Það er vegna þess að fyrir hvert spjald sem við birtum þá dregst eitt spjald 
        frá þangað til öll spjöldin eru búin */ 
        while (totalLength > 0) {
           /* .splice(0, 4) mun fjarlægja fyrstu fjögur spjöldin í allArticles arrayinu 
           og skila þeim út í nýju array*/
          var sortedArticles_round = sortedArticles.splice(0, 4);
    
          // Fyrst bætum við fjórum spjöldum við af Article-spjöldunum
          for (var i = 0; i < 4; i++) {
            /* sortedArticles_round er array sem er búin til úr fyrstu fjórum item-unum 
            sem eru eftir inní sortedArticles. 
            Hvert items í þessu array fer inn(push) í 
            sortedCards*/
    
            sortedCards.push(sortedArticles_round[i]);
          }
 
           /* Næst fjarlægjum við fyrsta itemið úr allDidYouKnows með splice og 
           setjuminn í sortedCards */
          var sortedAllDidYouKnows_round = sortedAllDidYouKnows.splice(0, 1);
          sortedCards.push(sortedAllDidYouKnows_round[0]);
    
          /* Næsta umferð af Article-spjöldum */
          var sortedArticles_round = sortedArticles.splice(0, 4);
          for (var i = 0; i < sortedArticles_round.length; i++) {
            sortedCards.push(sortedArticles_round[i]);
          }
    
          // Gerum það sama hér við Factspjöldin eins og við DidyouKnowspjöldin
          var sortedAllFacts_round = sortedAllFacts.splice(0, 1);
          sortedCards.push(sortedAllFacts_round[0]);
    
          /* Minnka totalLength. Þetta væri líka hægt að skrifa svona:
           totalLength = totalLength - 1 */
          totalLength--;
        }
    
        //Hér fáum við út nýja arrayið sortedCards:
        return sortedCards;
      };



    return (
    <div>
        {/* {sortedArticles}
        {sortedAllDidYouKnows}
        {sortedAllFacts} */}
        {/*Hér skilum við svo út spjöldunum*/}
        {getSortedCards()}

    </div>
    )
}

export default AllCards;

  
