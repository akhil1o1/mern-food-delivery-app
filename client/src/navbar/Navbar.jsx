import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


/// component from mui

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#CE0505", boxShadow:"none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="600" component="div" sx={{ flexGrow: 1 }}>
            FDS
          </Typography>
          <Box display="flex" gap="1rem">
          <Button color="inherit">Login</Button>
          <Button color="inherit" variant="outlined">Create an account</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
