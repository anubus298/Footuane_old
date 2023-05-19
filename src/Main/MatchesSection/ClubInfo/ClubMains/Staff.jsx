import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faHand,
  faShield,
  faPersonRifle,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import StaffCard from "./StaffCard";
function Staff(props) {
  const staffTranslate = {
    Goalkeeper: ["الحراس", faHand],
    Defence: ["المدافعون", faShield],
    Midfield: ["لاعبي الوسط", faPeopleLine],
    Offence: ["المهاجمون", faPersonRifle],
  };
  return (
    <div>
      <div className="bg-mainGrey flex flex-col gap-y-10 w-full py-5 px-2 md:px-10 font-extrabold text-white rounded-t-lg">
        <Accordion
          className="forceColorForClub"
          TransitionProps={{ unmountOnExit: false }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`text-mainPink `}
              />
            }
          >
            <div className="flex items-center gap-x-3 justify-end">
              <FontAwesomeIcon
                className="text-mainPink text-2xl"
                icon={faUserTie}
              />
              <p className="text-mainPink text-end text-2xl"> المدرب </p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="bg-mainLightPink flex flex-col gap-y-10 w-full py-5 px-2 md:px-10 font-extrabold text-white rounded-t-lg">
              <div className="bg-mainBlack w-full p-5 flex justify-evenly">
                <StaffCard
                  name={props.coach["name"]}
                  nationality={props.coach["nationality"]}
                ></StaffCard>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {Object.keys(props.squad).map((val) => {
          return (
            <Accordion className="forceColorForClub">
              <AccordionSummary
                expandIcon={
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`text-mainPink `}
                  />
                }
              >
                <div className="flex items-center gap-x-3 justify-end">
                  <FontAwesomeIcon
                    className="text-2xl text-mainPink"
                    icon={staffTranslate[val][1]}
                  />
                  <p className="w- text-end text-mainPink text-2xl">
                    {staffTranslate[val][0]}
                  </p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="bg-mainLightPink flex flex-col gap-y-10 w-full py-5 px-2 md:px-10 font-extrabold text-white rounded-t-lg">
                  <div className="bg-mainBlack w-full p-5 flex justify-evenly flex-wrap">
                    {props.squad[val].map((x) => {
                      return (
                        <StaffCard
                          role={val}
                          name={x["name"]}
                          nationality={x["nationality"]}
                        ></StaffCard>
                      );
                    })}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Staff;
