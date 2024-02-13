"use client";
import { Navbar } from "react-bootstrap";
import style from "../header/style.module.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navbar className="bg-white flex h-16 justify-center items-center shadow  ring-2 ring-gray-50 ring-opacity-50 top-0 z-10 sticky top-0">
      <div className="flex justify-between items-center w-5/6">
        <div>
          <h3 className="font-bold text-xl">
            <span className="text-red-500 font-bold text-xl">Smart</span>Adriots
          </h3>
        </div>
        <div className="bg-blue-50 rounded-full border-2 border-blue-200  p-2">
          <ul className="flex gap-9">
            <li className="font-semibold text-color">
              <Link
                className="text-black px-3 no-underline py-1 hover:bg-blue-950 hover:text-white rounded-full transition duration-100"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-color">
              <Link
                className="text-black px-3 no-underline py-1 hover:bg-blue-950 hover:text-white rounded-full transition duration-100"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="font-semibold text-color">
              <Link
                className="text-black px-3 no-underline py-1 hover:bg-blue-950 hover:text-white rounded-full transition duration-100"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="font-semibold text-color">
              <Link
                className="text-black px-3 no-underline py-1 hover:bg-blue-950 hover:text-white rounded-full transition duration-100"
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="font-semibold text-color">
              <Link
                className="text-black px-3 no-underline py-1 hover:bg-blue-950 hover:text-white rounded-full transition duration-100"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div className="right-side">
          <button className="w-32 h-10 bg-blue-900 rounded-full border-2 border-blue-500 bg-transparent font-semibold hover:text-white hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
