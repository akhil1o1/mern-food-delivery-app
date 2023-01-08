import { Typography, Box, Stack } from "@mui/material";
import Filter from "../components/Filter/Filters";
import RestaurantCard from "../components/Restaurant/RestaurantCard";

import classes from "./RestaurantByMealType.module.css"

function RestaurantsByMealType() {
  return (
    <section className={classes.restaurantsByLocation_sec}>
      <Typography
        mb="2rem"
        variant="h1"
        fontWeight="800"
        fontSize="2.5rem"
        color="#192F60"
      >
        Breakfast Places in Mumbai
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Filter />
        <Stack>
          <RestaurantCard/>
        </Stack>
      </Box>
    </section>
  );
}

export default RestaurantsByMealType;
