import { faTrophy, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import MiniTab from "./MiniTab";
function RelativeTabs(props) {
  if (props.allCompetition)
    return (
      <>
        <MiniTab
          name="الدوريات"
          localUrl={props.localUrl}
          comp={props.allCompetition["الدوريات"]}
          callingCompetitionTable={props.callingCompetitionTable}
          setCurrentTab={props.setCurrentTab}
          icon={faRankingStar}
          inverseDirection="left"
        ></MiniTab>
        <MiniTab
          icon={faTrophy}
          localUrl={props.localUrl}
          name="البطولات"
          comp={props.allCompetition["البطولات"]}
          callingCompetitionTable={props.callingCompetitionTable}
          setCurrentTab={props.setCurrentTab}
          inverseDirection="right"
        ></MiniTab>
      </>
    );
}

export default RelativeTabs;
