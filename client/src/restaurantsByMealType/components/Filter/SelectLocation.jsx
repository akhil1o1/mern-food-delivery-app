import { useState } from "react";
import { nanoid } from "nanoid";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";

const locations = ["Delhi", "Mumbai", "Bengaluru", "Chennai"];

function SelectLocation() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Typography
        mt="1rem"
        variant="h4"
        color="#192F60"
        fontWeight="500"
        fontSize="1rem"
      >
        Select Location
      </Typography>
      <FormControl sx={{ my: 1, minWidth: 120, width: "90%" }} size="small">
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
          {locations.map((location) => (
            <MenuItem key={nanoid()} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectLocation;
