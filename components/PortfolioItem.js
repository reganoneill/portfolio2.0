import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';
import '../css/base/_vars.scss';

const PortfolioItem = (props) => {
    return (
      <li>
        <a href={props.link}>{props.name}</a>
        <a href={props.github}>SOURCE</a>
        <p>Tech Used: {props.tech}</p>
      </li>
    )
}

PortfolioItem.PropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}

export default PortfolioItem;
