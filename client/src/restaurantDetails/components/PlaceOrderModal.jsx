import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import OrderItem from "./OrderItem/OrderItem";

function PlaceOrderModal({ showPlaceOrder, handleClose }) {
  return (
    <Dialog open={showPlaceOrder} onClose={handleClose}>
      <DialogTitle sx={{ fontSize: "2rem", fontWeight: 600, color: "#192F60" }}>
        The Big Chill Cakery
      </DialogTitle>
      <DialogContent sx={{ my: "2rem" }}>
        <OrderItem buttonMode={true} />
        <OrderItem buttonMode={false} />
        <OrderItem buttonMode={false} />
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "space-between",
          px: "1.5rem",
          py: "1rem",
          backgroundColor: "#F5F8FF",
        }}
      >
        <Typography
          fontSize="1.2rem"
          fontWeight="600"
          color="#192F60"
          variant="h2"
        >
          Subtotal ₹178
        </Typography>
        <Button
          sx={{
            backgroundColor: "#CE0505",
            ":hover": { backgroundColor: "#CE0505" },
          }}
          variant="contained"
        >
          Pay Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PlaceOrderModal;
