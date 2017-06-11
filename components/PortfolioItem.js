import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';

//assets
import fremontPatroller from '../assets/fremontPatroller.png';
import fitomatic from '../assets/fitomatic.png';

import '../css/base/_vars.scss';

const PortfolioItem = (props) => {
  let temp = props.imageName;

    return (
      <li>
        <a href={props.link}>{props.name}</a>
        <a href={props.github}>SOURCE</a>
        <p>Tech Used: {props.tech}</p>
        { props.image ?
          <img src={require('../assets/' + temp + '.png')}/>
          : null
        }
      </li>
    )
}

PortfolioItem.PropTypes = {
  name: PropTypes.string,
  imageName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default PortfolioItem;
