import React from "react"
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { trim, capitalize } from 'lodash';
import { rhythm } from '../utils/typography';
import { Container } from 'react-responsive-grid';
import Nav from '../components/Navigation.js';
import '../css/main.scss';

const Template = (props) => {
  const { location, children } = props;
  let header;
  let documentTitle = config.siteTitle;

  if(location.pathname != prefixLink('/')){
      documentTitle = `${documentTitle} :: ${capitalize(trim(location.pathname, '/'))}`;
    header = (
      <Container
        style={{
        maxWidth: rhythm(24),
        margin: 'auto',
        }}
      >
      <p>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={prefixLink('/')}
            >
            </Link>
          </p>
          <Nav />
        </Container>);
  }

  const helmet = (
  <Helmet
    meta={[
      { property: 'og:url', content: config.siteURL },
      { property: 'og:type', content: 'blog' },
      { property: 'og:title', content: config.siteTitle },
      { property: 'og:site_name', content: config.siteTitle },
    ]}
    title={documentTitle}
    defaultTitle={config.siteTitle}
  />);

  return (
    <div>
      {helmet}
      {header}
      {children}
    </div>
  );
};

// Template.propTypes = {
//   children: React.PropTypes.shape({}),
//   location: React.PropTypes.shape({})
// };

export default Template;
