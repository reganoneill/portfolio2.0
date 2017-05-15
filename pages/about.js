import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Navigation from '../components/Navigation';
import ProfilePhoto from '../components/ProfilePhoto';


const AboutPage = () => (
    <div className="AAAA">
      <div className="BBBB">
			<Navigation />
				<h1>About</h1>

				<p>Nunc et turpis vel metus suscipit tristique in quis tortor. Nullam sodales sem in magna laoreet fermentum. Vestibulum et erat id est finibus fringilla. Nullam interdum ante lorem, at suscipit nulla elementum sit amet. Vivamus mattis bibendum arcu eu scelerisque. Curabitur sit amet sollicitudin justo. Fusce vehicula, magna tincidunt eleifend rutrum, odio nunc aliquam sapien, nec rhoncus metus diam eget quam. Sed cursus, metus sed rutrum fringilla, tortor ex venenatis orci, eu blandit orci nibh id metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce leo tortor, blandit a mauris sit amet, pharetra dignissim purus. Fusce augue erat, suscipit at pretium vitae, elementum ac erat.

Etiam ornare ornare sem, eu sagittis lacus consequat in. Vivamus ac sagittis nisi, ac tempor turpis. Aenean rhoncus lobortis erat. Ut cursus commodo sodales. Ut magna orci, tempus vitae purus quis, pulvinar eleifend elit. Phasellus porta nec diam quis hendrerit. Mauris feugiat augue eros, quis vulputate neque finibus ac. Proin aliquam molestie sem, id fermentum nunc fermentum eget. Suspendisse imperdiet urna auctor ipsum consequat tempus. Proin et pulvinar magna, sit amet facilisis est.</p>
      </div>
    </div>
  );

AboutPage.propTypes = {
  route: React.PropTypes.object,
};

export default AboutPage;
