import React from "react";

import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionProduct from "./Sections/SectionProduct.js";
import SectionCaseStudy from "./Sections/SectionCaseStudy.js";
import SectionContactUs from "./Sections/SectionContactUs.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionBlog from "./Sections/SectionBlog.js";
import styles from "assets/jss/jss-react/views/components.js";

import stylesNav from "assets/jss/jss-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);
const useStylesNav = makeStyles(stylesNav);
export default function Components(props) {
  const classes = useStyles();
  const classesNav = useStylesNav();
  const { ...rest } = props;
  return (
    <div>
      <Header
   
        rightLinks={
          <List className={classesNav.list}>
            <ListItem className={classesNav.listItem}>
              <Button
                href="#pablo"
            
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                BLOG
              </Button>
            </ListItem>
            <ListItem className={classesNav.listItem}>
              <Button
                href="#pablo"
      
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                KONTAKT
              </Button>
            </ListItem>
          </List>
        }
        leftLinks={
          <List className={classesNav.list}>
            <ListItem className={classesNav.listItem}>
              <Button
                href="#pablo"
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                OBER UNS
              </Button>
            </ListItem>
            <ListItem className={classesNav.listItem}>
              <Button
                href="#pablo"
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                CASE STUDY
              </Button>
            </ListItem>
          </List>
        }
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />


      <Parallax image={require("assets/img/bg4.png")}>
  
      
              <div className={classes.brand}>
                <p className={classes.titleo}>SANSIEL</p>
                <p className={classes.titlen}> IST IHRE LOSUNG  </p>
                <br />
                <br />
                <p className={classes.subtitle}>
                  MEHR ERFAHREN
                </p>
              </div>
  

      </Parallax>

      <div className={classNames(classes.main)}>
        <SectionProduct />
        <SectionTeam />
        <SectionCaseStudy />
        <SectionBlog />
        <SectionContactUs />
      </div>
      <Footer />
    </div>
  );
}
