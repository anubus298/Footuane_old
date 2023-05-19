import { DataGrid } from "@mui/x-data-grid";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

function GroupCard(props) {
  let ThemeOptions = createTheme({
    typography: {
      fontFamily: "Tajawal",
      fontWeightMedium: "bold",
      fontWeightRegular: "medium",
      fontSize: 16,
    },
  });
  const rows = makingRows(props.groupinfo),
    columns = makingColumns(
      props.groupinfo,
      props.requestingClubInfo,
      props.width
    );
  return (
    <Accordion
      className="forceColor w-full"
      TransitionProps={{ unmountOnExit: false }}
    >
      <AccordionSummary
        expandIcon={
          <FontAwesomeIcon icon={faCaretDown} className={`text-white `} />
        }
      >
        <p className="font-extrabold">
          {props.groupinfo["group"][props.groupinfo["group"].length - 1] +
            "   المجموعة "}
        </p>
      </AccordionSummary>
      <AccordionDetails>
        
        <ThemeProvider theme={ThemeOptions}>
          <DataGrid
            disableColumnMenu={true}
        disableRowSelectionOnClick={true}

            className="w-full"
            initialState={{
              sorting: {
                sortModel: [{ field: "col8", sort: "asc" }],
              },
            }}
            pageSizeOptions={[]}
            rows={rows}
            columns={columns}
            getRowClassName={() => " bg-mainLightPink  text-white "}
            getCellClassName={() => {
              return "MuiDataGrid-cell--textCenter";
            }}
          ></DataGrid>
        </ThemeProvider>
      </AccordionDetails>
    </Accordion>
  );
}

// *functions for working
function makingRows(data) {
  let tempObJ = {},
    temp = [];
  for (let j = 0; j < Object.keys(data["table"]).length; j++) {
    tempObJ = {};
    for (let k = 1; k < Object.keys(data["table"][0]).length + 1; k++) {
      if (k !== 9) {
        tempObJ[`col${k}`] =
          data["table"][j][Object.keys(data["table"][j])[k - 1]];
      } else {
        tempObJ[`col${k}`] = [
          data["table"][j]["team"]["crest"],
          data["table"][j]["team"]["id"],
          data["table"][j]["team"]["name"],
        ];
      }
    }
    tempObJ["id"] = j;
    tempObJ["image"] = temp.push(tempObJ);
  }
  return temp;
}

function makingColumns(data, func) {
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
  };
  let i = 1,
    columns = [];
  for (let va of Object.keys(data["table"]["0"])) {
    columns.push({
      field: "col" + i,
      headerName: translateCard[va],
      editable: false,
      headerAlign: "center",
      headerClassName: "bg-mainGrey text-white text-bolder ",
      width:60
    });
    i++;
  }
  columns[8]["renderCell"] = (params) => {
    return (
      <div className="flex items-center justify-between w-full">
        <p className="text-xs">{params.value[2]}</p>
        <Tooltip title={params.value[2]} placement="right-start">
          <img
            onClick={() => {
              func(params.value[1]);
            }}
            src={params.value[0]}
            width="40px"
            alt={params.value[2]}
            className="cursor-pointer"
          />
          
        </Tooltip>
    
      </div>
    );
  };
 
  columns[8]["width"] = 185;
 

  return columns;
}

export default GroupCard;
