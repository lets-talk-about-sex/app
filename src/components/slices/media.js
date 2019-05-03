import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';


const Media = styled.img`
    margin: 30px auto;
`

const SliceMedia = ({image}) => {
  
    return (
        <div>   
            <Media src={image}></Media>
        </div>
    )};
    

export default SliceMedia;