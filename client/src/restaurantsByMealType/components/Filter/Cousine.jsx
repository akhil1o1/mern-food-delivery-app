import { nanoid } from "nanoid";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import FilterHeading from "./FilterHeading";

const cousines = ["South Indian", "Chinese", "Fast Food", "Street Food"];

function Cousine() {
  return (
    <>
      <FilterHeading heading="Cousine" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="North Indian"
        />
        {cousines.map((cousine) => (
          <FormControlLabel
            key={nanoid()}
            control={<Checkbox />}
            label={cousine}
          />
        ))}
      </FormGroup>
    </>
  );
}

export default Cousine;
