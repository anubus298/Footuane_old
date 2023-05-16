function GeneralInfo(props) {
  return (
    <div className="bg-mainGrey  flex flex-col md:flex-row-reverse">
      <div className=" flex flex-col gap-y-5  text-end text-mainPink p-5">
        <p className="font-bold ">
          <span className="font-medium text-white">{props.founded}</span> : أُنشئ
        </p>
        <p className="font-bold">
          <span className="font-medium text-white">{props.address}</span> :
          العنوان
        </p>
        <p className="font-bold">
          <span className="font-medium text-white">{props.shortName}</span> :
          الإسم المختصر
        </p>
        <a
          href={props.website}
          target="_blank"
          className="font-bold decoration-slice"
          rel="noreferrer"
        >
          <span className="font-medium text-white ">{props.website}</span> :
          الموقع الإلكتروني
        </a>
        <p className="font-bold">
          <span className="font-medium text-white">{props.venue}</span> : إسم
          الملعب
        </p>
      </div>
      <div className=" flex flex-col gap-y-5  text-end text-mainPink p-5">
        <p className="font-medium text-mainPink"> : يشارك في </p>
        <div className="flex gap-5">
          {props.runningCompetitions.map((x) => {
            if (x["emblem"]) {
              return (
                <div key={crypto.randomUUID()} className="bg-white rounded-lg  p-1">
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
