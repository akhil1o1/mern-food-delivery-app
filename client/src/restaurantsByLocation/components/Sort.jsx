import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
  } from "@mui/material";
  import FilterHeading from "./FilterHeading";
  
  function Sort() {
    return (
      <>
        <FilterHeading heading="Sort"/>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Price low to high"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Price low to high"
              control={<Radio />}
              label="Price low to high"
            />
            <FormControlLabel
              value="Price high to low"
              control={<Radio />}
              label="Price hight to low"
            />
          </RadioGroup>
        </FormControl>
      </>
    );
  }
  
  export default Sort;
  