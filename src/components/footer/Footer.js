import React from 'react';

import { ThemeProvider, withTheme } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

//font awesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import * as faSolid from 'emotion-icons/fa-solid'

library.add(faStroopwafel)

const FooterContainer = styled.div`
    width: 100vw;
    height: 230px;
    background-color: #FC4255;
`
const SocialMediaContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const FooterLinkContainer = styled.div`
    margin-top: 30px;
`

const FooterPageLink = styled.a`
    color: white; 
    display:inline-block;
    position: relative;
    font-size: 16px;
    font-weight: 800px; 
    font-family: poppins; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    
`

// const IconStyle = {color: white , size: 16px}

const Footer = (props) => {
    console.log(props)
    return (
        <div> 
            <ThemeProvider theme={theme}>
                <Global>
                    <FooterContainer>
                        <SocialMediaContainer>
                            <FontAwesomeIcon style={{ color: 'white'}} size="lg" icon={faFacebookF} />
                            <FontAwesomeIcon style={{ color: 'white'}} size="lg" icon={faInstagram} />
                            <FontAwesomeIcon style={{ color: 'white'}} size="lg" icon={faTwitter} />
                        </SocialMediaContainer>
                        <FooterLinkContainer>
                            <FooterPageLink href="#">Um okkur</FooterPageLink>
                            <FooterPageLink href="#">Alengar spurningar</FooterPageLink>
                            <FooterPageLink href="#">Hafa samband</FooterPageLink>
                            <FooterPageLink href="#">Styrktaraðilar</FooterPageLink>
                        </FooterLinkContainer>
                    </FooterContainer>
                </Global>
            </ThemeProvider>
        </div>
    )};
    

export default Footer;