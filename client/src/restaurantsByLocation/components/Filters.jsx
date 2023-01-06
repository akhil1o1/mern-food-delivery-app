import { Card, Checkbox, Radio, Typography } from "@mui/material";

import SelectLocation from "./SelectLocation";

import classes from "./Filter.module.css";

function Filter() {
  return (
    <Card
      sx={{
        width: "25%",
        borderRadius: "10px",
        padding:"10px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
        <Typography my="5px" variant="h3" color="#192F60" fontWeight="600" fontSize="1.2rem">Filters</Typography>
        <Typography variant="h4" color="#192F60" fontSize="1rem">Select Location</Typography>
        <SelectLocation/>
    </Card>
  );
}

export default Filter;
