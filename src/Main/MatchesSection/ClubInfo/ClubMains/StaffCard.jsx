import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function StaffCard(props) {
  return (
    <div className="h-40 w-44 text-sm ">
      <div className="h-2/3 flex justify-center items-center">
        <FontAwesomeIcon className="text-7xl" icon={faUser}></FontAwesomeIcon>
      </div>
      <div className="h-1/3  flex flex-col gap-y-1 text-center border-2 p-1 items-center rounded-b-lg">
        <p>{props.name}</p>
        <p className="font-light"> {props.nationality}</p>
      </div>
    </div>
  );
}

export default StaffCard;
