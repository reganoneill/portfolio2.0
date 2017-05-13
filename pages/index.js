import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ProfilePhoto from '../components/ProfilePhoto';

//TODO: wire this in
//import '../css/landing.scss';

const SiteIndex = () => (
    <div className="shell">
      <div className="main_landing">
        <ProfilePhoto
          style={{
            margin: '0 auto',
            maxWidth: '200px',
            maxHeight: '200px',
        }}/>
        <h1>{config.siteOwner}</h1>
        <h3>Software Developer</h3>
        <h4>Seattle, WA</h4>

      </div>
    </div>

  );

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
