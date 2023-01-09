import { Typography, Box, Stack } from "@mui/material";
import Filter from "../components/Filter/Filters";
import RestaurantCard from "../components/Restaurant/RestaurantCard";
import PaginationRounded from "../components/Restaurant/PaginationRounded";

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
      <Box display="flex" gap="2.5rem" justifyContent="space-between">
      <Box flex="0.25">
      <Filter />
      </Box>
        <Stack flex="0.75" spacing={5}>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
        </Stack>
      </Box>
      <PaginationRounded/>
    </section>
  );
}

export default RestaurantsByMealType;
