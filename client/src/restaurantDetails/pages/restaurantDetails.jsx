import { Typography, Box } from "@mui/material";

import classes from "./restaurantDetails.module.css";

function RestaurantDetails() {
  return (
    <section className={classes.details_section}>
    <Box mt="2rem" className={classes.banner}>
    </Box>
      <Typography my="2rem" variant="h1" fontSize="2rem" color="#192F60" fontWeight="600">The Big Chill Cakery</Typography>
    </section>
  );
}

export default RestaurantDetails;
