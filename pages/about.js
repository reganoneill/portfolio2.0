import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import '../css/theme/styles.scss';

const githubs = 'https://github.com/reganoneill/';
const linkedInd = 'https://www.linkedin.com/in/regan-oneill/';

function Toolbox(props){
  let basics = ['Unix', 'Git', 'JavaScript', 'CSS', 'HTML'];
  let frameworks = ['Angular', 'React', 'jQuery'];
  let backend =['MongoDB', 'Express', 'Node', 'SQL'];
  let extras = ['TravisCI', 'Heroku', 'WordPress', 'SquareSpace'];

  return (
  <div className="allSkills">
    <div className="skillCluster">
      <h4>Basics</h4>
      <div className="skills">
      {basics.map(function(tool){
        return(
          <div key={tool} className="techTool">
            <div>
              {tool}
            </div>
          </div>
        )
      })}
      </div>
    </div>
    <div className="skillCluster">
      <h4>Frameworks/Front-End Libraries</h4>
      <div className="skills">
      {frameworks.map(function(tool){
        return(
        <div key={tool} className="techTool">
          <div>
            {tool}
          </div>
        </div>
        )
      })}
      </div>
    </div>

    <div className="skillCluster">
      <h4>Backend</h4>
      <div className="skills">
      {backend.map(function(tool){
        return(
        <div key={tool} className="techTool">
          <div>
            {tool}
          </div>
        </div>
        )
      })}
      </div>
    </div>

    <div className="skillCluster">
      <h4>Extras</h4>
      <div className="skills">
      {extras.map(function(tool){
        return(
        <div key={tool} className="techTool">
          <div>
            {tool}
          </div>
        </div>
        )
      })}
      </div>
    </div>
  </div>
  )
}

const AboutPage = () => (
    <div className="mainPage">
				<h1>About</h1>
				<p>Software developer with a background in digital marketing and business development. My diverse skill set lends a unique perspective to creating and maintaining great products. I’m constantly learning and looking for opportunities to craft better solutions. My experience leans towards front-end work, but I enjoy working in all levels of the stack and writing tests to ensure a consistent and predictable experience.</p>

        <p className="aboutLinks">Take a look at some of <a href='../portfolio/'>my work</a> or <a href={githubs}>recent projects</a> and find me on <a href={linkedInd}>LinkedIn</a></p>

      <h2 className="aboutSkills">Skills</h2>
      <Toolbox />
    </div>
  );

AboutPage.propTypes = {
  route: React.PropTypes.object,
};

export default AboutPage;
