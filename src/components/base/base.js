
import React from 'react';
import { injectGlobal } from "emotion";
import { withTheme } from "emotion-theming";

class Global extends React.Component {
    render() {
      injectGlobal`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

       @import url('https://fonts.googleapis.com/css?family=PT+Sans|Poppins:400,600,700');

       body {
          background-color: #f9f9f9;
       }

       h1, h2, h3 {
           font-family: 'Poppins', sans-serif;
       }
       /* Titill á undirsíðu með stöku orði */
       h1 {
           font-size: 32px; 
       }
       /* Flokkar og titlar á spjöldum */
       h2 {
           font-size: 28px;
           font-weight: 600;

       }
   
       h3 {
           font-size: 26px;  
       }
         /* Undirtitlar á undirsíðu */
        h4 {
            font-size: 18px;  
       }
          /* Slug á spjaldi */
          h5 {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;  
       }


       p {
            font-family: 'PT Sans', sans-serif;
            font-size: 16px; 
       }

      `;
      return React.Children.only(this.props.children);
    }
  }
  
  export default withTheme(Global);




