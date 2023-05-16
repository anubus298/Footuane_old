import GeneralInfo from "./ClubMains/GeneralInfo";
import Staff from "./ClubMains/Staff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
function ClubMain(props) {
  return (
    <div className="my-5 flex flex-col gap-y-5">
      <GeneralInfo
        address={props.clubInfo.address}
        founded={props.clubInfo.founded}
        shortName={props.clubInfo.name}
        website={props.clubInfo.website}
        venue={props.clubInfo.venue}
        runningCompetitions={props.clubInfo.runningCompetitions}
      ></GeneralInfo>
      <Accordion
        className=" w-full forceColorForMainClub"
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon icon={faCaretDown} className={`text-white `} />
          }
        >
          <p className="font-extrabold text-xl"> طاقم الفريق </p>
        </AccordionSummary>
        <AccordionDetails>
          <Staff
            squad={props.clubInfo.squad}
            coach={props.clubInfo.coach}
          ></Staff>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ClubMain;
