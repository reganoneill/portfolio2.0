import React from "react"
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { trim, capitalize } from 'lodash';
import { rhythm } from '../utils/typography';

import '../static/css/reset.css';
import '../static/css/base.css';

class Template extends React.Component {
  render() {
  const { children } = this.props;

  return (
    <div className="wrapper">
      {children}
    </div>
  );
 }
}

Template.propTypes = {
  children: React.PropTypes.any,
};

export default Template;
