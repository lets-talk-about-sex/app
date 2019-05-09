import React from 'react';
import { get } from 'lodash';
import Card from './card';
import DidYouKnow from './didyouknow';
import {CheckIfMatchesTags} from '../theme/filter';
import { Link } from "gatsby";

const Cards = (props) => {
    const {data} = props;
    const allArticles = get(data, 'prismic.allArticles.edges', []);
    return (
        <div>
            {allArticles.filter((edge) => {
                return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
            }).map((edge, i) => {
                return(
                <Link to={edge.node._meta.uid} key={i} >
                    <Card key={i} node={edge.node}/>
                </Link>
                )
            })}
        </div>
    );
};

export default Cards;