import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { Container } from 'components/theme/container';
// import Cards from 'components/cards/cards';
import Search from 'components/search/search';
// import DidYouKnows from 'components/cards/didyouknow';
// import Facts from 'components/cards/facts';
import AllCards from 'components/cards/allCards';

 
// import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby'; 

export const query = graphql`
  query {
    prismic {
      allArticles{
        edges{
          node{ 
            _meta{
              uid
              tags
            }
            title
            article_img
           
          }
        }
      }
      allDid_you_knows{
        edges{
          node{
            _meta{
              uid
              tags
            }
            didyouknow
          }
        }
      }
      allFactss{
        edges{
          node{
            _meta{
              uid
              tags
            }
            fact
          }
        }
      }
    }
}
`

class App extends Component {
  state={
    activefilter:"",
    activesearch:""
  }
//þegar er smellt er á flokka þá keyrist þetta fall
  RenderByFilter = (filter, search) => {
    console.log(filter)
    this.setState({
      activefilter: filter,
      activesearch: search
    })
  }

  render () {
    console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
          <Global>
            <Container>
              <Search renderbyfilter={this.RenderByFilter}/>
                <AllCards filtering={this.state.activefilter} data={this.props.data}/>
            </Container>
          </Global>
      </ThemeProvider> 
    );
  }
}

export default App;

