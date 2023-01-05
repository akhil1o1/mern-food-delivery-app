import { nanoid } from "nanoid";
import { Typography, Box } from "@mui/material";
import MealCard from "./MealCard";

import { mealCardsData } from "../data/mealCardsData";

import classes from "./QuickSearch.module.css";

function QuickSearch() {
  return (
    <section className={classes.quick_search_section}>
      <Typography variant="h2" mt="2rem" fontWeight="800" fontSize="2rem" color="#192F60">
        Quick Searches
      </Typography>
      <Typography variant="body1" color="#8C96AB">
        Discover restaurants by type of meal
      </Typography>
      <Box
        paddingY="3%"
        display="flex"
        gap="50px"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        {mealCardsData.map((data) => (
          <MealCard
            key={nanoid()}
            category={data.category}
            description={data.description}
            image={data.image}
          />
        ))}
      </Box>
    </section>
  );
}

export default QuickSearch;
