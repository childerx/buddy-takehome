"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiBell, FiLogOut, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdPeople, MdAnalytics, MdLogout } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { TbWorldWww } from "react-icons/tb";
import profile from "@/public/profile.png";

import { usePathname } from "next/navigation";
import Image from "next/image";

const tabs = [
  {
    name: "Admissions",
    icon: <TbEdit className="w-5 h-5" aria-hidden="true" />,
    href: "/dashboard",
  },
  {
    name: "Newsletters",
    icon: <MdEmail className="w-5 h-5" aria-hidden="true" />,
    href: "/dashboard/newsletters",
  },
  {
    name: "Subscribers",
    icon: <MdPeople className="w-5 h-5" aria-hidden="true" />,
    href: "/dashboard/subscribers",
  },
  {
    name: "Analytics",
    icon: <MdAnalytics className="w-5 h-5" aria-hidden="true" />,
    href: "/dashboard/analytics",
  },
  {
    name: "Logout",
    icon: <MdLogout className="w-5 h-5" aria-hidden="true" />,
    href: "/dashboard/logout",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white fixed h-full">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            {/* <h1 className="text-xl font-bold">Dashboard</h1> */}
          </div>
          <nav className="flex-1 flex flex-col px-2 space-y-2 mt-14">
            {tabs.map((tab) => (
              <Link href={tab.href} key={tab.name} passHref>
                <div
                  className={`group flex items-center px-4 py-2 text-base font-medium rounded-full w-full text-left ${
                    pathname === tab.href
                      ? "bg-[#E6DFFC] text-[#4220AE]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-4">{tab.icon}</span>
                  {tab.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "tween" }}
        className="fixed inset-0 z-40 flex md:hidden"
      >
        <div className="flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <nav className="flex-1 px-2 space-y-1">
              {tabs.map((tab) => (
                <Link href={tab.href} key={tab.name} passHref>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left ${
                      pathname === tab.href
                        ? "bg-[#E6DFFC] text-[#4220AE]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div
          className="fixed inset-0 flex-grow bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:ml-64">
        {/* Top Navbar */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-4 ">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="border border-black flex items-center gap-2 px-6 py-3 rounded-2xl">
            <TbWorldWww className="w-5 h-5 text-[#333342]" aria-hidden="true" />
            <span className="font-medium text-base text-black">
              Visit Wesbsite
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FiBell className="h-6 w-6 text-gray-600 cursor-pointer" />
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
                  <Image
                    className=" object-contain"
                    src={profile}
                    alt="profile"
                    width={46}
                    height={46}
                    priority
                    quality={85}
                    placeholder="blur"
                  />
                </div>
              </button>
              {isProfileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"
                >
                  <div className="px-4 py-2 text-sm text-gray-700">
                    John Doe
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-700">
                    john.doe@email.com
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                    }}
                  >
                    Sign out
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-10 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
