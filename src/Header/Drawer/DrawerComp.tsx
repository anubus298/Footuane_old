import React from "react";
import { Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
function DrawerComp(props) {
  const CompNameAndColors = {
    "Campeonato Brasileiro Série A": "A الدوري البرازيلي ",
    Championship: "كأس الرابطة الإنجليزية  ",
    "Premier League": "الدوري الإنجليزي الممتاز",
    "UEFA Champions League": "دوري أبطال أوروبا",
    "European Championship": "الدوري الأوروبي",
    "Ligue 1": "الدوري الفرنسي 1",
    Bundesliga: "الدوري الألماني",
    "Serie A": "A الدوري الإيطالي ",
    Eredivisie: "الدوري الهولندي الممتاز",
    "Primeira Liga": "الدوري البرتغالي الممتاز",
    "Copa Libertadores": "كوبا ليبرتادوريس",
    "Primera Division": " الدوري  الإسباني ",
    "FIFA World Cup": " كأس العالم فيفا",
  };
  return (
    <Drawer
      className=""
      anchor="left"
      open={props.isDrawerShowing}
      onClose={() => props.toggleDrawer(false)}
    >
      <div className="bg-mainBlack h-full  text-white py-14 pe-12 ps-5">
        <button
          className="text-white ms-auto sm:invisible rounded-lg p-2 hover:bg-gray-500 transition-all"
          onClick={() => props.toggleDrawer(false)}
        >
          رجوع
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="text-white ms-3 "
          />
        </button>
        <div>
          {Object.keys(props.allCompetition).map((i) => {
            return (
              <div className="">
                <p className="text-xl text-mainPink font-extrabold text-end">
                  {":" + i}
                </p>
                <div className="ms-12 flex flex-col gap-y-2 before:w-4 ">
                  {props.allCompetition[i].map((j) => {
                    return (
                      <button
                        onClick={() => {
                          props.callingCompetitionTable(j["id"]);
                          props.toggleDrawer(false);
                        }}
                        className="flex justify-between items-center gap-x-5 pe-8  hover:bg-mainPink 
                        transition-all rounded-md before:w-2 before:h-full before:right-0  before:bg-mainPink
                         before:absolute before:rounded-e-lg relative"
                      >
                        <div className="bg-white rounded-lg">
                          <img
                            className="w-9 p-1"
                            src={props.localUrl + "/images/" + j["id"]}
                            alt={j["id"]}
                          />
                        </div>
                        <p className="text-end">
                          {CompNameAndColors[j["name"]]}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerComp;
