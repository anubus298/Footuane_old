import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
const ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ea638c",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      paper: "#30343f",
    },
    text: {
      primary: "#fafafa",
      secondary: "#fafafa",
      disabled: "rgba(201,201,201,0.38)",
    },
    info: {
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Tajawal",
  },
});

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        props.setCurrentDate(props.date);
      }}
      {...props}
    />
  );
}

export default function TabsNav(props) {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" bg-mainGrey ">
      <ThemeProvider theme={ThemeOptions}>
        <Box className="flex justify-center" sx={{ width: "100%" }}>
          <div></div>
          {props.currentTab === "matches" && (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab
                label=" مباريات الغد"
                setCurrentDate={props.setCurrentDate}
                date="tomorrow"
                href="/drafts"
              />
              <LinkTab
                label="مباريات اليوم"
                setCurrentDate={props.setCurrentDate}
                date="today"
                href="/spam"
              />
              <LinkTab
                label="مباريات الأمس"
                setCurrentDate={props.setCurrentDate}
                date="yesterday"
                href="/trash"
              />
            </Tabs>
          )}
          {props.currentTab !== "matches" && (
            <button className="text-white justify-self-end  p-2 hover:bg-gray-500 transition-all" onClick={()=>props.setCurrentTab("matches")}>
              رجوع
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-white ms-3"
              />
            </button>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
}
