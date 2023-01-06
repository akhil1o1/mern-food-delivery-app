import { useState } from "react";

import {InputLabel, MenuItem, FormControl,Select} from "@mui/material";

function SelectLocation() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <FormControl sx={{my:1, minWidth: 120, width:"90%" }} size="small">
      <InputLabel id="demo-select-small">Location</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={location}
        label="Location"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Delhi"}>Delhi</MenuItem>
        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectLocation;
