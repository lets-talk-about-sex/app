import React from 'react';
import { injectGlobal } from "emotion";
import { withTheme } from "emotion-theming";

class Global extends React.Component {
  render() {
    injectGlobal`
    * {
      box-sizing: border-box;
      padding: 0;
  }
     /* Fontur */
     @import url('https://fonts.googleapis.com/css?family=PT+Sans%7CPoppins:400,600,700,800');

     body {
      background-color: #f9f9f9;
      max-width: 450px;
      margin: 0 auto;
     }

     h1, h2, h3, h4, h5 {
         font-family: 'Poppins', sans-serif;
         font-weight: 600;
         color: #000;
     }

     /* Titill á undirsíðu með stöku orði */
     h1 {
         font-size: 32px;
     }

     /* Titlar á spjöldum */
     h2 {
         font-size: 20px;
     }

     h3 {
         font-size: 18px;
     }

      /* Small card */
      h4 {
          font-size: 16px;
      }

        /* Info card */
      h5 {
        font-size: 16px;
        color: #FC4255;
      }

      h6 {
        font-size: 14px;
        text-transform: uppercase;
        color: #FC4255;
        font-weight: 600;
      }

      p {
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
        color: #000;
      }

      a {
        text-decoration:none;
        color:#C7C7C7;
          &:visited{
          color:#C7C7C7;
          }
      }

       input {
         font-family: 'Poppins', sans-serif;
         font-size: 20px;
         font-weight: 600;
       }
     `;
     return React.Children.only(this.props.children);
   }
 }

export default withTheme(Global);