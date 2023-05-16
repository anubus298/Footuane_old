function BeforeClub(props) {
  return (
    <div className="flex-col gap-y-4   bg-mainGrey text-white flex items-center justify-evenly rounded-lg mt-5  ">
      <div className="flex flex-col w-full p-5 gap-y-4 items-center  bg-mainGrey text-white">
        <div className="bg-gray-200 w-full flex justify-center py-2">
          <img className="h-32" src={props.crest} alt="" />
        </div>
        <p className="font-semibold md:text-2xl text-xl">{props.name}</p>
      </div>
    </div>
  );
}

export default BeforeClub;
