import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

const iframe_container = styled.div`
   width: 100% !important;
`

const SliceVideo = ({url, iframe}) => {
  
    return (
        <div> 
            {/* <iframe src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>  */}
            {/* <div src={video}></div> */}
            <div className="iframe_container" dangerouslySetInnerHTML={{__html: iframe}}/>
        </div>
    )};
    

export default SliceVideo;