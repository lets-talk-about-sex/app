import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'components/theme/theme';
import Global from 'components/base/base';
import { graphql } from 'gatsby';
import { Container } from 'components/theme/container';
import Search from 'components/search/search';
import AllCards from 'components/cards/allCards';


//Chatbot
window._chatlio = window._chatlio || [];
let _chatlio = window._chatlio || [];
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
  state = {
    activefilter: "",
    activesearch: "",
    results: []
  }
  //þegar er smellt er á flokka þá keyrist þetta fall
  RenderByFilter = (filter, search) => {
    console.log(filter)
    this.setState({
      activefilter: filter,
      activesearch: search
    })
  }

  update = (e) => {
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

  render() {
    console.log(this.props);

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
        <Global>
          <Container>
            <Search renderbyfilter={this.RenderByFilter} update={this.update} />
            <AllCards filtering={this.state.activefilter} data={data} />
          </Container>
        </Global>
      </ThemeProvider>
    );
  }
}

export default App;

