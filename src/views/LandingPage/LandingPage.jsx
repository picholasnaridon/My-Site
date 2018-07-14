import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import ExperienceSection from "./Sections/ExperienceSection";
import ProjectsSection from "./Sections/ProjectsSection";
import WorkSection from "./Sections/ContactSection";
import EducationSection from "./Sections/EducationSection";
import Mepic from "assets/img/me.png"
import SkillsSection from "./Sections/SkillsSection";


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
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/philly.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Avatar className={classes.avatar} src={Mepic} />
                <h1 className={classes.title}>Web Developer</h1>
                <h4>
                  Hi everyone, my name is Nick. I am currently working as a Client
                  Services Engineer for a company called Piano.io here in Philadelphia.
                  I started programming in 2016 and love it! My experience thus far has been
                  mainly in Ruby on Rails and Node.Js from a backend perspective and React.Js
                  on the frontend.
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
          <div className={classes.container}>
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
