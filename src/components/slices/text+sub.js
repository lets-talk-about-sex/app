import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

const SubHeading = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 30px;
`

const SliceTextSub = ({subheader, paragraph}) => {
  
    return (
        <div>   
            <SubHeading>{subheader}</SubHeading>
            <p>{paragraph}</p>
        </div>
    )};
    

export default SliceTextSub;