import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { graphql } from 'gatsby'; 
import { Container } from 'components/theme/container';
import Search from 'components/search/search';
import AllCards from 'components/cards/allCards';

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
    activesearch:"",
    results:[]
  }
//þegar er smellt er á flokka þá keyrist þetta fall
  RenderByFilter = (filter, search) => {
    console.log(filter)
    this.setState({
      activefilter: filter,
      activesearch: search
    })
  }

  update = (e) =>  {
    const search = e.target.value
    console.log(this.props.data.prismic.allArticles)
    const results = this.props.data.prismic.allArticles.edges.filter(card => {
      return card.node.title[0].text.toUpperCase().includes(e.target.value.toUpperCase())
    })
    this.setState({
      results
     })
  console.log(results)
  console.log(e.target.value)

}

  render () {
    console.log(this.props);
    let data;
    if (this.state.results.length) {
      data={ 
        prismic: {
        allArticles:{
          edges:this.state.results
          },
          allDid_you_knows:{
            edges:this.props.data.prismic.allDid_you_knows.edges
          },
          allFactss:{
            edges:this.props.data.prismic.allFactss.edges
          }
        }
      }
    }
    else {
      data=this.props.data
    }
     

    return (
      <ThemeProvider theme={theme}>
          <Global>
            <Container>
              <Search renderbyfilter={this.RenderByFilter} update={this.update}  /> 
                <AllCards filtering={this.state.activefilter} data={data}/>
            </Container>
          </Global>
      </ThemeProvider> 
    );
  }
}

export default App;

