import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';

const Footer = (props) => {
    console.log(props)
    return (
        <div> 
            <div>
                <h1>er footer hér?</h1>  
                <div>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <div>
                    <a href="#">Um okkur</a>
                    <a href="#">Alengar spurningar</a>
                    <a href="#">Hafa samband</a>
                    <a href="#">Styrktaraðilar</a>
                </div>
            </div>
        </div>
    )};
    

export default Footer;