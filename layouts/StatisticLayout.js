import Link from "next/link";
import { useRouter } from "next/router";

const StatisticLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around text-detail border-b-2 py-3">
        <div
          className={`flex-1 text-center ${
            router.pathname == "/statistic"
              ? "text-primary font-bold"
              : "font-bold"
          }`}
        >
          <Link href="/statistic">
            <a>Submission</a>
          </Link>
        </div>
        <div>|</div>
        <div
          className={`flex-1 text-center ${
            router.pathname.startsWith("/statistic/engagement")
              ? "text-primary font-bold"
              : "font-bold"
          }`}
        >
          <Link href="/statistic/engagement/daily/graph">
            <a>Engagement</a>
          </Link>
        </div>
      </div>

      {children}
    </>
  );
};

export default StatisticLayout;
