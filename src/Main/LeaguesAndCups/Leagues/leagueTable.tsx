import React from "react";
import BeforeTable from "../BeforeTable";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
function LeagueTable(props) {
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
    <div className="flex flex-col justify-evenly w-full md:w-8/12 py-5 px-2 md:px-10">
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
