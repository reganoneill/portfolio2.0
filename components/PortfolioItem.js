import React, {PropTypes} from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';
const FaGitHub = require('react-icons/lib/fa/github');


//assets
import fremontPatroller from '../assets/fremontPatroller.png';
import fitomatic from '../assets/fitomatic.png';

import '../css/base/_vars.scss';

class PortfolioItem extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      onHover: false
    }
    this.showSummary = this.showSummary.bind(this);
    this.resetSummary = this.resetSummary.bind(this);
  }

  showSummary(){
    this.setState(function(){
      return {
      onHover: true
      }
    })
  }

  resetSummary(){
    this.setState(function(){
      return {
      onHover: false
      }
    })
  }

  render(){
    let temp = this.props.imageName;
    let divStyle = {
      background: this.props.color
    };
    return (
      <li>
        <h4>{this.props.name}</h4>
        <div
          onMouseEnter={this.showSummary}
          onMouseLeave={this.resetSummary}
          className='imageAndSummaryHolder'>

          {!this.state.onHover ?
          <div className="imageHolder">
          {this.props.image ?
            <img src={require('../assets/' + temp + '.png')}/>
            : null
          }
          </div> : null }

          {this.state.onHover ?
          <div className='summaryHolder' style={divStyle}>
            <div>
              <p>{this.props.description}</p>
              <p><a href={this.props.link}>{this.props.link}</a></p>
            </div>
            <div>
              <p>Tech: {this.props.tech}</p>
              <div className='gitHub'>
                  <a href={this.props.github}>
                <FaGitHub />
                </a>
              </div>
            </div>
          </div> : null}
        </div>
      </li>
    )
  }
}

PortfolioItem.PropTypes = {
  name: PropTypes.string,
  imageName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default PortfolioItem;
