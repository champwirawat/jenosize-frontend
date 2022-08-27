import { FaRegCommentAlt, FaRegGem, FaRegThumbsUp } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import EngagementLayout from "../../../../../layouts/EngagementLayout";

const BoxDashboard = ({ title, detail, value, Icon }) => {
  return (
    <div className="flex flex-col items-center border rounded p-2 py-4">
      <div className="flex items-center gap-2 text-primary">
        <Icon />
        <p>{title}</p>
      </div>
      <p className="text-4xl font-bold mt-4">{value}</p>
      <p className="text-sm text-detail">{detail}</p>
    </div>
  );
};

const EngagementDailyGraph = () => {
  return (
    <>
      {/* --- dashboard --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4">
        <BoxDashboard
          title="Like"
          detail="Likes"
          value="34"
          Icon={FaRegThumbsUp}
        />
        <BoxDashboard
          title="Comment"
          detail="Comments"
          value="56"
          Icon={FaRegCommentAlt}
        />
        <BoxDashboard title="Point" detail="Point" value="450" Icon={FiGift} />
        <BoxDashboard
          title="Diamond"
          detail="Diamond"
          value="40"
          Icon={FaRegGem}
        />
      </div>
    </>
  );
};

EngagementDailyGraph.Layout = EngagementLayout;
export default EngagementDailyGraph;
