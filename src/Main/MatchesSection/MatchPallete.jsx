import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faBusSimple } from "@fortawesome/free-solid-svg-icons";
function MatchPalette(props) {
  let translateList = {
    status: {
      SCHEDULED: { tr: "مُجدولة", color: "text-[#e85d04]" },
      LIVE: { tr: "تَجري حاليا", color: "text-green-700" },
      IN_PLAY: { tr: "تُلعب", color: "text-[#ffd166]" },
      PAUSED: { tr: "استراحة", color: "text-blue-500" },
      FINISHED: { tr: "مُنتهية", color: "text-blue-500" },
      POSTPONED: { tr: "", color: "text-red-800" },
      SUSPENDED: { tr: "موقوفة", color: "text-red-800" },
      CANCELLED: { tr: "ملغية", color: "text-red-800" },
      TIMED: { tr: "مُجدولة", color: "text-[#e85d04]" },
    },
    stages: {
      FINAL: "النهائي",
      THIRD_PLACE: "المركز الثالث",
      SEMI_FINALS: "نصف النهائي",
      QUARTER_FINALS: "ربع النهائي",
      LAST_16: "آخر 16",
      LAST_32: "آخر 32",
      LAST_64: "آخر 64",
      ROUND_4: "الجولة الرابعة",
      ROUND_3: "الجولة الثالثة",
      ROUND_2: "الجولة الثانية",
      ROUND_1: "الجولة الأولى",
      GROUP_STAGE: "دوري المجموعات",
      PRELIMINARY_ROUND: "",
      QUALIFICATION: "الإقصائيات",
      QUALIFICATION_ROUND_1: "",
      QUALIFICATION_ROUND_2: "",
      QUALIFICATION_ROUND_3: "",
      PLAYOFF_ROUND_1: "",
      PLAYOFF_ROUND_2: "",
      PLAYOFFS: "",
      REGULAR_SEASON: "الجولة رقم",
      CLAUSURA: "",
      APERTURA: "",
      CHAMPIONSHIP: "",
      RELEGATION: "",
      RELEGATION_ROUND: "",
    },
  };
  let timeOfMatch = new Date(props.val["utcDate"]),
    timeOfLastUpdate = new Date(props.val["lastUpdated"]);
  timeOfLastUpdate.setHours(timeOfLastUpdate.getHours() - 2);
  let rest = timeOfLastUpdate - timeOfMatch;
  if ((rest - 60 * 1000) / (1000 * 60) > 60) {
    rest = rest - 5 * 1000 * 60;
  }
  let homeState, awayState;
  if (props.val["score"]["winner"] === "HOME_TEAM") {
    homeState = "winner";
    awayState = "loser";
  } else if (props.val["score"]["winner"] === "AWAY_TEAM") {
    awayState = "winner";
    homeState = "loser";
  }

  const formatter = new Intl.RelativeTimeFormat("ar", {
    numeric: "always",
    style: "short",
  });

  return (
    <div
      className="flex flex-col gap-y-5 text-center bg-mainLightPink text-white transition-all hover:bg-[#32476d] p-5 rounded-md select-none "
      // key={}
    >
      <div className="flex ">
        {/* home team */}
        <div
          clubid={props.val["homeTeam"]["id"]}
          className="w-2/6 gap-y-6 flex items-center flex-col  justify-center text-lg font-bold "
        >
          <img
            className="w-9 md:w-12  cursor-pointer  hover:scale-110 transition-all "
            src={props.val["homeTeam"]["crest"]}
            onClick={() =>
              props.requestingClubInfo(props.val["homeTeam"]["id"])
            }
            height="15px"
            alt=""
          />
          <p
            className={"text-sm md:text-base cursor-pointer  hover:scale-110 transition-all   " + homeState}
            onClick={() =>
              props.requestingClubInfo(props.val["homeTeam"]["id"])
            }
          >
            {props.val["homeTeam"]["name"]}
          </p>
          <FontAwesomeIcon className={"text-sm text-gray-400 "  + homeState} icon={faHouse} />
        </div>
        {/* mid pallete (score ,comp and stage) */}
        <div className="w-2/6  flex justify-center items-center  text-sm md:text-lg font-bold">
          <div>
            {/* score*/}
            <p className="md:text-3xl text-xl">
              <span className={"mx-1 " + homeState}>
                {props.val["score"]["fullTime"]["home"] ||
                props.val["score"]["fullTime"]["home"] === 0
                  ? props.val["score"]["fullTime"]["home"]
                  : "--"}
              </span>
              :
              <span className={"mx-1 " + awayState}>
                {props.val["score"]["fullTime"]["away"] ||
                props.val["score"]["fullTime"]["away"] === 0
                  ? props.val["score"]["fullTime"]["away"]
                  : "--"}
              </span>
            </p>
            {/* status */}
            <p
              className={translateList["status"][props.val["status"]]["color"]}
            >
              {translateList["status"][props.val["status"]]["tr"]}
            </p>
            {/* date if finished*/}

            <p className="text-xs me-1">
              {props.val["status"] === "FINISHED"
                ? Math.floor((rest - 90 * 1000 * 60) / (1000 * 60 * 60) < 24)
                  ? formatter.format(
                      -Math.floor((rest - 90 * 1000 * 60) / (1000 * 60 * 60)),
                      "hours"
                    )
                  : formatter.format(
                      -Math.floor(
                        (rest - 90 * 1000 * 60) / (1000 * 60 * 60 * 24)
                      ),
                      "days"
                    )
                : props.val["status"] === "IN_PLAY"
                ? ""
                : props.val["status"] !== "PAUSED" &&
                  new Date(props.val["utcDate"]).toLocaleString("fr")}
            </p>

            {/* in_play time */}
            {props.val["status"] === "IN_PLAY" && (
              <>
                <FontAwesomeIcon
                  bounce
                  size="sm"
                  icon={faSoccerBall}
                ></FontAwesomeIcon>
                <p className="inline ms-2">
                  {Math.floor((rest - 60 * 1000) / (1000 * 60)) + "'"}
                </p>
              </>
            )}
            {props.val["stage"] && (
              <p className="text-blue-400 text-sm md:text-base">
                {props.val["stage"] === "REGULAR_SEASON"
                  ? translateList["stages"][props.val["stage"]] +
                    " " +
                    props.val["matchday"]
                  : translateList["stages"][props.val["stage"]]}
              </p>
            )}
          </div>
        </div>
        {/* away team */}
        <div
          clubid={props.val["awayTeam"]["id"]}
          className="w-2/6 flex gap-y-6 items-center flex-col  justify-center text-lg font-bold"
        >
          <img
            className="w-9 md:w-12 cursor-pointer hover:scale-110 transition-all"
            onClick={() =>
              props.requestingClubInfo(props.val["awayTeam"]["id"])
            }
            src={props.val["awayTeam"]["crest"]}
            height="15px"
            alt=""
          />
          <p
            className={"text-sm md:text-base cursor-pointer hover:scale-110 transition-all " + awayState}
            onClick={() =>
              props.requestingClubInfo(props.val["awayTeam"]["id"])
            }
          >
            {props.val["awayTeam"]["name"]}
          </p>
          <FontAwesomeIcon
            className={"text-sm text-gray-400 " + awayState}
            icon={faBusSimple}
          />
        </div>
      </div>
    </div>
  );
}

export default MatchPalette;
