import { StrictMode, useEffect, useState } from "react";
import HeaderComp from "./Header/header";
import TabsNav from "./Header/Tabs";
import FooterComp from "./Footer/footer";
import MainUi from "./Main/MainUi";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const localUrl = "http://192.168.43.10:5000",
    [isWaiting, setIsWaiting] = useState(false),
    [currentDate, setCurrentDate] = useState("today"),
    [currentTab, setCurrentTab] = useState("matches"),
    [competitionInfo, setCompetitionInfo] = useState({}),
    [width, setWidth] = useState(window.innerWidth),
    [allCompetition, setAllCompetition] = useState({});
  function callingCompetitionTable(comp) {
    setIsWaiting(true);

    fetch(localUrl + `/callingCompetitionTable/${comp}`)
      .then((res) => res.json())
      .then((data) => {
        
        console.log("calling comp table");
        console.log(data);
        setCompetitionInfo(data);
        setCurrentTab("comp");
        setIsWaiting(false);
      });
  }

  useEffect(() => {
    // media query
    const handResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handResizeWindow);
    // competitionInfo for tabs and RelativeTabs
    setIsWaiting(true);
    fetch(localUrl + "/competition")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCompetition(data);
        setIsWaiting(false);
      });
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handResizeWindow);
    };
  }, []);
  return (
    <>
      <Backdrop
        open={isWaiting}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="fixed w-full z-50">
        <HeaderComp
          width={width}
          allCompetition={allCompetition}
        localUrl={localUrl}

          setCurrentTab={setCurrentTab}
          callingCompetitionTable={callingCompetitionTable}
        />
        <TabsNav
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <MainUi
        setIsWaiting={setIsWaiting}
        isWaiting={isWaiting}
        localUrl={localUrl}
        width={width}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        callingCompetitionTable={callingCompetitionTable}
        competitionInfo={competitionInfo}
        setCompetitionInfo={setCompetitionInfo}
        allCompetition={allCompetition}
      />
      <FooterComp></FooterComp>
    </>
  );
}

export default App;
