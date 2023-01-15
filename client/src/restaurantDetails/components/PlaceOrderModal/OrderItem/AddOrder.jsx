import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function AddOrder({ button }) {
  return (
    <Box
      height="100%"
      borderRadius="10px"
      backgroundColor="#192F60"
      display="flex"
      alignItems="end"
      justifyContent="center"
    >
      {button && (
        <Button
          //   size="small"
          sx={{
            backgroundColor: "#fff",
            color: "#61B246",
            ":hover": { backgroundColor: "#fff" },
            position: "relative",
            top: "5px",
          }}
          variant="contained"
        >
          Add
        </Button>
      )}

      {!button && (
        <Box
          display="flex"
          position="relative"
          top="5px"
          borderRadius="4px"
          backgroundColor="#fff"
          alignItems="center"
          justifyContent="space-between"
          boxShadow="0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
        >
          <IconButton sx={{ color: "#707070" }}>
            <RemoveIcon />
          </IconButton>
          <Box
            borderRadius="100%"
            width="1rem"
            height="1rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>1</Typography>
          </Box>
          <IconButton sx={{ color: "#61B246" }}>
            <AddIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

export default AddOrder;
