import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomTable from "./component/CustomTable";
import EditInfo from "./Pages/EditInfo";

const data = [
  {
    sno: 1,
    sender: "Azar",
    email: "azar@g.com",
    contact: "123456789",
    action: "done",
  },
  {
    sno: 2,
    sender: "Prashant",
    email: "pras@g.com",
    contact: "123456789",
    action: "done",
  },
  {
    sno: 3,
    sender: "Ahmed",
    email: "ahamad@g.com",
    contact: "123456789",
    action: "done",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = useState(0);
  const [apiData, setApiData] = useState({});
  const [id, setId] = useState(0);
  const [populate, setpopulate] = useState({});

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const displaydata = (id) => {
    console.log("id", data[id]);
    console.log("test", populate);
    data[id].sender = "helll";
    setpopulate(data[id]);
  };
  // useEffect(() => {
  //   fetch(
  //     "http://api-dev.wuelev8.tech:8080/internity/api/v1/notification/?messageType=GENERAL"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("hi i am data", json);
  //       setApiData(json);
  //     });
  // }, []);
  // console.log("I am state", apiData);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Guest queries" {...a11yProps(0)} />
          <Tab label="User queries" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        existing table
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomTable rows={data} apiData={apiData} displaydata={displaydata} />
      </TabPanel>

      <EditInfo populate={populate} />
    </Box>
  );
}
// export default App;
