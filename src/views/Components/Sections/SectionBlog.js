import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/jss-react/views/componentsSections/blogStyle.js";



import bloglab from "assets/img/bloglab.png";
import blogboil from "assets/img/blogboil.png";
import blogwall from "assets/img/blogwall.png";
import blogtrain from "assets/img/blogtrain.png";




const useStyles = makeStyles(styles);


export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>UNSER BLOG</h2>
            <h4>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </h4>
            
            <p>
            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. ... The are likely to focus on the text, disregarding the layout and its elements.
            </p>
            <hr />
            <br />
            <br />
            </GridItem>

         
        </GridContainer>
      </div>
     
<GridContainer justify="center">

<GridItem  xs={12} sm={12} md={8} sec="blog">

            <div className={classes.image}>
                <img src={blogboil} className={classes.img}/>
            </div>
            <div className={classes.imageLabel} >
                <h6>Lorem Ipsum</h6>
                <h4>Lorem Ipsum</h4>
                <hr align="left" className={classes.divider} />
                <p className={classes.labelDesc}> Lorem ipsum dolor sit amet, quaeque accusata mediocritatem vis ne. Duo dico alia imperdiet eu.</p>
                <h6>Mehr Lessen </h6>
            </div>
   
</GridItem>
<GridItem  xs={12} sm={12} md={8} sec="blog">

        <div className={classes.imageLabel}>
                <h6>Lorem Ipsum</h6>
                <h4>Lorem Ipsum</h4>
                <hr align="left" className={classes.divider} />
                <p className={classes.labelDesc}> Lorem ipsum dolor sit amet, quaeque accusata mediocritatem vis ne. Duo dico alia imperdiet eu.</p>
                <h6>Mehr Lessen </h6>
            </div>
            <div className={classes.image}>
                <img src={bloglab} className={classes.img}/>
            </div>
            
   

</GridItem>
<GridItem  xs={12} sm={12} md={8} sec="blog">

            <div className={classes.image}>
                <img src={blogboil} className={classes.img}/>
            </div>
            <div className={classes.imageLabel} >
                <h6>Lorem Ipsum</h6>
                <h4>Lorem Ipsum</h4>
                <hr align="left" className={classes.divider} />
                <p className={classes.labelDesc}> Lorem ipsum dolor sit amet, quaeque accusata mediocritatem vis ne. Duo dico alia imperdiet eu.</p>
                <h6>Mehr Lessen </h6>
            </div>

  
</GridItem>  
<GridItem  xs={12} sm={12} md={8} sec="blog">

        <div className={classes.imageLabel}>
                <h6>Lorem Ipsum</h6>
                <h4>Lorem Ipsum</h4>
                <hr align="left" className={classes.divider} />
                <p className={classes.labelDesc}> Lorem ipsum dolor sit amet, quaeque accusata mediocritatem vis ne. Duo dico alia imperdiet eu.</p>
                <h6>Mehr Lessen </h6>
            </div>
            <div className={classes.image}>
                <img src={bloglab} className={classes.img}/>
            </div>
            
    

</GridItem>
    

</GridContainer>

 
     

    </div>
  );


}
