import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Nav from '../components/IndexNav';
import ProfilePhoto from '../components/ProfilePhoto';

import '../css/modules/styles.scss';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Jura|PT+Sans|Titillium+Web']
  }
});


class SiteIndex extends React.Component {
  render(){

  return(
    <div className="shell">
      <div className="main_landing">
        <ProfilePhoto
          style={{
            margin: '0 auto',
            maxWidth: '200px',
            maxHeight: '200px',
        }}/>
        <h1>{config.siteAuthor}</h1>
        <h3>software developer</h3>
        <Nav />
      </div>
    </div>
  )
}
  };


SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
