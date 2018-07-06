import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Pld from 'assets/img/icons/pld.jpg'
import Comcast from 'assets/img/icons/comcast.png'
import Piano from 'assets/img/icons/piano.png'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import experienceStyle from "assets/jss/material-kit-react/views/landingPageSections/experienceStyle.jsx";

class ExperienceSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work Experience</h2>
            <h5 className={classes.description}>
             
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Piano.io Client - Services Engineer"
                description="June 2017 - Present. Engineering role focused around implementing Piano software into clients' codebase and building internal tools."
                icon={Piano}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="PipelineDeals - Technical Support"
                description="May 2015 - January 2017. Small SaaS startup selling a CRM and Sales platform. Responsible for technical support and requests from clients."
                icon={Pld}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Account Executive - Comcast"
                description="​June 2013 - May 2015. Sales and Technical support for Comcast Business customers. "
                icon={Comcast}
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
