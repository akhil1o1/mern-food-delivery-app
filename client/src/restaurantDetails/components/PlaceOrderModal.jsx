import {Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";

function PlaceOrderModal({showPlaceOrder, handleClose}) {
    return <Dialog open={showPlaceOrder} onClose={handleClose}>
        <DialogTitle>The Big Chill Cakery</DialogTitle>
    </Dialog>
}

export default PlaceOrderModal;