import React from 'react';
import Footer from 'components/footer/Footer';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Link } from "gatsby";
import closeButton from '../assets/icon/article/close.svg';
import { get } from 'lodash';

//Photos of the team
import Hugrun from '../assets/images/TheTeam/hugrun_bw.jpg';
import Birgitta from '../assets/images/TheTeam/birgitta_bw2.jpg';
import Anna from '../assets/images/TheTeam/anna_bw.jpg';
import Ragnhildur from '../assets/images/TheTeam/ragnhildur_bw.jpg';

const Container = styled.div`
   margin: 0 30px;
`
const SubHeaderFooterPage = styled.h3`
    margin-bottom: 10px;
`
const TeamContainer = styled.div`
   display: flex;
   margin: 0 0 30px 30px;
   display: flex;
    height: 250px;
    width: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
        &::-webkit-scrollbar {
        display: none;
        }
`
const TitleFooterPage = styled.h1`
    color: ${props => get(props,"theme.baseColors.coral", "")};
    padding-top: 50px;
    margin-bottom: 90px;
`
const NameTitle = styled.h6`
    font-weight: 600;
    text-align: center;
    font-size: 13px;
    margin-bottom: 10px;
`
const JobTitle = styled.p`
    color: #4f4f4f;
    text-align: center;
    line-height: 15px;
    font-weight: 600;
    font-size: 13px;
`
const TeamTitle = styled.h6`
    font-weight: 600;
    margin: 70px 0 40px 0;
`
const TeamMember = styled.div`
    margin-right: 20px;
    
`
const TeamImageDiv = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 15px auto;
    object-fit: cover;
`
const TeamImage = styled.img`
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
    object-fit: cover;
`
const Close = styled.img`
   height: auto;
   width: 18px;
   cursor: pointer;
   position: absolute;
   top: 50px;
   right: 30px;
`

const About = () => {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Global>
                        <Container>
                            <TitleFooterPage>Um Okkur</TitleFooterPage>
                            <Link to={"/feed"}><Close src={closeButton} alt=""></Close></Link>
                            <SubHeaderFooterPage>Samfélagsleg ábyrgð</SubHeaderFooterPage>
                            <p>Kynfræðsla í skólum þarfnast betrum bætunar og viljum við koma til móts við þarfir unglinga og gera kynfræðsluna meira aðlaðandi fyrir þá.</p>
                            <div>
                                <TeamTitle>Teymið</TeamTitle>
                            </div>
                        </Container>
                    </Global>
                </ThemeProvider> 
                <TeamContainer>
                    <TeamMember>
                        <TeamImageDiv>
                            <TeamImage src={Anna} alt="Anna Sóley Karlsdóttir"></TeamImage>
                        </TeamImageDiv>
                        <NameTitle>Anna Sóley Karlsdóttir</NameTitle>
                        <JobTitle>Forritari & móðir</JobTitle>
                    </TeamMember>
                    <TeamMember>
                        <TeamImageDiv>
                            <TeamImage src={Birgitta} alt="Birgitta Rún Sveinbjörnsdóttir"></TeamImage>
                        </TeamImageDiv>
                        <NameTitle>Birgitta Rún Sveinbjörnsdóttir</NameTitle>
                        <JobTitle>Vefhönnuður</JobTitle>
                    </TeamMember>
                    <TeamMember>
                        <TeamImageDiv>
                            <TeamImage src={Hugrun} alt="Hugrún Rúnarsdóttir"></TeamImage>
                        </TeamImageDiv>
                        <NameTitle>Hugrún <br/>Rúnarsdóttir</NameTitle>
                        <JobTitle>Vefhönnuður</JobTitle>
                    </TeamMember>
                    <TeamMember>
                        <TeamImageDiv>
                            <TeamImage src={Ragnhildur} alt="Ragnhildur Rós Guðmundsdóttir"></TeamImage>
                        </TeamImageDiv>
                        <NameTitle>Ragnhildur Rós Guðmundsdóttir</NameTitle>
                        <JobTitle>Forritari & móðir</JobTitle>
                    </TeamMember>
                </TeamContainer>
                <Footer/>
            </div>
        )
    };

export default About;