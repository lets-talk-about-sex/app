import styled from '@emotion/styled/macro';

const Container = styled.div`
   width: 100vw;
   max-width: 450px;
   height: 100%;
   padding: 0 30px;
   margin: 0 auto;
   background-color: ${props => props.theme.baseColors.bodyBackground}
`

export { Container };