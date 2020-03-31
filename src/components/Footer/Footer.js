/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";;

import styles from "assets/jss/jss-react/components/footerStyle.js";
import styles_links from "assets/jss/jss-react/components/headerLinksStyle.js";
import logoi from "assets/img/footerLogo.png";

const useStyles_links = makeStyles(styles_links);
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const classes_links = useStyles_links();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    
      <footer className={footerClasses}>
      <div className={classes.container}>
        <hr className={classes.divider} />
      <GridContainer justify="center" >
     
     <GridItem xs={12} sm={12} md={4} >
         
      <div className={classes.logo}>
        <h3 className={classes.logoh}> Sansiel GmbH </h3>
        <img src={logoi} className={classes.logoi} />
      </div>

      </GridItem>
      <GridItem xs={12} sm={12} md={4} >
         
      <div className={classes.rowDir}>
       <div className={classes.linkSection}>
        <a className={classes.linkSectionl} href="#"> Home </a>
        <a className={classes.linkSectionl} href="#">  Blog </a>
        <a className={classes.linkSectionl} href="#"> Datenschutz </a>
        <a className={classes.linkSectionl} href="#"> Impressum </a>
         </div>



       <div className={classes.linkSection}>
        <a className={classes.linkSectionl}> Hilfe </a>
        <a className={classes.linkSectionl}> Unsere Partner </a>

         </div>
         </div>
    </GridItem>

       
   
       <GridItem xs={12} sm={12} md={4} >
    
        <div className={classes.right}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement="bottom"
          classes={{tooltip: classes_links.tooltip}}
        >
          <Button
            color="transparent"
            className={classes_links.navLink}
          >
            <i className={classes_links.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on facebook"
          placement="bottom"
          classes={{tooltip: classes_links.tooltip}}
        >
          <Button
       
        
            color="transparent"
            className={classes_links.navLink}
          >
            <i className={classes_links.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on google-plus"
          placement="bottom"
          classes={{tooltip: classes_links.tooltip}}
        >
          <Button
            color="transparent"
            className={classes_links.navLink}
          >
            <i className={classes_links.socialIcons + " fab fa-google-plus"} />
          </Button>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on instagram"
          placement="bottom"
          classes={{tooltip: classes_links.tooltip}}
        >
          <Button
     
            color="transparent"
            className={classes_links.navLink}
          >
            <i className={classes_links.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
        </div>

      </GridItem>
     
     </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
