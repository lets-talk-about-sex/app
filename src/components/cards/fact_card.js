import React from 'react';
import quote from 'assets/icon/quote.svg';
import { RichText } from 'prismic-reactjs';
import {DidYouKnowContainer, Title, Text, Icon} from './didyouknow_card';

const FactCard = (props) => {
    return (
    <div>
        <DidYouKnowContainer>
            <div>
                <Icon src={quote} alt=""/>                
            </div>
            <div>
                <Title>Sturluð staðreynd</Title>
                <Text>{RichText.asText(props.node.fact)}</Text>
            </div>
        </DidYouKnowContainer>
    </div>
    )
};

export default FactCard;