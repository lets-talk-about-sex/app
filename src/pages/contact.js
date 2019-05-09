import React from 'react';
import Footer from 'components/footer/Footer';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Link } from "gatsby";
import closeButton from '../assets/icon/article/close.svg';
//Photos for contact
import Phone from '../assets/icon/phone.svg';
import Email from '../assets/icon/envelope.svg';
import LandingPage from '../assets/icon/browser.svg';

const Container = styled.div`
   margin: 0 30px;
   height: auto;
   width: 100vw;
`
const SubHeaderFooterPage = styled.h3`
    margin-bottom: 10px;
`
const TitleFooterPage = styled.h1`
    color: ${props => props.theme.baseColors.coral};
    padding-top: 50px;
    margin-bottom: 90px;
`
const TeamTitle = styled.h6`
    font-weight: 600;
    margin: 70px 0 20px 0;
`
const Close = styled.img`
   height: auto;
   width: 18px;
   cursor: pointer;
   position: absolute;
   top: 50px;
   right: 30px;
`
const OneContactInfoDiv = styled.div`
   display: flex;
   margin-bottom: 5px;
`
const ContactImg = styled.img`
   margin-right: 15px;
`
const ContactInfoContainer = styled.div`
   margin-bottom: 80px;
`
const MainTextFB = styled.div`
   width: 80%;
`

const Contact = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Global>
                    <Container>
                        <TitleFooterPage>Hafa samband</TitleFooterPage>
                        <Link to={"/feed"}><Close src={closeButton} alt=""></Close></Link>
                        <MainTextFB>
                            <SubHeaderFooterPage>Samfélagsleg ábyrgð</SubHeaderFooterPage>
                            <p>Kynfræðsla í skólum þarfnast betrum bætunar og viljum við koma til móts við þarfir unglinga og gera kynfræðsluna meira aðlaðandi fyrir þá.</p>
                        </MainTextFB>
                        <div>
                            <TeamTitle>Contact Upplýsingar</TeamTitle>
                            <ContactInfoContainer>
                                <OneContactInfoDiv>
                                    <ContactImg src={Phone} alt="Símanúmer"></ContactImg>
                                    <p>+354 8440124</p>
                                </OneContactInfoDiv>
                                <OneContactInfoDiv>
                                    <ContactImg src={Email} alt="Tölvupóstfang"></ContactImg>
                                    <p>kynfraedsla@kynfraedsla.is</p>
                                </OneContactInfoDiv>
                                <OneContactInfoDiv>
                                    <ContactImg src={LandingPage} alt="Vefsíða"></ContactImg>
                                    <p>kynfraedsla.com</p>
                                </OneContactInfoDiv>
                            </ContactInfoContainer>
                        </div>
                    </Container>
                </Global>
            </ThemeProvider> 
            <Footer/>
         </div>    
    )
};

export default Contact;