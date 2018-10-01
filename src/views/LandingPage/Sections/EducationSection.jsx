import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { launch, washcoll, upenn } from 'assets/img/icons/index.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import educationStyle from 'assets/jss/material-kit-react/views/landingPageSections/experienceStyle.jsx';

class EducationSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Education</h2>
						<h5 className={classes.description} />
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Washington College"
								description="Economics Major. 2009-2013"
								icon={washcoll}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Launch Academy"
								description="Fullstack Ruby on Rails program. Went through the fundamentals of things like test driven development and object oriented programming."
								icon={launch}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="University of Pennsylvania"
								description="2018 - Six month course focused around  fullstack JavaScript. Learned Node.JS on the backend and continued working with React.Js on the frontend"
								icon={upenn}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(educationStyle)(EducationSection);
