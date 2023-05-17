import LeagueTable from "./leagueTable.tsx";
import CupTable from "../Cups/CupTable";
import DocumentTitle from "react-document-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
function CompetitionTable(props) {
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
  let comp =
    props.competitionInfo["competition"]["type"] === "LEAGUE" ? (
      <DocumentTitle title="Footuane | جدول الدوري ">
        <LeagueTable
          requestingClubInfo={props.requestingClubInfo}
          localUrl={props.localUrl}
          competitionInfo={props.competitionInfo}
          setCompetitionInfo={props.setCompetitionInfo}
          setMatches={props.setMatches}
          callingCompetitionTable={props.callingCompetitionTable}
        ></LeagueTable>
      </DocumentTitle>
    ) : props.competitionInfo["standings"][0]["table"][0]["team"]["name"] !==
      null ? (
      <DocumentTitle title={"Footuane |  جدول الكأس"}>
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
      </DocumentTitle>
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
