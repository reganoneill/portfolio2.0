import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';
import '../css/base/_vars.scss';

const PortfolioItem = ({name, image, link, tech, github}) => {
    return (
      <li>
        <img src={image}/>
        <a href={link}>{name}</a>
        <a href={github}>SOURCE</a>
        <p>Tech Used: {tech}</p>
      </li>
    )
}

PortfolioItem.PropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}

export default PortfolioItem;
