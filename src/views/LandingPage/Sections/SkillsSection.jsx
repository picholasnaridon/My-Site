import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3Alt, faHtml5, faJs, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'

class SkillsSection extends React.Component {
  render() {
    return (
      <div>
        <h2 className="WorkSection-title-321"> Skills</h2>
        <GridContainer>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faReact} style={{ color: "#3bc9db" }} size="5x" />
          </GridItem>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: "3B5998" }} size="5x" />
          </GridItem>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faHtml5} style={{ color: "#F14A29" }} size="5x" />
          </GridItem>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e" }} size="5x" />
          </GridItem>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faNodeJs} style={{ color: "#43853d" }} size="5x" />
          </GridItem>
          <GridItem xs={4} sm={4} md={2} lg={2}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#6e5494" }} size="5x" />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <FontAwesomeIcon icon={faNpm} style={{ color: "#cc0000" }} size="5x" />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default SkillsSection
