import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

const Subtitle = styled.h3`
    margin: 30px 0px 20px 0px;
`

const SliceSubtitle = ({sub}) => {
  
    return (
        <div> 
          <Subtitle>{sub}</Subtitle>  
        </div>
    )};
    

export default SliceSubtitle;