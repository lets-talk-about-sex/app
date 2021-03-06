import React from 'react';
import styled from '@emotion/styled/macro';

const SubHeading = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 30px;
`
const Par = styled.div`
    ul{
        li{
            margin-left: 20px;
            font-size: 16px;
        }
    }
`

const SliceTextSub = ({subheader, paragraph}) => {
  
    return (
        <div>   
            <SubHeading>{subheader}</SubHeading>
            <Par>{paragraph}</Par>
        </div>
    )};
    
export default SliceTextSub;