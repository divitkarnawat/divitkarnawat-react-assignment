import { container } from "assets/jss/jss-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
    margin: "auto"
  },
  titleo: {
    fontSize: "2rem",
    fontWeight: "500",
    width: "75%",
    margin: "10px auto",
    padding: "18px 30px",
    position: "relative",
    color: "white",
    backgroundColor: "rgba(0,0,0,.2)",
   
  },
  titlen: {
    fontWeight: "500",
    fontSize: "2rem",
    margin: "10px auto",
    padding: "18px 30px",
    position: "relative",
    color: "white",
    backgroundColor: "rgba(0,0,0,.2)",

  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "250px",
    color:"grey",
    borderStyle: "solid",
    borderColor: "grey",
    margin:"auto"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
