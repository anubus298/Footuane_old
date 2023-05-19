import { DataGrid } from "@mui/x-data-grid";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Tooltip } from "@mui/material";


function TopScorer(props) {
  let ThemeOptions = createTheme({
    typography: {
      fontFamily: "Tajawal",
      fontWeightMedium: "bold",
      fontWeightRegular: "medium",
      fontSize: 16,
    },
  });

  return (
    <div>
        
      <ThemeProvider theme={ThemeOptions}>
        <DataGrid
          
          disableColumnMenu={true}
          className="w-full h-[400px]"
          initialState={{
            sorting: {
              sortModel: [{ field: "col2", sort: "desc" }],
            },
          }}
          pageSizeOptions={[]}
          rows={makingRows(props.topScorerData)}
          columns={makingColumns(props.topScorerData, props.requestingClubInfo)}
          getRowClassName={() => " bg-mainLightPink  text-white "}
          getCellClassName={() => {
            return "MuiDataGrid-cell--textCenter";
          }}
        ></DataGrid>
      </ThemeProvider>
    </div>
    
  );
}

// *functions for working
function makingRows(data) {
  let tempObJ = {},
    temp = [];
  for (let j = 0; j < Object.keys(data["scorers"]).length; j++) {
    tempObJ = {};
    for (let k = 1; k < Object.keys(data["scorers"][0]).length + 1; k++) {
      if (k < 5) {
        tempObJ[`col${k}`] =
          data["scorers"][j][Object.keys(data["scorers"][j])[k - 1]];
      } else if (k === 5) {
        tempObJ[`col${k}`] = [data["scorers"][j]["player"]["name"]];
      } else if (k === 6) {
        tempObJ[`col${k}`] = [
          data["scorers"][j]["team"]["crest"],
          data["scorers"][j]["team"]["id"],
          data["scorers"][j]["team"]["name"],
        ];
      }
    }
    tempObJ["id"] = j;
    temp.push(tempObJ);
  }
  console.log("temp is :");
  console.log(temp);
  return temp;
}

function makingColumns(data, func) {
  const translateCard = {
    assists: "الصناعات",
    goals: "الأهداف",
    penalties: "ركلات الجزاء",
    playedMatches: "لعب",
    player: "اللاعب",
    team: "الفريق",
  };
  let i = 1,
    columns = [];
  for (let va of Object.keys(data["scorers"]["0"])) {
    columns.push({
      field: "col" + i,
      headerName: translateCard[va],
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-mainGrey text-white text-bolder ",
      columns: 85,
    });
    i++;
  }
  columns[5]["renderCell"] = (params) => {
    return (
      <div className="flex items-center gap-x-2 justify-center">
        <Tooltip title={params.value[2]} placement="right-start">
          <img
            onClick={() => {
              func(params.value[1]);
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
  columns[4]["width"] = 200;
  

  return columns;
}

export default TopScorer;
