import { Typography } from "@mui/material";
import Filter from "../components/Filters";

import classes from "./RestaurantByLocation.module.css";

function RestaurantsByLocation() {
  return (
    <section className={classes.restaurantsByLocation_sec}>
      <Typography mb="2rem" variant="h1" fontWeight="800" fontSize="2.5rem" color="#192F60">Breakfast Places in Mumbai</Typography>
      <Filter/>
    </section>
  );
}

export default RestaurantsByLocation;
