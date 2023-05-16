import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLocationDot,
  faBuilding,
  faLandmarkFlag,faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function GeneralInfo(props) {
  return (
    <div className="bg-mainGrey  flex flex-col md:flex-row-reverse">
      <div className=" flex flex-col gap-y-5  text-end text-mainPink p-5">
        <p className="font-bold ">
          <span className="font-medium text-white">{props.founded}</span> :
          أُنشئ
        <FontAwesomeIcon className="ms-2" icon={faBuilding}></FontAwesomeIcon>
        </p>
        <p className="font-bold">
          <span className="font-medium text-white text-sm md:text-base">{props.address}</span> :
          العنوان
        <FontAwesomeIcon className="ms-2" icon={faLocationDot}></FontAwesomeIcon>
        </p>
        <p className="font-bold">
          <span className="font-medium text-white">{props.shortName}</span> :
          الإسم المختصر
        <FontAwesomeIcon className="ms-2" icon={faPen}></FontAwesomeIcon>
        </p>
        <a
          href={props.website}
          target="_blank"
          className="font-bold decoration-slice"
          rel="noreferrer"
        >
          <span className="font-medium text-white ">{props.website}</span> :
        
          الموقع الإلكتروني
        <FontAwesomeIcon className="ms-2" icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <p className="font-bold">
          <span className="font-medium text-white">{props.venue}</span> : إسم
          الملعب
        <FontAwesomeIcon className="ms-2" icon={faLandmarkFlag}></FontAwesomeIcon>
        </p>
      </div>
      <div className=" flex flex-col gap-y-5  text-end text-mainPink p-5">
        <p className="font-medium text-mainPink"> : يشارك في </p>
        <div className="flex gap-5">
          {props.runningCompetitions.map((x) => {
            if (x["emblem"]) {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="bg-white rounded-lg  p-1"
                >
                  <img className="h-10" src={x["emblem"]} alt={x["name"]} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
