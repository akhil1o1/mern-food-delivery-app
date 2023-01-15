import {
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import InputComponent from "../../../UIElements/formElements/InputComponent";

function EnterAddress({ showEnterDetails, closeEnterDetails }) {
  return (
    <>
      <DialogContent sx={{ my: "2rem", color:"#192F60" }}>
        <Box mb="1.5rem">
          <Typography>Name</Typography>
          <InputComponent
            type="simple"
            fullWidth
            placeholder="Enter your name"
          />
        </Box>
        <Box mb="1.5rem">
          <Typography>Mobile Number</Typography>
          <InputComponent
            type="simple"
            fullWidth
            placeholder="Enter your mobile number"
          />
        </Box>
        <Box mb="1.5rem">
          <Typography>Address</Typography>
          <InputComponent
            type="simple"
            fullWidth
            multiline
            rows={4}
            placeholder="Enter your address"
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "flex-end",
          px: "1.5rem",
          py: "1rem",
          backgroundColor: "#f5efef",
        }}
      >
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
    </>
  );
}

export default EnterAddress;
