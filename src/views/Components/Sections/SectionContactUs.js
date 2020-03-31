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

import styles from "assets/jss/jss-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.head}>
        <h2 className ={classes.title}>KONTAKTIEREN SIE UNS </h2>
        <p className={classes.description}> Nullam sit amet odio eu est aliquet euismod a a urna. Proin eu urna suscipit, dictum quam nec.</p>
        </div>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
            <Card>
              <div className={classes.contactCard}>
              <div>
                <h1 className={classes.contactCardh}>
                  Unsere Address
                </h1>
                <p className={classes.contactCardp}>
                  Musterstrasse, Musterland
                </p>
              </div>
              <div>
              <h1 className={classes.contactCardh}>
                Rufen Sie uns an
              </h1>
              <p className={classes.contactCardp}>
                +880 168 109 1425
                <br />
                +0216809142
              </p>
              </div>
              <div>
              <h1 className={classes.contactCardh}>
              Email Uns
              </h1>
              <p className={classes.contactCardp}>
                info@sansiel.com
              </p>

              </div>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Contact Us</h4>
                  
                </CardHeader>
      
                <CardBody>
                  <CustomInput
                    labelText="Name"
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                    <CustomInput
                    labelText="Betreff"
                    id="betreff"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Subject className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Nachricht"
                    id="Nachricht"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Message className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Senden
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>

  );
}
