import { useState } from "react";
import {Tabs, Tab, Typography, Box} from "@mui/material";
import PropTypes from "prop-types";
import Overview from "./Overview";
import Contact from "./Contact";

import "./DetailsTab.css";

// component from mui

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DetailsTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              textTransform: "none",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
            label="Overview"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "none",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
            label="Contact"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Overview/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Contact/>
      </TabPanel>
    </Box>
  );
}

export default DetailsTab;
