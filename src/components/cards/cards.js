import React from 'react';
import { get } from 'lodash';
import Card from './card';
import DidYouKnow from './didyouknow';
import {CheckIfMatchesTags} from '../theme/filter';

const Cards = (props) => {
    const {data} = props;
    const allArticles = get(data, 'prismic.allArticles.edges', []);

    const allArticlesReturn = allArticles.filter((edge) => {
        return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
    }).map((edge, i) => <Card key={i} node={edge.node}/>)
    console.log( "Hello Articles", allArticlesReturn);
    return (
        <div>
            {allArticlesReturn}
        </div>
    );
};


export default Cards;