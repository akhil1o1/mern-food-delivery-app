import { Typography } from "@mui/material";
import Info from "./Info";

function Overview() {
  return (
    <>
      <Typography
        variant="h3"
        my="1rem"
        fontSize="1.3rem"
        fontWeight="500"
        color="#192F60"
      >
        About this place
      </Typography>
      <Info title="Cousine" description="Bakery, Fast-food"/>
      <Info title="Average Cost" description="₹700 for two people (approx.)"/>
    </>
  );
}

export default Overview;
