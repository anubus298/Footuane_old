import BeforeClub from "./BeforeClub";

import ClubMain from "./ClubMain";
function ClubInfo(props) {
  return (
    <div className="w-full px-2 md:w-8/12 md:mx-0">
      <BeforeClub
        name={props.clubInfo["name"]}
        crest={props.clubInfo["crest"]}
      ></BeforeClub>
      <ClubMain clubInfo={props.clubInfo}></ClubMain>
    </div>
  );
}

export default ClubInfo;
