import React from 'react';
import styled from '@emotion/styled/macro';

const Media = styled.img`
    width: 100%;
    object-fit: cover;
    margin: 30px 0px;
`

const SliceMedia = ({image}) => {
  
    return (
        <div>   
            <Media src={image}></Media>
        </div>
    )};
    
export default SliceMedia;