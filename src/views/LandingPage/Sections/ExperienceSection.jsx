import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { pld, comcast, piano } from 'assets/img/icons/index.js';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import experienceStyle from 'assets/jss/material-kit-react/views/landingPageSections/experienceStyle.jsx';

class ExperienceSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Work Experience</h2>
						<h5 className={classes.description} />
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Piano.io Client - Services Engineer"
								description="June 2017 - Present. Engineering role focused around implementing Piano software into clients' codebase and building internal tools."
								icon={piano}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="PipelineDeals - Technical Support"
								description="May 2015 - January 2017. Small SaaS startup selling a CRM and Sales platform. Responsible for technical support and requests from clients."
								icon={pld}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Account Executive - Comcast"
								description="​June 2013 - May 2015. Sales and Technical support for Comcast Business customers. "
								icon={comcast}
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

export default withStyles(experienceStyle)(ExperienceSection);
