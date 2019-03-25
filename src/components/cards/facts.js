import React from 'react';
import styled from '@emotion/styled/macro';
import quote from 'assets/icon/quote.svg';
import {DidYouKnowContainer, Title, Text, Icon} from './didyouknow';





const Fact = () => {
    return (
    <div>
        <DidYouKnowContainer>
        <div>
             <Icon src={quote} alt=""/>                
        </div>
        <div>
            <Title>Sturluð staðreynd</Title>
            <Text>Meðal maður fer í reisn 11 sinnum á dag og 9 sinnum yfir nóttina.</Text>
        </div>
        </DidYouKnowContainer>
    </div>
    );
};

export default Fact;