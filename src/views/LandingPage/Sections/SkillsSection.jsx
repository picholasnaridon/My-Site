import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withStyles from '@material-ui/core/styles/withStyles';
import { faReact, faCss3Alt, faHtml5, faJs, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';
import skillsStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/skillsStyle.jsx';

class SkillsSection extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Skills</h2>
				<GridContainer>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faReact} className={classes.react} size="5x" />
					</GridItem>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faCss3Alt} className={classes.css3} size="5x" />
					</GridItem>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faHtml5} className={classes.html5} size="5x" />
					</GridItem>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faJs} className={classes.javaScript} size="5x" />
					</GridItem>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faNodeJs} className={classes.node} size="5x" />
					</GridItem>
					<GridItem xs={4} sm={4} md={2} lg={2}>
						<FontAwesomeIcon icon={faGithub} className={classes.github} size="5x" />
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(skillsStyle)(SkillsSection);
