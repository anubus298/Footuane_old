function BeforeTable(props) {
  const CompNameAndColors = {
    "Campeonato Brasileiro Série A": "A الدوري البرازيلي ",
    Championship: "كأس الرابطة الإنجليزية  ",
    "Premier League": "الدوري الإنجليزي الممتاز",
    "UEFA Champions League": "دوري أبطال أوروبا",
    "European Championship": "الدوري الأوروبي",
    "Ligue 1": "الدوري الفرنسي 1",
    Bundesliga: "الدوري الألماني",
    "Serie A": "A الدوري الإيطالي ",
    Eredivisie: "الدوري الهولندي الممتاز",
    "Primeira Liga": "الدوري البرتغالي الممتاز",
    "Copa Libertadores": "كوبا ليبرتادوريس",
    "Primera Division": " الدوري  الإسباني ",
    "FIFA World Cup": " كأس العالم فيفا",
  };
  return (
    <div
      className={`flex-col gap-y-4   bg-mainGrey text-white flex items-center justify-evenly rounded-lg my-5  `}
    >
      {/* logo and name of competition */}
      <div
        className={`flex flex-col w-full p-5 gap-y-4 items-center rounded-lg bg-mainGrey text-white`}
      >
        <div className="bg-gray-200 rounded-lg w-full flex justify-center py-2">
          <img className="h-32" src={props.localUrl + "/images/" + props.data["id"]} alt="" />
        </div>
        <p className="font-semibold md:text-2xl text-xl">
          {"جدول " + CompNameAndColors[props.data["name"]]}
        </p>
      </div>
      {/* الجولة الحالية ومنطقة الدوري */}

      
    </div>
  );
}

export default BeforeTable;
