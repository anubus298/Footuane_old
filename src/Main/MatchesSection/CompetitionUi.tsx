import React from "react";
import MatchPalette from "./MatchPallete";
function CompetitionUi(props) {
  const CompNameAndColors = {
    "Campeonato Brasileiro Série A": "A الدوري البرازيلي ",
    Championship: "كأس رابطة الأندية الإنجليزية  ",
    "Premier League": "الدوري الإنجليزي الممتاز",
    "UEFA Champions League": "دوري أبطال أوروبا",
    "European Championship": "الدوري الأوروبي",
    "Ligue 1": "الدوري الفرنسي 1",
    Bundesliga: "الدوري الألماني",
    "Serie A": "A الدوري الإيطالي ",
    Eredivisie: "الدوري الهولندي الممتاز",
    "Primeira Liga": "الدوري البرتغالي الممتاز",
    "Copa Libertadores": "كوبا ليبرتادوريس",
    "Primera Division": " الدوري  الإسباني الدرجة الأولى",
    "FIFA World Cup": " كأس العالم فيفا",
  };
  return (
    <div>
      <div className="px-8 mt-10 py-2 text-white flex items-center justify-evenly bg-mainGrey rounded-t-md">
        <div className="flex items-center gap-x-2 hover:scale-110 transition-all">
          <p
            className="cursor-pointer"
            onClick={() =>
              props.callingCompetitionTable(
                props.matches[0]["competition"]["id"]
              )
            }
          >
            {CompNameAndColors[props.matches[0]["competition"]["name"]]}
          </p>
          <div className="bg-white rounded-md overflow-hidden">
            <img
              onClick={() =>
                props.callingCompetitionTable(
                  props.matches[0]["competition"]["id"]
                )
              }
              className="h-14 p-1 cursor-pointer"
              src={
                props.localUrl +
                "/images/" +
                props.matches[0]["competition"]["id"]
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 firstNoRounded">
        {props.matches.map((val) => {
          return (
            <MatchPalette
              setMatches={props.setMatches}
              requestingClubInfo={props.requestingClubInfo}
              val={val}
              key={crypto.randomUUID()}
              callingCompetitionTable={props.callingCompetitionTable}
            ></MatchPalette>
          );
        })}
      </div>
    </div>
  );
}

export default CompetitionUi;
