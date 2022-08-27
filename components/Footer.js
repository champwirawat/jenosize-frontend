import {
  FaMapMarkedAlt,
  FaTelegramPlane,
  FaClock,
  FaCog,
  FaListUl,
} from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

// ----- Components -----
const LinkBox = ({ path, title, Icon }) => {
  const router = useRouter();

  let active = false;
  if (router.pathname == "/" && path == "/") {
    active = true;
  } else if (path != "/") {
    active = router.pathname.startsWith(path);
  }

  return (
    <Link href={path}>
      <a
        className={`flex flex-col items-center ${active ? "text-primary" : ""}`}
      >
        <Icon size={18} />
        <p className="text-xs mt-1">{title}</p>
      </a>
    </Link>
  );
};

// ----- Page -----
const Footer = () => {
  const router = useRouter();

  return (
    !router.pathname.startsWith("/detail") && (
      <footer className="flex justify-around py-3 border-t-2 text-detail">
        <LinkBox path="/" title="Place Search" Icon={FaMapMarkedAlt} />
        <LinkBox path="/place-list" title="Place List" Icon={FaListUl} />
        <LinkBox path="/report" title="Report" Icon={FaTelegramPlane} />
        <LinkBox path="/statistic" title="Statistics" Icon={FaClock} />
        <LinkBox path="/setting" title="Setting" Icon={FaCog} />
      </footer>
    )
  );
};

export default Footer;
