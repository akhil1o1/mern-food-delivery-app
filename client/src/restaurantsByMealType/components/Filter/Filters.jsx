import { Card, Typography } from "@mui/material";

import SelectLocation from "./SelectLocation";
import Cousine from "./Cousine";
import CostForTwo from "./CostForTwo";
import Sort from "./Sort";

function Filter() {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        padding:"20px",
        color:"#8C96AB",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
        <Typography my="5px" variant="h3" color="#192F60" fontWeight="600" fontSize="1.2rem">Filters</Typography>
        <SelectLocation/>
        <Cousine/>
        <CostForTwo/>
        <Sort/>
    </Card>
  );
}

export default Filter;
