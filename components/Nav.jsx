import React from 'react'
import {
  AiFillLayout,
  AiFillDashboard,
  AiFillHome,
  AiFillSetting,
  AiFillAlert,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from 'next/router';

const Nav = () => {
  const inactiveLink = "flex gap-1 mt-4 p-3";
  const activeLink =
    inactiveLink + " bg-primary rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;


  return (
    <div>
      <aside className="text-text p-4 pr-0">
        <Link href={"/"} className="flex gap-2 mr-4">
          <AiFillDashboard size={24} />
          <span className="font-office font-bold text-xl">Admin Dashboard</span>
        </Link>
        <nav className="mt-10 ">
          {/**Admin navbar */}
          <Link
            href={`/`}
            className={pathname === "/" ? activeLink : inactiveLink}
          >
            <AiFillHome size={24} />
            <span className="text-lg">Home</span>
          </Link>
          <Link
            href={"/houses"}
            className={pathname.includes("/houses") ? activeLink : inactiveLink}
          >
            <AiFillLayout size={24} />
            <span className="text-lg">Houses</span>
          </Link>
          <Link
            href={`/orders`}
            className={pathname.includes("/orders") ? activeLink : inactiveLink}
          >
            <AiFillAlert size={24} />
            <span className="text-lg">Orders</span>
          </Link>
          <Link
            href={`/settings`}
            className={pathname.includes("/settings") ? activeLink : inactiveLink}
          >
            <AiFillSetting size={24} />
            <span className="text-lg">Settings</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default Nav