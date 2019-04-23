import React from 'react';
import { get } from 'lodash';
import styled from '@emotion/styled/macro';
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby';
import didyouknow from 'assets/icon/question.svg';
import {CheckIfMatchesTags} from '../theme/filter';
import DidYouKnowCard from './didyouknow_card';

const DidYouKnows= (props) => {
    const {data} = props;
    const didYouKnowCards = get(data, 'prismic.allDid_you_knows.edges', [])

    const allDidYouKnowCardsReturn = didYouKnowCards.filter((edge) => {
        return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
    }).map((edge, i) => <DidYouKnowCard  key={i} node={edge.node}/>)
    console.log( "Hello Did you know cards", allDidYouKnowCardsReturn);
    return (
        <div>
            {allDidYouKnowCardsReturn}
        </div>
    );
};

export default DidYouKnows;



