import React from 'react';
import { ThemeProvider} from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import styled from '@emotion/styled/macro';
//font awesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const FooterContainer = styled.div`
    width: 100%;
    height: 170px;
    background-color: #FC4255;
    padding-top: 30px;
`
const SocialMediaContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 103px;
    margin: 0 auto;
`
const FooterLinkContainer = styled.div`
    margin-top: 30px;
`
const FooterPageLink = styled.a`
    color: white; 
    font-weight: 600;
    display:inline-block;
    position: relative;
    font-size: 16px;
    font-weight: 800px; 
    font-family: poppins; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    &:visited {
        color: white;
    }
    &:active {
        color: #FFB800;
    }
`
const Footer = (props) => {
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
                            <FooterPageLink href="/about">Um okkur</FooterPageLink>
                            <FooterPageLink href="/contact">Hafa samband</FooterPageLink>
                        </FooterLinkContainer>
                    </FooterContainer>
                </Global>
            </ThemeProvider>
        </div>
    )};
    
export default Footer;