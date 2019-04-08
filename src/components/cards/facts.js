import React from 'react';
import styled from '@emotion/styled/macro';
import quote from 'assets/icon/quote.svg';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import {DidYouKnowContainer, Title, Text, Icon} from './didyouknow';
import {CheckIfMatchesTags} from '../theme/filter';

const Fact = (props) => {
    console.log('TEST')
    const edges = props.data.prismic.allFactss.edges;
    console.log(edges)
    return (
        <div>
        {edges.filter((edge) => {
                return CheckIfMatchesTags(edge.node._meta.tags, props.filtering)
                //gera if statement með true og false eftir þvi hvað við viljum birta
            }).map((edge) => {
            return (
            <div>
                <DidYouKnowContainer>
                <div>
                    <Icon src={quote} alt=""/>                
                </div>
                <div>
                    <Title>Sturluð staðreynd</Title>
                    <Text>{RichText.asText(edge.node.fact)}</Text>
                </div>
                </DidYouKnowContainer>
            </div>
            )
        })}
        </div>
    );
};

export default Fact;