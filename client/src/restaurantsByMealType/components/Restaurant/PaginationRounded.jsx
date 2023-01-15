import { Pagination, Stack } from "@mui/material";

function PaginationRounded() {
  return (
    <Stack spacing={2} my="3rem" alignItems="center">
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

export default PaginationRounded;
