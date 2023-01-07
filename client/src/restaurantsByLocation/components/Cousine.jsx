import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import FilterHeading from "./FilterHeading";

function Cousine() {
  return (
    <>
      <FilterHeading heading="Cousine" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="North Indian"
        />
        <FormControlLabel control={<Checkbox />} label="South Indian" />
        <FormControlLabel control={<Checkbox />} label="Chinese" />
        <FormControlLabel control={<Checkbox />} label="Fast Food" />
        <FormControlLabel control={<Checkbox />} label="Street Food" />
      </FormGroup>
    </>
  );
}

export default Cousine;
