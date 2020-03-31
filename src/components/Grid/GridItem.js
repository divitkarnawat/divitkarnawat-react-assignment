import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

var styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
 
  }
};



export default function GridItem(props) {
  
  const { children, addStyle,sec,  className, ...rest } = props;
  console.log(addStyle);
  var backStyle = addStyle;
  if(backStyle == "white") {styles.grid.backgroundColor= "white";}
  else{styles.grid.backgroundColor= "";}
  if(sec == "caseStudy")
  {
    styles.grid.minWidth = "40%";

  }
  else if(sec == "blog")
  {
    styles.grid.paddingLeft="0px";
    styles.grid.paddingRight="0px";
    styles.grid.width="300px";
    styles.grid.color="white";
  }
  else{
    styles.grid.minWidth = "1px";
    styles.grid.paddingLeft="15px";
    styles.grid.paddingRight="15px";
    styles.grid.width="100%";
    styles.grid.color="";
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
