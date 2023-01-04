import { Typography } from "@mui/material";
import classes from "./QuickSearch.module.css";

function QuickSearch() {
    return <section className={classes.quick_search_section}>
            <Typography variant="h2" fontWeight="800" fontSize="2rem" color="#192F60">Quick Searches</Typography>
            <Typography variant="body1" color="#8C96AB">Discover restaurants by type of meal</Typography>
    </section>
}

export default QuickSearch;