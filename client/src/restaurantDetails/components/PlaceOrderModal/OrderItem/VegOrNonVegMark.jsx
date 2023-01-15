import { Box } from "@mui/system";

function VegOrNonVegMark() {
  return (
    <Box
      height="1rem"
      width="1rem"
      display="flex"
      alignItems="center"
      justfyContent="center"
      border="1px solid #048002"
    >
      <Box
        width="0.7rem"
        m="auto"
        height="0.7rem"
        borderRadius="100%"
        backgroundColor="#048002"
      ></Box>
    </Box>
  );
}

export default VegOrNonVegMark;
