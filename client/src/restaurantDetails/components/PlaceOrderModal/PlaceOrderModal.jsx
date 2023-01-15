import { Dialog, DialogTitle } from "@mui/material";
import ChooseOrder from "./ChooseOrder";
import EnterAddress from "./EnterAddress";

function PlaceOrderModal({
  showPlaceOrder,
  closePlaceOrder,
  showEnterAddress,
  handleShowEnterAddress,
}) {
  // const [showChooseOrder, setShowChooseOrder] = useState(true);

  return (
    <Dialog
      open={showPlaceOrder}
      onClose={closePlaceOrder}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ fontSize: "2rem", fontWeight: 600, color: "#192F60" }}>
        The Big Chill Cakery
      </DialogTitle>
      {!showEnterAddress && (
        <ChooseOrder handleShowEnterAddress={handleShowEnterAddress} />
      )}
      {showEnterAddress && <EnterAddress />}
    </Dialog>
  );
}

export default PlaceOrderModal;
