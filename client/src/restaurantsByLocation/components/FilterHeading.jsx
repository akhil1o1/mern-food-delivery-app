import { Typography } from "@mui/material";

function FilterHeading({heading}) {
    return <Typography
    mt="1rem"
    variant="h4"
    color="#192F60"
    fontWeight="500"
    fontSize="1rem"
  >
    {heading}
  </Typography>
}

export default FilterHeading;