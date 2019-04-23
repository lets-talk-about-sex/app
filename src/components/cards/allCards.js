import React from 'react';
import { get } from 'lodash';
import Card from './card';
import {CheckIfMatchesTags} from '../theme/filter';
import DidYouKnowCard from './didyouknow_card';
import FactCard from './fact_card';


const AllCards = (props) => {
    const allArticlesArr = get(props.data, 'prismic.allArticles.edges', []);
    const allArticles = allArticlesArr.filter((edge) => {
        return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
    }).map((edge, i) => <Card key={i} node={edge.node}/>)

    const allDidYouKnowsArr = get(props.data, 'prismic.allDid_you_knows.edges', []);
    const allDidYouKnows = allDidYouKnowsArr.filter((edge) => {
        return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
    }).map((edge, i) => <DidYouKnowCard key={i} node={edge.node}/>)

    const allFactsArr = get(props.data, 'prismic.allFactss.edges', []);
    const allFacts = allFactsArr.filter((edge) => {
        return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
    }).map((edge, i) => <FactCard key={i} node={edge.node}/>)

    return (
    <div>
        {allArticles}
        {allDidYouKnows}
        {allFacts}
    </div>
    )
}

export default AllCards;

  
