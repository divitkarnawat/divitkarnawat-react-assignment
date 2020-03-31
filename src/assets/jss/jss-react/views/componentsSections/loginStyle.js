import { container } from "assets/jss/jss-react.js";

import image from "assets/img/map.jpg";

const loginStyle = {
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
    color: "blue",
    fontSize: "16px"
  },
  contactCardp:{
    color: "grey",
    fontSize: "14px"
  },
  contactCard:{
    padding: "50px",
    height: "100%"
  },
  title:{
  
    fontWeight: "500"
  },
  description:{
    fontWeight: "300",
    fontSize: "1em"
  },
  head:{
    marginBottom:"7%",
    textAlign:"center"

  }
};


export default loginStyle;
