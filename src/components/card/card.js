import React from 'react';
import styled from '@emotion/styled/macro';
import communication from 'assets/images/communication.png';
import condom from 'assets/images/condom.png';


const CardContainer = styled.div`
    width: 352px;
    height: 422px;
    padding-bottom: 24px;
    margin: 30px auto;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius:  0 0 15px 15px;
`

const Condom = styled.img`
  
`

const CardTitle = styled.h2`
   
`

const TitleWrapper = styled.h5`
    padding: 35px 0 10px 20px;
  
`

const Card = () => {
    return (
    <div>
        <CardContainer>
            <Condom src={communication} alt=""/>
            <TitleWrapper>
                <CardTitle>Samskipti</CardTitle>
            </TitleWrapper>
        </CardContainer>

        <CardContainer>
            <Condom src={condom} alt=""/>
            <TitleWrapper>
                <CardTitle>Smokkur</CardTitle>
            </TitleWrapper>
        </CardContainer>
    </div>
        
    );
};


export default Card;