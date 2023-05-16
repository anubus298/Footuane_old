import GroupCard from "./GroupCard";
import BeforeTable from "../BeforeTable";
import MatchPalette from "../../MatchesSection/MatchPallete";

import { useEffect, useState } from "react";
function CupTable(props) {
  const [cupMatches, setCupMatches] = useState({});

  useEffect(() => {
    fetch(
      props.localUrl +
        "/upComingCompMatches/" +
        props.competitionInfo["competition"]["id"]
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("from cupTable");
        console.log(data);
        setCupMatches(data);
      });
  }, [props.competitionInfo, props.localUrl]);
  return (
    <div className="flex flex-col justify-evenly w-11/12 md:w-8/12  py-5 px-2 md:px-10 ">
      <BeforeTable
        localUrl={props.localUrl}
        name={props.competitionInfo["competition"]["name"]}
        data={props.competitionInfo["competition"]}
        season={props.competitionInfo["season"]}
        area={props.competitionInfo["area"]["name"]}
      ></BeforeTable>
      <div className="flex flex-col  items-center justify-between my-5">
        <div className="bg-mainGrey w-full py-5 px-10 font-extrabold text-white rounded-t-lg">
          <p className="float-right text-xl"> : المجموعات</p>
        </div>
        <div className="flex-col flex w-full gap-y-5">
          {props.competitionInfo["standings"].map((val) => (
            <GroupCard
              requestingClubInfo={props.requestingClubInfo}
              key={crypto.randomUUID()}
              groupinfo={val}
            width={props.width}

            ></GroupCard>
          ))}
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between my-5">
        <div className="bg-mainGrey flex flex-col gap-y-10 w-full py-5 px-2 md:px-10 font-extrabold text-white rounded-t-lg">
          <p className="w-full text-end text-xl"> : المباريات المتبقية</p>
          <div className="flex gap-y-5 flex-col">
            {cupMatches["matches"] !== undefined &&
              cupMatches["matches"].length === 0 && (
                <p className="font-extrabold w-full text-center text-xl ">
                  لا توجد
                </p>
              )}
            {cupMatches["matches"] !== undefined &&
              cupMatches["matches"].map((el) => {
                return (
                  <MatchPalette
                    setMatches={props.setMatches}
                    requestingClubInfo={props.requestingClubInfo}
                    val={el}
                    key={crypto.randomUUID()}
                    callingCompetitionTable={props.callingCompetitionTable}
                  ></MatchPalette>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CupTable;
