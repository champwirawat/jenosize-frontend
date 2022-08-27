import { useState } from "react";
import { FaRegCommentAlt, FaRegGem, FaRegThumbsUp } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import EngagementLayout from "./EngagementLayout";
import Button from "../components/Button";
import React, { Fragment } from "react";

const BtSelectDataType = ({ title, Icon, dataType, setDataType }) => {
  return (
    <Button
      onClick={() => setDataType(title)}
      IconStart={Icon}
      outline={dataType != title}
      rounded
      small
    >
      {title}
    </Button>
  );
};

const EngagementWeeklyLayout = ({ children }) => {
  const [dataType, setDataType] = useState("Like");

  const dataTypeList = [
    { title: "Like", Icon: FaRegThumbsUp },
    { title: "Comment", Icon: FaRegCommentAlt },
    { title: "Point", Icon: FiGift },
    { title: "Diamond", Icon: FaRegGem },
  ];

  return (
    <>
      <div className="flex gap-2 px-4 overflow-auto pb-2">
        {dataTypeList.map((data, index) => (
          <BtSelectDataType
            key={index}
            {...data}
            dataType={dataType}
            setDataType={setDataType}
          />
        ))}
      </div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          dataType: dataType,
        })
      )}
    </>
  );
};

EngagementWeeklyLayout.Layout = EngagementLayout;
export default EngagementWeeklyLayout;
