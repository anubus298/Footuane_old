import React from "react";
import BeforeTable from "../BeforeTable";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import MatchPalette from "../../MatchesSection/MatchPallete";
import TopScorer from "../TopScorer";
function LeagueTable(props) {
  const [topScorerData, setTopScorerData] = useState({}),
    [leagueMatches, setLeagueMatches] = useState({});

  useEffect(() => {
    fetch(
      props.localUrl +
        "/upComingLeagueMatches/" +
        props.competitionInfo["competition"]["id"] +
        "/" +
        props.competitionInfo["season"]["currentMatchday"]
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("from leagueTable");
        console.log(data);
        setLeagueMatches(data);
      });
    fetch(
      props.localUrl +
        "/topScorer/" +
        props.competitionInfo["competition"]["id"]
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("from TopScorer");
        console.log(data);
        setTopScorerData(data);
      });
  }, [props.competitionInfo, props.localUrl]);
  const translateCard = {
      draw: "تعادل",
      form: "النمط",
      goalDifference: "الفرق",
      goalsAgainst: "سُجل عليه",
      goalsFor: "سَجل",
      lost: "خسر",
      playedGames: "لعب ",
      points: "النقاط",
      position: "المركز",
      team: "الفريق",
      won: "فاز",
    },
    temp: any = [];
  const ThemeOptions = createTheme({
    typography: {
      fontFamily: "Tajawal",
      fontWeightMedium: "bolder",
      fontWeightRegular: "bold",
      fontSize: 16,
    },
  });

  let i = 1,
    columns: GridColDef[] = [];

  // -------------making columns--------------------------------------
  makingCol();
  // -------------------------------------------end of making columns-----------------
  //----------------------------------------------- making rows-------------------------
  let tempObJ = {};
  for (
    let j = 0;
    j < Object.keys(props.competitionInfo["standings"][0]["table"]).length;
    j++
  ) {
    tempObJ = {};
    for (
      let k = 1;
      k <
      Object.keys(props.competitionInfo["standings"][0]["table"][0]).length + 1;
      k++
    ) {
      if (k !== 10) {
        tempObJ[`col${k}`] =
          props.competitionInfo["standings"][0]["table"][j][
            Object.keys(props.competitionInfo["standings"][0]["table"][j])[
              k - 1
            ]
          ];
      } else {
        tempObJ[`col${k}`] = [
          props.competitionInfo["standings"][0]["table"][j]["team"]["crest"],
          props.competitionInfo["standings"][0]["table"][j]["team"]["id"],
          props.competitionInfo["standings"][0]["table"][j]["team"]["name"],
        ];
      }
    }
    tempObJ["id"] =
      props.competitionInfo["standings"][0]["table"][j]["team"]["id"];
    tempObJ["image"] = temp.push(tempObJ);
  }
  let rows: GridRowsProp = temp;
  return (
    <div className="flex gap-y-5 flex-col justify-evenly w-full md:w-8/12 py-5 px-2 md:px-10">
      <BeforeTable
        localUrl={props.localUrl}
        name={props.competitionInfo["competition"]["name"]}
        data={props.competitionInfo["competition"]}
      ></BeforeTable>
      <ThemeProvider theme={ThemeOptions}>
        <DataGrid
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableColumnMenu={true}
          initialState={{
            sorting: {
              sortModel: [{ field: "col9", sort: "asc" }],
            },
          }}
          pageSizeOptions={[]}
          rows={rows}
          columns={columns}
          getRowClassName={() => " bg-mainLightPink  text-white "}
          getCellClassName={() => {
            return "MuiDataGrid-cell--textCenter";
          }}
        />
      </ThemeProvider>
      <div className="bg-mainGrey p-5">
        <p className="text-xl font-bold text-end text-white">
          : مباريات الجولة الحالية{" "}
        </p>
      </div>
      <div className="flex gap-y-5 flex-col">
        {leagueMatches["matches"] !== undefined &&
          leagueMatches["matches"].length === 0 && (
            <p className="font-extrabold w-full text-center text-xl ">
              لا توجد
            </p>
          )}
        {leagueMatches["matches"] !== undefined &&
          leagueMatches["matches"].map((el) => {
            return (
              <MatchPalette
                setMatches={props.setMatches}
                requestingClubInfo={props.requestingClubInfo}
                val={el}
                key={crypto.randomUUID()}
                callingCompetitionTable={props.callingCompetitionTable}
              ></MatchPalette>
            );
          })}
      </div>
      <div className="bg-mainGrey p-5">
        <p className="text-xl font-bold text-end text-white">: الهدافين </p>
      </div>
      <div className="w-full ">
        {topScorerData["scorers"] !== undefined && (
          <TopScorer
            requestingClubInfo={props.requestingClubInfo}
            localUrl={props.localUrl}
            id={props.competitionInfo["competition"]["id"]}
            topScorerData={topScorerData}
          ></TopScorer>
        )}
      </div>
    </div>
  );

  function makingCol() {
    for (let va of Object.keys(
      props.competitionInfo["standings"][0]["table"][0]
    )) {
      columns.push({
        field: "col" + i,
        headerName: translateCard[va],
        editable: false,
        headerAlign: "center",
        headerClassName: "bg-mainGrey text-xs text-white text-bolder ",
      });
      i++;
    }
    columns[0]["flex"] = 0.5;
    columns[2]["flex"] = 0.5;
    columns[5]["flex"] = 0.5;
    columns[6]["flex"] = 0.5;
    columns[7]["flex"] = 0.5;
    columns[8]["flex"] = 0.5;
    columns[9]["flex"] = 0.5;
    columns[10]["flex"] = 0.5;
    columns[9]["renderCell"] = (params) => {
      return (
        <div className="flex items-center justify-center">
          <Tooltip title={params.value[2]} placement="right-start">
            <img
              onClick={() => {
                props.requestingClubInfo(params.value[1]);
              }}
              src={params.value[0]}
              width="50px"
              alt={params.value[2]}
              className="cursor-pointer"
            />
          </Tooltip>
        </div>
      );
    };
  }
}

export default LeagueTable;
