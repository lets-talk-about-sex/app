import * as React from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { linkResolver } from 'utils/linkResolver';

import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby'; 

export const query = graphql`
  query {
    prismic {
     
    }
  }
`

export default (props) => {
  console.log(props);

  const { data } = props;
  
  return (
    <>
      <Helmet title="Home" />

      <div>{RichText.asText(get(data, 'prismic.custom_page.title', []))}</div>
      {/* Ef ritchtext þá render */}
      <div>{RichText.render(get(data, 'prismic.custom_page.text', []), linkResolver)}</div>
  
      <Intro>
        Opinionated starter by Ueno, using opinionated dependencies 🤪, <Highlight>TypeScript</Highlight>,&nbsp;
        <Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>, <Highlight>React Hooks</Highlight>,&nbsp;
        <Highlight>root resolver</Highlight>, <Highlight>code splitting</Highlight> and a lot of love.
      </Intro>
  
      <BlockText
        heading="Who we are"
        description={(
          <>
            Ueno is a full-service agency, busy designing and building
            beautiful digital products, brands, and experiences. For more
            informations go to <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">ueno.co</a>.
          </>
        )}
      />
    </>
  );  
}
  