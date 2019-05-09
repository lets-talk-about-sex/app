import React from 'react';
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
                <iframe title="video" width="100%" height="250" src={" https://www.youtube.com/embed/"+youtube+"?feature=oembed"} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
   
            </FrameContainer>
        </div>
    )};

export default SliceVideo;