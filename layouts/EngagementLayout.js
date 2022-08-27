import moment from "moment";
import { useRouter } from "next/router";
import { FaChartBar, FaListUl } from "react-icons/fa";
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
    <span className={`cursor-pointer ${active ? "text-primary" : "text-detail"}`} onClick={routeTo}>
      <Icon size={20} />
    </span>
  );
};

const EngagementLayout = ({ children }) => {
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
      <div className="p-4">
        <p className="text-center">Calendar</p>
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
