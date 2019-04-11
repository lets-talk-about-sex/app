import React from 'react';
import { get } from 'lodash';
import Card from './card';
import { Link } from "gatsby";


// import DidYouKnow from './didyouknow';

const CheckIfMatchesTags = (tagsArray, activefilter) => {
    if(activefilter === ''){
        return true
    }
let i;
 for ( i = 0;  i < tagsArray.length;i++) {
     console.log(tagsArray[i])
    if(activefilter === tagsArray[i]) {
         return true;
    } 
 }
}


const Cards = (props) => {
   const {data} = props;
    console.log(props);
    console.log(data);
    console.log(get(data, 'id', []));
    return (
        <div>

            {get(data, 'prismic.allArticles.edges', []).filter((edge, filtering) => {
                if (CheckIfMatchesTags(edge.node._meta.tags, props.filtering)){
                    return true; //gera if statement með true og false eftir þvi hvað við viljum birta
                }
               
            }).map((edge, i) => {
                return(

                
                <Link to={edge.node._meta.uid} key={i} >
                    <Card key={i} node={edge.node}/>
                    {/* <DidYouKnow data={this.props.data} /> */}
                </Link>

                )
            })}
        </div>
    );
};


export default Cards;