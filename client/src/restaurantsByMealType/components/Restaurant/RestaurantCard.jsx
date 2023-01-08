import { Card, Typography, Box, Stack } from "@mui/material";

import breakfastImg from "../../../assets/restaurantSearch/breakfast.png";
import dinnerImg from "../../../assets/restaurantSearch/dinner.png";
import drinksImg from "../../../assets/restaurantSearch/drinks.png";
import lunchImg from "../../../assets/restaurantSearch/lunch.png";
import snacksImg from "../../../assets/restaurantSearch/snacks.png";
import nightlifeImg from "../../../assets/restaurantSearch/nightlife.png";

import classes from "./RestaurantCard.module.css"

function RestaurantCard() {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        padding: "2rem",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
      <Box display="flex">
        <Box flex="0.3"  >
          <img className={classes.food_image} src={breakfastImg} alt="food item" />
        </Box>
        <Stack flex="0.7" spacing={2} p="1.5rem 1rem" display="flex">
          <Typography
            variant="h2"
            fontWeight="700"
            fontSize="2rem"
            color="#192F60"
          >The Big Chill Cakery</Typography>
          <Typography variant="h3" fontSize="1rem" color="#192F60" fontWeight="600" textTransform="capitalize">fort</Typography>
          <Typography variant="body1" fontSize="1rem" color="#636F88" textTransform="capitalize">Shop 1, Plot D, Samruddhi Complex, Chincholi …</Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default RestaurantCard;
