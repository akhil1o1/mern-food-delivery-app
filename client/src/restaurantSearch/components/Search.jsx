import {  Typography, TextField } from "@mui/material";

import classes from "./Search.module.css";

function Search() {
  return (
    <div className={`${classes.banner} center`}>
      <Typography variant="h1" fontSize="2.5rem" fontWeight="600" color="#fff">
        Find the best restaurants, cafés, and bars
      </Typography>
    </div>
  );
}

export default Search;
