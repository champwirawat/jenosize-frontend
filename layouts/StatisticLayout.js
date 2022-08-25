import Link from "next/link";
import { useRouter } from "next/router";

const StatisticLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around text-detail border-b-2 py-3">
        <div
          className={
            router.pathname == "/statistic"
              ? "text-primary font-bold"
              : "font-bold"
          }
        >
          <Link href="/statistic">
            <a>Submission</a>
          </Link>
        </div>
        <div>|</div>
        <div
          className={
            router.pathname == "/statistic/engagement"
              ? "text-primary font-bold"
              : "font-bold"
          }
        >
          <Link href="/statistic/engagement">
            <a>Engagement</a>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default StatisticLayout;
