import React from 'react';
import { get } from 'lodash';
import Card from './card';




const Cards = (props) => {
   const {data} = props;
    console.log(props);
    console.log(data);
    console.log(get(data, 'id', []));
    return (
        <div>
            {get(data, 'prismic.allArticles.edges', []).filter(edge => {
                return true; //gera if statement með true og false eftir þvi hvað við viljum birta
            }).map((edge, i) => {
                return(
                <Card key={i} node={edge.node}></Card>
                )
            })}
        </div>
    );
};


export default Cards;