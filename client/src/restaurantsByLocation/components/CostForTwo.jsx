import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import FilterHeading from "./FilterHeading";

function CostForTwo() {
  return (
    <>
      <FilterHeading heading="Cost For Two" />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="less than 500"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="less than 500"
            control={<Radio />}
            label="less than 500"
          />
          <FormControlLabel
            value="500 to 1000"
            control={<Radio />}
            label="500 to 1000"
          />
          <FormControlLabel
            value="1000 to 1500"
            control={<Radio />}
            label="1000 to 1500"
          />
          <FormControlLabel
            value="1500 to 2000"
            control={<Radio />}
            label="1500 to 2000"
          />
          <FormControlLabel value="2000+" control={<Radio />} label="2000+" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default CostForTwo;
