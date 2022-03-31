const FilterBarStyles = {
  FilterBar: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: ".5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    position: "absolute",
    top: "-6rem",
  },
  filter__wrapper: {
    display: "flex",
  },
  filterTab: {
    marginRight: "1rem",
    display: "flex",
  },
  filter: {
    fontSize: ".8rem",
    backgroundColor: "#F0FAFB",
    padding: ".5rem",
    borderRadius: ".2rem 0 0 .2rem ",
  },
  removeFilter: {
    backgroundColor: "#5DA5A4",
    width: " 2.5rem",
    borderRadius: "0 .2rem .2rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#303E3F",
    },
  },

  clear: {
    fontSize: ".8rem",
    color: "#5DA5A4",

    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default FilterBarStyles;
