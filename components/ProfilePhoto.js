import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';

const ProfilePic = (props) => {
	const {src, style} = props;

	const imagePool = [
		'../assets/reganprofile.png',
		'../assets/regan.jpg'
	];

	const mergedStyles = Object.assign({
    border: '.25em solid',
    borderColor: '#01A1DD',
    borderRadius: '50%',
    maxWidth: '80px',
    maxHeight: '80px',
    flexShrink: '0',
  }, style);

	const photoSource = src || sample(photosSources);
  return (
    <img
      src={prefixLink(photoSource)}
      alt={trimEnd(replace(photoSource, '-', ' '), '.jpg' || '.png')}
      style={mergedStyles}
    />);
}

ProfilePic.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.shape({}),
};

export default ProfilePic;
