//import bgMobile from "../img/bg-header-mobile.svg";
//import bgDesktop from "../img/bg-header-desktop.svg";

const JobListingStyles = {
  JobListing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  JobListing__header: {
    height: "9.6rem",
    width: "100%",
    //backgroundColor: "#5DA5A4",
    //backgroundImage: `url(${bgMobile})`,
    //backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  "@media(min-width: 48rem)": {
    JobListing__header: {
      // backgroundImage: `url(${bgDesktop})`,
    },
  },
};

export default JobListingStyles;
