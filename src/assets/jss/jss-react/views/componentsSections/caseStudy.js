import { container } from "assets/jss/jss-react.js";

import image from "assets/img/caseStudy.png";

const caseStudyStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",

  
  },
  imgSymbol:{
    height: "50px",
    width: "50px"
  },

  container,
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },

  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  inputIconsColor: {
    color: "#495057"
  },
  contactCardh:{
 
    color: "grey",
    fontWeight: "500",
    paddingTop: "10%"
  },
  contactCardp:{
    color: "grey",
    fontSize: "10px"
  },
  divider:{
    width: "12%",
    padding: "10px auto"
  },
  wrapper:{
    backgroundColor: "white"
  },
  contactCard:{
    padding: "50px",
    height: "100%",
    textAlign: "center"
  },
  title:{
    color:"white",
    fontWeight: "500"
  },
  description:{
    fontWeight: "300",
    fontSize: "1em",
    color:"white"
  },
  head:{
    marginBottom:"7%",
    textAlign:"center",


  }
};


export default caseStudyStyle;
