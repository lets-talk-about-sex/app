import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { graphql } from 'gatsby';
import { Container } from 'components/theme/container';
import Search from 'components/search/search';
import AllCards from 'components/cards/allCards';
import Footer from 'components/footer/Footer';

export const query = graphql`
  query {
    prismic {
      allArticles(first: 100){
        edges{
          node{ 
            _meta{
              uid
              tags
            }
            hot
            title
            article_img
            synonyms
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
  constructor(props){
    super(props);
    this.state = {
    activefilter: "",
    activesearch: "",
    results: [],
    resultsCounter: 0,
    searchIsEmpty: true,
    isLoading: true
    }
  }

  //this function runs when category is clicked
  RenderByFilter = (filter, search) => {
    this.setState({
      activefilter: filter,
      activesearch: search,
    })
  }

  componentDidMount () {
  //Chatbot
  let _chatlio = [];
  window._chatlio=_chatlio;
  let ChatlioReact = [];
  function chat () {
    var t = document.getElementById("chatlio-widget-embed");
    if (t && window.ChatlioReact && _chatlio.init) return void _chatlio.init(t, ChatlioReact);
    for (var e = function (t) { return function () { _chatlio.push([t].concat(arguments)) } }, i = ["configure", "identify", "track", "show", "hide", "isShown", "isOnline", "page", "open", "showOrHide"], a = 0; a < i.length; a++)_chatlio[i[a]] || (_chatlio[i[a]] = e(i[a]));
    var n = document.createElement("script"), c = document.getElementsByTagName("script")[0];
    n.id = "chatlio-widget-embed";
    n.src = "https://w.chatlio.com/w.chatlio-widget.js";
    n.async = true;
    n.setAttribute("data-embed-version", "2.3");
    n.setAttribute('data-widget-id', '2c5a506b-18b2-407e-5dc3-dfebac4d8b9b');
    c.parentNode.insertBefore(n, c);
  }
  chat();
}
  
//Search - look for titles here (title[0].text) and for synonyms. 
//First it check if there is a synonym or not in Prismic, if not, it stops,
// but if it excists it fetches it. 
//This is because some of the article cards don´t have synonyms
  update = (searchTerm) => {
      this.setState({
        searchIsEmpty: searchTerm === ""
      })
  
    // console.log(this.props.data.prismic.allArticles)
    const results = this.props.data.prismic.allArticles.edges.filter(card => {
      // console.log(card.node.synonyms)

      if (card.node.synonyms.text) {
      }
        return card.node.title[0].text.toUpperCase().includes(searchTerm.toUpperCase()) ||
        (card.node.synonyms && card.node.synonyms[0].text.toUpperCase().includes(searchTerm.toUpperCase()))
    })
    this.setState({
      results,
      resultsCounter: results.length 
    })
  }

  render() {
    let data;
    if (this.state.results.length) {
      data = {
        prismic: {
          allArticles: {
            edges: this.state.results
          },
          allDid_you_knows: {
            edges: this.props.data.prismic.allDid_you_knows.edges
          },
          allFactss: {
            edges: this.props.data.prismic.allFactss.edges
          }
        }
      }
    }
    else {
      data = this.props.data
    }
    return (
      <ThemeProvider theme={theme}>
          <Search 
              renderbyfilter={this.RenderByFilter}
              update={this.update}
              showResults={this.state.resultsCounter}
              searchStringIsEmpty={this.state.searchIsEmpty}
              linkState={this.props.location.state}/>
          <Global>
            <Container>
              <AllCards filtering={this.state.activefilter} data={data} />
            </Container>
          </Global>
          <Footer/>
      </ThemeProvider> 
    );
  }
}

export default App;

