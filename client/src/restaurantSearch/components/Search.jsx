import { Box, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import InputComponent from "../../UIElements/formElements/InputComponent";
import classes from "./Search.module.css";

function Search() {
  return (
    <section>
      <Box className={`${classes.banner} center`}>
        <Box
          width="8rem"
          height="8rem"
          borderRadius="100%"
          className="center"
          backgroundColor="#fff"
        >
          <Typography variant="h3" color="error.dark" fontWeight="700">
            FDS
          </Typography>
        </Box>
        <Typography
          variant="h1"
          fontSize="2.5rem"
          mt="2%"
          fontWeight="600"
          color="#fff"
        >
          Find the best restaurants, cafés, and bars
        </Typography>
        <Box display="flex" flexDirection="row" gap="3%" mt="2%">
          <InputComponent
            type="input-with-icon"
            id="search-location"
            placeholder="Please type a location"
            variant="outlined"
            icon={<FmdGoodOutlinedIcon/>}
          />
          <InputComponent
            type="input-with-icon"
            id="search-restaurant"
            placeholder="Search for restaurants"
            variant="outlined"
            width="35vw"
            icon=<SearchOutlinedIcon />
          />
        </Box>
      </Box>
    </section>
  );
}

export default Search;
