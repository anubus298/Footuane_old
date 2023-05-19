import { useEffect, useState } from "react";
import SkeletonUnion from "./SkeletonBeforeLoading/Skeleton";
import MatchController from "./MatchesSection/MatchController";
import DocumentTitle from "react-document-title";
import RelativeTabs from "./Siders/RelativeTabs";
import CompetitionTable from "./LeaguesAndCups/CompetitionTable";
import ClubInfo from "./MatchesSection/ClubInfo/ClubInfo";

export default function MainUi(props) {
  function requestingClubInfo(clubId) {
    props.setIsWaiting(true);
    fetch(props.localUrl + `/ClubInfo/${clubId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setIsWaiting(false);
        props.setCurrentTab("club");
        setClubInfo(data);
      });
  }
  const [matches, setMatches] = useState([]),
    [clubInfo, setClubInfo] = useState([]);
  useEffect(() => {
    props.setIsWaiting(true);
    fetch(props.localUrl + "/" + props.currentDate)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        props.setIsWaiting(false);
      });
  }, [props.currentDate, props.localUrl]);

  return (
    <div className="container mx-auto bg-mainGrey pt-48 md:pt-32">
      <div className="bg-mainBlack flex items-center flex-col pt-8 md:pt-0">
        <div className="w-5/6 md:w-2/3 flex flex-col gap-y-10 md:gap-y-2 first:mt-5 first:rounded-t-none last:mb-20 ">
          {!props.isWaiting ? (
            props.currentTab === "matches" && (
              <DocumentTitle title="Footuane | المباريات ">
                <div>
                  <MatchController
                    setMatches={setMatches}
                    callingCompetitionTable={props.callingCompetitionTable}
                    requestingClubInfo={requestingClubInfo}
                    currentTab={props.currentTab}
                    matches={matches}
                    localUrl={props.localUrl}
                  ></MatchController>
                  {props.width > 875 &&
                    props.allCompetition["الدوريات"] !== undefined && (
                      <RelativeTabs
                        localUrl={props.localUrl}
                        allCompetition={props.allCompetition}
                        callingCompetitionTable={props.callingCompetitionTable}
                        setCurrentTab={props.setCurrentTab}
                      ></RelativeTabs>
                    )}
                </div>
              </DocumentTitle>
            )
          ) : (
            <SkeletonUnion></SkeletonUnion>
          )}
        </div>

        {props.currentTab === "comp" && (
          <>
            {props.width > 875 &&
              props.allCompetition["الدوريات"] !== undefined && (
                <RelativeTabs
                  localUrl={props.localUrl}
                  allCompetition={props.allCompetition}
                  callingCompetitionTable={props.callingCompetitionTable}
                  setCurrentTab={props.setCurrentTab}
                ></RelativeTabs>
              )}

            <CompetitionTable
              width={props.width}
              requestingClubInfo={requestingClubInfo}
              localUrl={props.localUrl}
              setMatches={props.setMatches}
              callingCompetitionTable={props.callingCompetitionTable}
              currentTab={props.currentTab}
              competitionInfo={props.competitionInfo}
              setCompetitionInfo={props.setCompetitionInfo}
            ></CompetitionTable>
          </>
        )}
        {props.currentTab === "club" && (
          <DocumentTitle title="Footuane | معلومات النادي">
            <ClubInfo clubInfo={clubInfo}></ClubInfo>
          </DocumentTitle>
        )}
       
      </div>
    </div>
  );
}
