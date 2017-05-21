import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import PortfolioItem from '../components/PortfolioItem';
import projects from '../data/portfolio.json';

import '../css/theme/styles.scss';

const PortfolioPage = () => (
    <div className="mainPage">
				<h1>Portfolio</h1>
				<div className="portfolioHolder">
          <ul>
            {
              projects.map( item => {
                return(
                  <PortfolioItem {...item}/>
                )
              })
            }
          </ul>
        </div>
    </div>
  );


export default PortfolioPage;
