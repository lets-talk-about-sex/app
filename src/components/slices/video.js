import React from 'react';
// import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import styled from '@emotion/styled/macro';

const FrameContainer = styled.div`
    margin-top: 30px;
`



const SliceVideo = ({url, iframe}) => {
    var str = url;
    var youtube = str.slice(-11);

  
    return (
        <div> 
            <FrameContainer>
                <iframe width="100%" height="250" src={" https://www.youtube.com/embed/"+youtube+"?feature=oembed"} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                {/* https://www.youtube.com/embed/_3M0Xt97aFI?feature=oembed
                https://www.youtube.com/watch?v=_3M0Xt97aFI */}
                {/* <iframe src={url} width="100%" height="260px "frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>  */}
                {/* <div src={video}></div> */}
                {/* <div class="iframe_container" dangerouslySetInnerHTML={{__html: iframe}}/> */}
            </FrameContainer>
        </div>
    )};
    

export default SliceVideo;