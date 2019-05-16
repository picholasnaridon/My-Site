import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../../components/Header/Header.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.jsx';
import ExperienceSection from './Sections/ExperienceSection';
import ProjectsSection from './Sections/ProjectsSection';
import WorkSection from './Sections/ContactSection';
import EducationSection from './Sections/EducationSection';
import Mepic from '../../assets/img/me.png';
import SkillsSection from './Sections/SkillsSection';

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					color="transparent"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: 'white'
					}}
					{...rest}
				/>
				<Parallax filter image={require('../../assets/img/philly.jpg')}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6} style={{alignContent: "center"}}>
								<img src={Mepic} alt="me" style={{width: "95px", height: "100px", borderRadius: "10%"}} />
								<h1 className={classes.title}>Nick Paridon</h1>
								<h4>
									Hi everyone, my name is Nick. I am currently working as a C#/.NET developer
									for a company called Frontline Education in the Philadelphia suburbs. Some examples
									of my work are listed below, which are a mix of mainly Ruby on Rails, Node.JS and React.
								</h4>
								<h4>
									In my spare time I love swimming, hiking and hanging with my friends and family.
								</h4>
								<br />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<ExperienceSection />
						<EducationSection />
						<SkillsSection />
						<ProjectsSection />
						<WorkSection />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);
