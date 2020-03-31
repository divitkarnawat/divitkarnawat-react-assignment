import { container } from "assets/jss/jss-react";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  wrapper:{
      width:"100%",
    color:"white",
    display: "flex",
    flexDirection: "row"
  },

  row1item1:{
        display: "flex",
        flexDirection: "column",
        color:"white"
  },
  image:{
            
            height: "50%",
              },
  imageLabel:{
     fontSize: "10px",
      height: "50%",
      backgroundColor: "#0D4F8B",
      padding: "20px",
      
  },
  divider:{
        width: "10%",
        fontWeight: "500",

  },
  labelDesc:{
    fontSize: "10px"
  },
img:{
    width: "100%",
    height:"100%"
    
}

};

export default completedStyle;
