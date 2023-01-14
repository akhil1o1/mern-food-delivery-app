import { Typography } from "@mui/material";

function OrderDetails() {
  return (
    <>
      <Typography
        variant="body1"
        fontSize="1.1rem"
        fontWeight="500"
        color="#292C40"
      >
        Gobi Manchurian
      </Typography>
      <Typography
        variant="body1"
        fontSize="1.1rem"
        fontWeight="500"
        color="#292C40"
      >
        ₹89
      </Typography>
      <Typography variant="body2" fontSize="0.9rem" color="#696B78">
        Deep-fried cauliflower florets tossed in pungent spices to form a
        flavorsome dry curry
      </Typography>
    </>
  );
}

export default OrderDetails;
