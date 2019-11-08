import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { pld, frontline, piano } from '../../../assets/img/icons/index.js';
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem.jsx';
import InfoArea from '../../../components/InfoArea/InfoArea.jsx';

import experienceStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/experienceStyle.jsx';

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
									title="Software Developer"
									description="Nov. 2019 - Present. Focusing on C#/.NET Core microservices and Angular UI components."
									icon={frontline}
									iconColor="success"
									vertical
								/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Associate Software Developer"
								description="Dec. 2018 - Nov. 2019 Backend C# developer role. Building out microservices and modernizing older VB.NET code base. "
								icon={frontline}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Piano.io Client - Services Engineer"
								description="June 2017 - Dec. 2018. Engineering role focused around implementing Piano software into clients' codebase and building internal tools."
								icon={piano}
								iconColor="info"
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
