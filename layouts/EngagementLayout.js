import moment from "moment";
import { useRouter } from "next/router";
import { FaChartBar, FaListUl, FaArrowDown } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import StatisticLayout from "./StatisticLayout";

const LinkDateType = ({ startsWith, title }) => {
  const router = useRouter();

  const urlStart = `/statistic/engagement/${startsWith}`;
  const active = router.pathname.startsWith(urlStart);
  const pathList = router.pathname.split("/");
  const endPath = pathList[pathList.length - 1];

  const routeTo = () => {
    router.push(urlStart + "/" + endPath);
  };

  return (
    <div
      className={`flex-1 border-b-2 p-2 text-center ${
        active ? "border-primary font-bold" : ""
      }`}
    >
      <p className="cursor-pointer" onClick={routeTo}>
        {title}
      </p>
    </div>
  );
};

const ShowType = ({ endWith, Icon }) => {
  const router = useRouter();
  let active = router.pathname.endsWith(endWith);

  const pathList = router.pathname.split("/");
  const newUrl = router.pathname.replace(
    pathList[pathList.length - 1],
    endWith
  );

  const routeTo = () => {
    router.push(newUrl);
  };

  return (
    <span
      className={`cursor-pointer ${active ? "text-primary" : "text-detail"}`}
      onClick={routeTo}
    >
      <Icon size={20} />
    </span>
  );
};

const EngagementLayout = ({ children }) => {
  const currentDate = new Date();
  const days = ["S", "M", "T", "W", "TH", "F", "S"];
  const dayList = [];

  const day = moment(currentDate).format("d");
  const startDay = moment(currentDate).add(-day, "days");
  for (let i = 0; i < 7; i++) {
    dayList[i] = moment(startDay.toDate()).add(i, "days").format("DD-MM-YYYY");
  }

  return (
    <>
      {/* --- select datetype --- */}
      <div className="flex gap-4 items-center p-2 px-4">
        <div className="flex flex-1 justify-around">
          <LinkDateType startsWith="daily" title="Daily" />
          <LinkDateType startsWith="weekly" title="Weekly" />
          <LinkDateType startsWith="monthly" title="Monthly" />
        </div>
        <div className="flex gap-4">
          <ShowType endWith="graph" Icon={FaChartBar} />
          <ShowType endWith="list" Icon={FaListUl} />
        </div>
      </div>

      {/* --- calendar --- */}
      <div className="p-2 text-sm flex">
        <div className="flex-1 flex justify-around">
          {days.map((data, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-bold">{data}</p>
              <div
                className={`rounded-full w-7 h-7 p-1 ${
                  dayList[index] == moment(currentDate).format("DD-MM-YYYY") &&
                  "bg-primary text-white"
                }`}
              >
                <p>{moment(dayList[index], "DD-MM-YYYY").format("DD")}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-primary flex items-center">
          <FaArrowDown />
          <p>Today</p>
        </div>
      </div>
      <hr />

      {/* --- current date --- */}
      <div className="p-4 py-6 flex justify-between">
        <p className="text-sm">{moment(new Date()).format("DD MMMM YYYY")}</p>
        <span className="text-primary">
          <FiUpload size={18} />
        </span>
      </div>

      {children}
    </>
  );
};

EngagementLayout.Layout = StatisticLayout;
export default EngagementLayout;
