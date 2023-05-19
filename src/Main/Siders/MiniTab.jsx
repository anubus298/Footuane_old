import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MiniTab(props) {
  const CompNameAndColors = {
    "Campeonato Brasileiro Série A": " الدوري البرازيلي ",
    Championship: "البطولة الإنجليزية",
    "Premier League": "الدوري الإنجليزي ",
    "UEFA Champions League": "دوري أبطال أوروبا",
    "European Championship": "الدوري الأوروبي",
    "Ligue 1": "الدوري الفرنسي ",
    Bundesliga: "الدوري الألماني",
    "Serie A": " الدوري الإيطالي ",
    Eredivisie: "الدوري الهولندي ",
    "Primeira Liga": "الدوري البرتغالي ",
    "Copa Libertadores": "كوبا ليبرتادوريس",
    "Primera Division": " الدوري  الإسباني ",
    "FIFA World Cup": " كأس العالم",
  };

  return (
    <div
      className={
        "bg-mainLightPink rounded-lg md:w-1/5 lg:w-1/6 z-10 flex flex-col gap-y-3 absolute p-5 top-72 text-white " +
        props.inverseDirection +
        "-0"
      }
    >
      <div className="flex items-center justify-center">
      <p className="text-center text-mainPink font-extrabold me-3">{props.name}</p>
      <FontAwesomeIcon className="text-mainPink border-mainPink border-2 rounded-lg" border icon={props.icon}></FontAwesomeIcon>
      </div>

      {props.comp.map((j) => {
        return (
          <button
            key={j["id"]}
            onClick={() => {
              props.callingCompetitionTable(j["id"]);
            }}
            className="flex justify-between items-center gap-x-5 hover:bg-mainPink transition-all rounded-md"
          >
            <div className="bg-white rounded-lg">
              <img className="w-10 p-1" src={props.localUrl + "/images/" + j["id"]} alt={j["name"]} />
            </div>
            <p className="text-end">{CompNameAndColors[j["name"]]}</p>
          </button>
        );
      })}
    </div>
  );
}
