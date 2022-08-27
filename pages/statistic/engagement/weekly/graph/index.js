import EngagementWeeklyLayout from "../../../../../layouts/EngagementWeeklyLayout";

const EngagementWeeklyGraph = ({ dataType }) => {
  return (
    <>
      <div className="px-4 mt-4 text-center">
        <p>Graph {dataType}</p>
      </div>
    </>
  );
};

EngagementWeeklyGraph.Layout = EngagementWeeklyLayout;
export default EngagementWeeklyGraph;
