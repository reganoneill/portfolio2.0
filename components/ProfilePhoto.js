import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { sample, replace, trimEnd } from 'lodash';

const ProfilePhoto = (props) => {
	const {src, style} = props;

	// const imagePool = [
	// 	'/regan.jpg',
	// 	'/reganprofile.png'
	// ];

	const mergedStyles = Object.assign({
    border: '.25em solid',
    borderColor: '#01A1DD',
    borderRadius: '50%',
    maxWidth: '80px',
    maxHeight: '80px',
    flexShrink: '0',
  }, style);

	// const photoSource = src || sample(imagePool);
	const photoSource = src;
  return (
    <img
      //src={prefixLink(photoSource)}
			src={require('../assets/reganprofile.png')}
      alt={trimEnd(replace(photoSource, '-', ' '), '.jpg' || '.png')}
      style={mergedStyles}
    />);
}

ProfilePhoto.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.shape({}),
};

export default ProfilePhoto;
