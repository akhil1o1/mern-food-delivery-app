import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import DetailsTab from "../components/DetailsTab";
import PlaceOrderModal from "../components/PlaceOrderModal";

import classes from "./restaurantDetails.module.css";

function RestaurantDetails() {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);

  const handleClickOpen = () => {
    setShowPlaceOrder(true);
  };

  const handleClose = () => {
    setShowPlaceOrder(false);
  };
  return (
    <section className={classes.details_section}>
      <PlaceOrderModal showPlaceOrder={showPlaceOrder} handleClose={handleClose}/>
      <Box mt="2rem" className={classes.banner}></Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          mt="3rem"
          mb="2rem"
          variant="h1"
          fontSize="2rem"
          color="#192F60"
          fontWeight="600"
        >
          The Big Chill Cakery
        </Typography>
        <Button
          onClick={handleClickOpen}
          size="large"
          sx={{
            backgroundColor: "#CE0505",
            ":hover": { backgroundColor: "#CE0505" },
          }}
          variant="contained"
        >
          Place Online Order
        </Button>
      </Box>
      <DetailsTab />
    </section>
  );
}

export default RestaurantDetails;
