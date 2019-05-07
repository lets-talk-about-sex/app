import React from 'react';
import styled from '@emotion/styled/macro';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import didyouknow from 'assets/icon/question.svg';
import {CheckIfMatchesTags} from '../theme/filter';

const DidYouKnowContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: auto;
    min-height: 150px;
    padding: 50px 31px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  15px;
    margin-bottom: 30px ;
    background-color: #fff;
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

const DidYouKnowCard = (props) => {
    return (
            <div>
                <DidYouKnowContainer>
                    <div>
                        <Icon src={didyouknow} alt=""/>                
                    </div>
                    <div>
                        <Title>Vissir þú?</Title>
                        <Text>{RichText.asText(props.node.didyouknow)}</Text>
                    </div>
                </DidYouKnowContainer>
            </div>
    );
};

export default DidYouKnowCard;

export {DidYouKnowContainer, Title, Text, Icon};




