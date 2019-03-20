import React, {Component} from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import {Container} from 'components/theme/container';
import Card  from 'components/card/card';
 
// import { RichText } from 'prismic-reactjs';
// import { graphql } from 'gatsby'; 

// export const query = graphql`
//   query {
//     prismic {
     
//     }
//   }
// `

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
          <Global>
            <Container>
          
              <Card/>
            </Container>
          </Global>
      </ThemeProvider> 
    );
  }
}

export default App;