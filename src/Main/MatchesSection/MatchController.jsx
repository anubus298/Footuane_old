import CompetitionUi from "./CompetitionUi.tsx";
function MatchController(props) {
  return (
    <div className="mt-10  h-[650px] overflow-auto border-e-1 border-s-1 border-white ">
      {Object.keys(props.matches).map((val) => {
        return (
          <CompetitionUi
            setMatches={props.setMatches}
            localUrl={props.localUrl}

            key={crypto.randomUUID()}
            requestingClubInfo={props.requestingClubInfo}
            matches={props.matches[val]}
            currentDate={props.currentDate}
            callingCompetitionTable={props.callingCompetitionTable}
          ></CompetitionUi>
        );
      })}
    </div>
  );
}

export default MatchController;
