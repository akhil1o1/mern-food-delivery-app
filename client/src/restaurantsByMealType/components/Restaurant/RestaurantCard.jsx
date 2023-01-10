import { Card, Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import breakfastImg from "../../../assets/images/breakfast.png";
// import dinnerImg from "../../../assets/images/dinner.png";
// import drinksImg from "../../../assets/images/drinks.png";
// import lunchImg from "../../../assets/images/lunch.png";
// import snacksImg from "../../../assets/images/snacks.png";
// import nightlifeImg from "../../../assets/images/nightlife.png";

import classes from "./RestaurantCard.module.css";

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
      <Link className={classes.card_link} to="/restaurantDetails">
        {/* top half of the card */}
        <Box display="flex">
          <Box flex="0.3">
            <img
              className={classes.food_image}
              src={breakfastImg}
              alt="food item"
            />
          </Box>
          <Stack flex="0.7" spacing={2} p="1.5rem 1rem">
            <Typography
              variant="h2"
              fontWeight="700"
              fontSize="2rem"
              color="#192F60"
            >
              The Big Chill Cakery
            </Typography>
            <Typography
              fontSize="1rem"
              color="#192F60"
              fontWeight="600"
              textTransform="uppercase"
            >
              fort
            </Typography>
            <Typography fontSize="1rem" color="#636F88">
              Shop 1, Plot D, Samruddhi Complex, Chincholi …
            </Typography>
          </Stack>
        </Box>
        <Box height="2px" my="1.5rem" backgroundColor="#DEDFE5" width="100%" />

        {/* bottom half of the card */}
        <Box display="flex">
          <Box flex="0.35">
            <Typography
              fontSize="1rem"
              color="#636F88"
              textTransform="uppercase"
              mt="1rem"
            >
              cousines:
            </Typography>
            <Typography
              fontSize="1rem"
              color="#636F88"
              textTransform="uppercase"
              mt="1rem"
            >
              cost for two:
            </Typography>
          </Box>
          <Box flex="0.65">
            <Typography
              fontSize="1rem"
              color="#192F60"
              textTransform="capitalize"
              mt="1rem"
            >
              Bakery
            </Typography>
            <Typography
              fontSize="1rem"
              color="#192F60"
              textTransform="capitalize"
              mt="1rem"
            >
              ₹700
            </Typography>
          </Box>
        </Box>
      </Link>
    </Card>
  );
}

export default RestaurantCard;
