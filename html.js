import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

export default class Html extends Component {
  render() {
    const head = Helmet.rewind();

    const css = process.env.NODE_ENV === 'production' ? (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css')
        }}
      />
    ) : null;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta property="og:title" content="Sarah Huang" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:description" content="Sarah Huang"/>
          <meta property="og:site_name" content="Sarah Huang"/>

          <link
            href="https://fonts.googleapis.com/css?family=Carrois+Gothic|Fira+Sans+Condensed|Ruthie|Josefin+Sans"
            rel="stylesheet"
          />

          <link
            href={ prefixLink("/img/sarah-logo.png") }
            rel="icon"
            type="image/png"
          />

          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{
              __html: this.props.body
            }}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  body: PropTypes.string
};

