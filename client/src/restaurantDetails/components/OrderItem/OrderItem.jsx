import { Box } from "@mui/material";
import VegOrNonVegMark from "./VegOrNonVegMark";
import OrderDetails from "./OrderDetails";
import AddOrder from "./AddOrder";

function OrderItem({ buttonMode }) {
  return (
    <Box
      my="2rem"
      p="0.7rem"
      borderRadius="10px"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
    >
      <VegOrNonVegMark />
      <Box mt="0.8rem" display="flex" justifyContent="space-between">
        <Box flex="0.6">
          <OrderDetails />
        </Box>
        <Box flex="0.3">
          <AddOrder button={buttonMode} />
        </Box>
      </Box>
    </Box>
  );
}

export default OrderItem;
