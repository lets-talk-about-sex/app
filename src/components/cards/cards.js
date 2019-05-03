import React from 'react';
import { get } from 'lodash';
import Card from './card';
import DidYouKnow from './didyouknow';
import {CheckIfMatchesTags} from '../theme/filter';
import { Link } from "gatsby";



// import DidYouKnow from './didyouknow';


const Cards = (props) => {
   const {data} = props;
    console.log(props);
    console.log(data);
    console.log(get(data, 'id', []));
    const allArticles = get(data, 'prismic.allArticles.edges', []);
    console.log('All articles', allArticles);
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