import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Container } from 'components/theme/container';
import Cards from 'components/cards/cards';
import Search from 'components/search/search';
import DidYouKnow from 'components/cards/didyouknow';
import Fact from 'components/cards/facts';
import Article from 'template/article/article-template';

 
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
            article_img
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
              <Cards data={this.props.data}/>
              <DidYouKnow/>
              <Fact/>
            </Container>
          </Global>
      </ThemeProvider> 
    );
  }
}

export default App;

