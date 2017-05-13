import React from "react"
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { trim, capitalize } from 'lodash';
import { rhythm } from '../utils/typography';
import { Container } from 'react-responsive-grid';

import '../css/main.scss';

const Template = (props) => {
  const { location, children } = props;
  header = (
    <Container
      style={{
      maxWidth: rhythm(24),
      margin: 'auto',
      }}
    >
  );

  let header;

  const helmet = (
  <Helmet
    meta={[
      { property: 'og:url', content: config.blogUrl },
      { property: 'og:type', content: 'blog' },
      { property: 'og:title', content: config.blogTitle },
      { property: 'og:site_name', content: config.blogTitle },
      { property: 'og:image', content: fullImagePath },
      { property: 'fb:admins', content: config.fbAdminsId },
      { name: 'twitter:title', content: config.blogTitle },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: config.authorTwitter },
      { name: 'twitter:creator', content: config.authorTwitter },
      { name: 'twitter:description', content: `${config.authorTwitter} ${config.blogTitle}` },
      { name: 'twitter:image', content: fullImagePath },
    ]}
    title={documentTitle}
    defaultTitle={config.blogTitle}
  />);

  return (
    <div className="wrapper">
      {helmet}
      {header}
      {children}
    </div>
  );
 }


export default Template;
