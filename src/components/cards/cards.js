import React from 'react';
import { get } from 'lodash';
import Card from './card';
import { Link } from "gatsby";



const Cards = (props) => {
   const {data} = props;
    console.log(props);
    console.log(data);
    console.log(get(data, 'id', []));
    return (
        <div>
            {get(data, 'prismic.allArticles.edges', []).filter(article => {
                return true; //gera if statement með true og false eftir þvi hvað við viljum birta
            }).map((article, i) => {
                console.log("halló", article.node)
                return(
                    // á key að vera líka á link? Hugrún gerði útaf error
                <Link to={article.node._meta.uid} key={i} >
                    <Card key={i} node={article.node}></Card>
                </Link>
                )
            })}
        </div>
    );
};


export default Cards;