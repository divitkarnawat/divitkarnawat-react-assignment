import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import symbol from "assets/img/caseStudyLogo.png";

import styles from "assets/jss/jss-react/views/componentsSections/caseStudy.js";

const useStyles = makeStyles(styles);

export default function SectionCaseStudy() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.head}>
        <h2 className ={classes.title}>CASE STUDY </h2>
        <p className={classes.description}> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
        <GridContainer justify="center" >
     
        <GridItem xs={12} sm={12} md={4} addStyle="white" sec="caseStudy">
            
        <div className={classes.contactCard}>
                <img src={symbol} className={classes.imgSymbol} />
                <h4 className = {classes.contactCardh}> SANIFAIR TOILETEN</h4>
                <hr className={classes.divider}/>
                <p className = {classes.contactCardp}> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
                <Button
              color="primary"
              size="md"
              href="#"
            >
              MEHR ERFAHREN
            </Button>
              </div>
            
          </GridItem>
          <GridItem xs={12} sm={12} md={4} addStyle="white" sec="caseStudy">
          <div className={classes.contactCard}>
                <img src={symbol} className={classes.imgSymbol} />
                <h4 className = {classes.contactCardh}> SANIFAIR TOILETEN</h4>
                <hr className={classes.divider} />
                <p className = {classes.contactCardp}> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
                <Button
              color="primary"
              size="md"
              href="#"
            >
              MEHR ERFAHREN
            </Button>
              </div>
          </GridItem>
        
        </GridContainer>
      </div>
    </div>

  );
}
