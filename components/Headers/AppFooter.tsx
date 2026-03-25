import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppFooter = () => {
  return (
    <div className="bg-[#0D0D49]">
      <div className="max-w-7xl mx-auto px-4 md:px-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-14 border-b border-[#FAFAFA]">
          <div>
            <Image src={`/logo-white.svg`} width={145} height={94} alt="logo" />
          </div>
          <div className="space-y-4 pt-5">
            <div className="text-[#FAF7F3] text-white montserrat-bold text-[16px]">
              Contact
            </div>
            <div className="text-white text-[16px] ">
              Email us at{" "}
              <span className="montserrat-semibold">iwadi@erekilowi.com</span>
            </div>
          </div>
          <div className="space-y-4 pt-5">
            <div className="text-[#FAF7F3] text-white montserrat-bold text-[16px]">
              Follow Our Journey
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-14">
          <div className="md:text-center items-center text-white text-[16px]">
            © 2026 KÍLOWÍ. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
