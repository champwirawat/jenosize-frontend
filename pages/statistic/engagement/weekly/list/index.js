import EngagementWeeklyLayout from "../../../../../layouts/EngagementWeeklyLayout";
import {
  FaRegCommentAlt,
  FaRegGem,
  FaRegThumbsUp,
  FaUserAlt,
} from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { useRouter } from "next/router";

const EngagementWeeklyList = ({ dataType }) => {
  const router = useRouter();

  const dataTypeIconMap = {
    Like: FaRegThumbsUp,
    Comment: FaRegCommentAlt,
    Point: FiGift,
    Diamond: FaRegGem,
  };
  const DataTypeIcon = dataTypeIconMap[dataType];

  const list = [
    { name: "Jake", value: 10 },
    { name: "Harry", value: 15 },
    { name: "Jacob", value: 55 },
    { name: "Thomas", value: 56 },
    { name: "Michael", value: 99 },
  ];

  return (
    <>
      <div className="p-2 px-4">
        {list.map((data, index) => (
          <div key={index} className="flex items-center gap-2 mb-2" onClick={()=> router.push(`/detail${router.pathname}`)}>
            <div className="flex justify-center items-center rounded-full bg-black text-sm w-6 h-6 text-white">
              {index + 1}
            </div>
            <div className="flex-1 flex items-center border rounded p-2">
              <div className="flex justify-center items-center bg-gray-300 rounded-full w-9 h-9 mr-2">
                <span className="text-white">
                  <FaUserAlt />
                </span>
              </div>
              <div className="flex-1">
                <p className="font-bold">{data.name}</p>
                <p className="text-xs text-detail">Daily Report</p>
              </div>
              <div className="flex items-center gap-1 border-l-2 pl-2 w-28">
                <span className="text-primary">
                  <DataTypeIcon />
                </span>
                <p className="text-sm">
                  {data.value} {dataType}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

EngagementWeeklyList.Layout = EngagementWeeklyLayout;
export default EngagementWeeklyList;
