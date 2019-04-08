import React from 'react';
import { get } from 'lodash';
import Card from './card';
import DidYouKnow from './didyouknow';
import {CheckIfMatchesTags} from '../theme/filter';
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
                //gera if statement með true og false eftir þvi hvað við viljum birta
                
               
            }).map((edge, i) => {
                return(
                <div>
                    <Card key={i} node={edge.node}/>
                    {/* <DidYouKnow key={i} node={edge.node} />
                    <Fact key={i} node={edge.node}/> */}
                  
                </div>
                )
            })}
        </div>
    );
};


export default Cards;