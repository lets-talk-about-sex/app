import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Container } from 'components/theme/container';
import Card  from 'components/card/card';
import Search from 'components/search/search';
import DidYouKnow from 'components/card/didyouknow';
// import Fact from 'components/card/facts';

 
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby'; 

export const query = graphql`
  query {
    prismic {
            allArticles{
        edges{
        node{ 
            _meta{uid
            }
        title
        }
      }
    }
  }
}
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
          <Global>
            <Container>
              <Search/>
              <Card/>
              <DidYouKnow/>
              {/* <Fact/> */}
            </Container>
          </Global>
      </ThemeProvider> 
    );
  }
}

export default App;