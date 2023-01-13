import { Typography, Box } from "@mui/material";

function Info({ title, description }) {
  return (
    <Box my="2rem">
      <Typography mb="1rem" fontSize="1.1rem" fontWeight="500" color="#192F60">
        {title}
      </Typography>
      <Typography fontSize="1rem" color="#192F60" width="35%">
        {description}
      </Typography>
    </Box>
  );
}

export default Info;
