import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { washcoll } from '../../../assets/img/icons/index.js';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import InfoArea from '../../../components/InfoArea/InfoArea.jsx';
import educationStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/experienceStyle.jsx';

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
						</GridItem>
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
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(educationStyle)(EducationSection);
