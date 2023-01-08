import { nanoid } from "nanoid";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import FilterHeading from "./FilterHeading";

const costData = [
  "less than 500",
  "500 to 1000",
  "1000 to 1500",
  "1500 to 2000",
  "2000+",
];

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
          {costData.map((cost) => (
            <FormControlLabel
              key={nanoid()}
              value={cost}
              control={<Radio />}
              label={cost}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default CostForTwo;
