import React from 'react';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

const SubHeading = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
    top: 0;
`

const SliceTextSub = ({subheader, paragraph}) => {
  
    return (
        <div>   
            <SubHeading>{subheader}</SubHeading>
            <p>{paragraph}</p>
        </div>
    )};
    

export default SliceTextSub;