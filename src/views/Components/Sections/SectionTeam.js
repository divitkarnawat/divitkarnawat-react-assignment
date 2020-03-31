import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Subject from "@material-ui/icons/Subject";
import Message from "@material-ui/icons/Message";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/jss-react/views/componentsSections/team.js";

const useStyles = makeStyles(styles);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.head}>
        <h2 className ={classes.title}>TEAM </h2>
        <p className={classes.description}> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4> PIC </h4>
                  
                </CardHeader>
      
                <CardBody>
                  
              <div className={classes.contactCardh}>
                <p>  CEO </p>
                 <p>  LOREM IPSUM LOREM IPSUM </p>
                 </div>
                  
                 
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  
                </CardFooter>
              </form>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4> PIC </h4>
                  
                </CardHeader>
      
                <CardBody>
                  
             
                <div className={classes.contactCardh}>
                <p>  CFO </p>
                 <p>  LOREM IPSUM LOREM IPSUM </p>
                 </div>
                
                  
                 
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  
                </CardFooter>
              </form>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4> PIC </h4>
                  
                </CardHeader>
      
                <CardBody>
                  
                  
               
              <div className={classes.contactCardh}>
                <p>  CTO </p>
                 <p>  LOREM IPSUM LOREM IPSUM </p>
                 </div>
                  
                 
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  
                </CardFooter>
              </form>
            </Card>
          </GridItem>
           
          
        </GridContainer>
      </div>
    </div>

  );
}
