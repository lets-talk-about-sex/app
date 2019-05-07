import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import quote from 'assets/icon/quote.svg';

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
    margin: 30px auto;
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

const SliceRepeatFact = ({repeat}) => {
  
    return (
        <div> 
            <DidYouKnowContainer>
                <div>
                    <Icon src={quote} alt=""/>                
                </div>
                <div>
                    <Title>Sturluð staðreynd</Title>
                    <Text>{repeat}</Text>
                </div>
            </DidYouKnowContainer> 
        </div>
    )};


export default SliceRepeatFact;

