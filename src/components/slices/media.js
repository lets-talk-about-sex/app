import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
// import styled from '@emotion/styled/macro';

const SliceMedia = ({image}) => {
  
    return (
        <div>   
            <img src={image}></img>
            {/* <div>{image}</div> */}
        </div>
    )};
    

export default SliceMedia;