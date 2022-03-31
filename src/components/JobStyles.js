const JobStyles = {
  Job: {
    height: "100%",
    backgroundColor: "white",
    padding: "2rem 1.5rem",
    paddingBottom: ".5rem",
    margin: "3rem 0",
    borderRadius: "1rem",
    boxShadow: "0px 31px 20px -20px #D7EBEC",
    position: "relative",
  },

  company__details: {
    display: "flex",
  },
  Job__logo: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    backgroundColor: "lightgrey",
    position: "absolute",
    top: "-1.5rem",
  },
  Job__details: {
    height: "5.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: ".4rem 0",
  },
  position: {
    cursor: "pointer",
    transition: "all .3s ease-in-out",
    "&:hover": {
      color: "#5DA5A4",
    },
  },
  Job__company: {
    color: "#5DA5A4",
    fontSize: ".8rem",
    display: "flex",
    alignItems: "center",
  },
  recent: {
    fontSize: ".6rem",
    textTransform: "uppercase",
    backgroundColor: "#5DA5A4",
    color: "white",
    padding: ".5rem .8rem 0.3rem .8rem",
    marginLeft: ".5rem",
    borderRadius: "1rem",
  },
  featured: {
    backgroundColor: "black",
  },

  minorDetails: {
    color: "#9B9FA0",
    fontWeight: "400",
    fontSize: ".8rem",
    display: "flex",
    "& p": {
      marginRight: "1rem",
    },
  },

  divider: {
    width: "100%",
    margin: " .5rem 0 1rem 0",
  },
  skills: {
    width: "100%",
    textAlign: "left",
    // backgroundColor: "red",
    // display: "flex",
    // flexWrap: "wrap",
    "& button": {
      fontWeight: "600",
      color: "#5DA5A4",
      backgroundColor: "#F0FAFB",
      padding: ".5rem",
      border: "none",
      borderRadius: ".3rem",
      marginRight: ".8rem",
      marginBottom: "1rem",
      cursor: "pointer",
      transition: "all .3s ease-in-out",
      "&:hover": {
        color: "white",
        backgroundColor: "#5DA5A4",
      },
    },
  },

  "@media(min-width: 64rem)": {
    Job: {
      padding: "2rem 2.5rem",
      margin: "1.5rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    Job__details: {
      width: "auto",
      marginLeft: "1rem",
      display: "flex",
    },
    Job__logo: {
      width: "5.5rem",
      height: "5.5rem",
      position: "relative",
      top: "0",
    },
    skills: {
      width: "auto",
      // backgroundColor: "red",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
  },
};

export default JobStyles;
