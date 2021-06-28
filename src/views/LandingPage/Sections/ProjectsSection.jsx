import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import Button from '../../../components/CustomButtons/Button.jsx';
import Card from '../../../components/Card/Card.jsx';
import CardBody from '../../../components/Card/CardBody.jsx';
import CardFooter from '../../../components/Card/CardFooter.jsx';
import projectsStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/projectsStyle.jsx';
import {
	followup,
} from '../../../assets/img/projects/index.js';


class ProjectsSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRounded, classes.imgFluid);
		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Projects</h2>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<a href="https://followup-crm.herokuapp.com">
										<img src={followup} alt="hearthstone" className={imageClasses} />
									</a>
								</GridItem>
								<h4 className={classes.cardTitle}>
									Follow Up
									<br />
									<small className={classes.smallTitle}>Node, React, MySQL</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										This is a full-stack Javascript app built using Express, React and a MySQL
										database. It's designed to be used by sales people as a sales tracker and
										contact management system.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<a href="https://github.com/picholasnaridon/followup">
											<i className={classes.socials + ' fab fa-github'} />
										</a>
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(projectsStyle)(ProjectsSection);
