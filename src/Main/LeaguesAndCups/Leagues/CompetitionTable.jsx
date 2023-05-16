import LeagueTable from "./leagueTable.tsx";
import CupTable from "../Cups/CupTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
function CompetitionTable(props) {
  let comp =
    props.competitionInfo["competition"]["type"] === "LEAGUE" ? (
      <LeagueTable
        requestingClubInfo={props.requestingClubInfo}
        localUrl={props.localUrl}
        competitionInfo={props.competitionInfo}
        setCompetitionInfo={props.setCompetitionInfo}
      ></LeagueTable>
    ) : props.competitionInfo["standings"][0]["table"][0]["team"]["name"] !==
      null ? (
      <CupTable
      width={props.width}

        localUrl={props.localUrl}
        competitionInfo={props.competitionInfo}
        setCompetitionInfo={props.setCompetitionInfo}
        setMatches={props.setMatches}
        callingCompetitionTable={props.callingCompetitionTable}
        requestingClubInfo={props.requestingClubInfo}
        currentTab={props.currentTab}
      ></CupTable>
    ) : (
      <div className="md:h-[680px] h-56 w-full gap-x-2 flex justify-center items-center text-red-700">
        <p className=" text-4xl font-extrabold">لم تبدأ بعد</p>
        <FontAwesomeIcon
          shake
          size="4x"
          icon={faCircleExclamation}
        ></FontAwesomeIcon>
      </div>
    );
  return comp;
}

export default CompetitionTable;
