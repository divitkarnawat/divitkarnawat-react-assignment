import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/jss-react/views/componentsSections/completedStyle.js";
const useStyles = makeStyles(styles);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>PRODUKT</h2>
            <h4>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </h4>
            
            <p>
            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. ... The are likely to focus on the text, disregarding the layout and its elements.
            </p>
          </GridItem>

         
        </GridContainer>
      </div>
     
      <video id='player' controls playsinline width="100%"
        poster="http://media.w3.org/2010/05/sintel/poster.png" className={classes.video}>
        <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
        <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
        <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />
        
        <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srclang="en" default></track>
  
     <p>Your user agent does not support the HTML5 Video element.</p>
      </video>

    </div>
  );


}
