import {createTheme, ThemeProvider} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RestaurantSearch from "./restaurantSearch/pages/RestaurantSearch";
import RestaurantsByMealType from "./restaurantsByMealType/pages/RestaurantsByMealType";
import RestaurantDetails from "./restaurantDetails/pages/restaurantDetails";
import Footer from "./Footer/Footer";

import './App.css';

function App() {

  const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
  },
});

  return (<ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/restaurantSearch" element={<RestaurantSearch/>}/>
        <Route path="/restaurantsByMealType" element={<RestaurantsByMealType/>}/>
        <Route path="/restaurantDetails" element={<RestaurantDetails/>}/>
      </Routes>
    </Router>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
