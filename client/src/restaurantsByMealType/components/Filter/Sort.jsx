import { nanoid } from "nanoid";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import FilterHeading from "./FilterHeading";

const sortTypes = ["Price low to high", "Price high to low"];

function Sort() {
  return (
    <>
      <FilterHeading heading="Sort" />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Price low to high"
          name="radio-buttons-group"
        >
          {sortTypes.map((sortType) => (
            <FormControlLabel
              key={nanoid()}
              value={sortType}
              control={<Radio />}
              label={sortType}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Sort;
