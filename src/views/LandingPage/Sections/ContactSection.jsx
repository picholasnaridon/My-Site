import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Me</h2>
            <h4 className={classes.description}>
             If you'd like to connect, please feel free to send me an email!
            </h4>
            <GridContainer justify="center"> 
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  <a href="mailto:paridonn1@gmail.com">
                      <i className={classes.socials + " far fa-envelope"} />
                    </a>
                </h1>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(contactStyle)(WorkSection);
