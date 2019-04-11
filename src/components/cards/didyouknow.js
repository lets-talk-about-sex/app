import React from 'react';
import styled from '@emotion/styled/macro';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import didyouknow from 'assets/icon/question.svg';

const DidYouKnowContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 354px;
    height: auto;
    min-height: 150px;
    padding: 50px 31px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  15px;
    margin: 30px auto;
`

const Title = styled.p`
    color: ${props => props.theme.baseColors.coral};
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
`
const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`

const Icon = styled.img`
  margin-bottom: 5px;
`

const DidYouKnow = (props) => {
    console.log('did you know')
    const edges = props.data.prismic.allDid_you_knows.edges;
    console.log(edges)
    return (
        <div>
        {edges.map((edge) => {
            return (
            <div>
                <DidYouKnowContainer>
                    <div>
                        <Icon src={didyouknow} alt=""/>                
                    </div>
                    <div>
                        <Title>Vissir þú?</Title>
                        <Text>{RichText.asText(edge.node.didyouknow)}</Text>
                    </div>
                </DidYouKnowContainer>
            </div>
            )
        })}
        
        </div>
    );
};

export default DidYouKnow;

export {DidYouKnowContainer, Title, Text, Icon};




