import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ProfilePhoto from '../components/ProfilePhoto';
import PortfolioItem from '../components/PortfolioItem';
import '../css/theme/styles.scss';

const AboutPage = () => (
    <div className="mainPage">
				<h1>Portfolio</h1>
				<div className="portfolioHolder">
        // TODO: CREATE THIS COMPONENT
          <PortfolioItem />
        </div>
    </div>
  );

AboutPage.propTypes = {
  route: React.PropTypes.object,
};

export default AboutPage;
