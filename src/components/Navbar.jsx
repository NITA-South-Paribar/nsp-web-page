import { Link } from "react-scroll";
import logo from "../../src/assets/Logo.jpg";

export const Navbar = () => {
  const content = (
    <>
      <div className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800 transition">
        <ul className="text-center text-xl p-20">
          <Link>
            <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover:rounded">
              About
            </li>
          </Link>
          <Link>
            <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover:rounded">
              Gallery
            </li>
          </Link>
          <Link>
            <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover:rounded">
              Members
            </li>
          </Link>

          <Link>
            <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-8vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 ">
        <div className="flex items-center flex-1">
          {/* <span className="text-3xl font-bold">Logo</span> */}
          <span className="">
            <img src={logo} width={60} height={60} />
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 font-bold mr-16 text-[20px]">
              <Link>
                <li className="hover:text-yellow-400 transition border-b-2 border-slate-800 hover:border-yellow-400 cursor-pointer">
                  About
                </li>
              </Link>
              <Link>
                <li className="hover:text-yellow-400 transition border-b-2 border-slate-800 hover:border-yellow-400 cursor-pointer">
                  Gallery
                </li>
              </Link>
              <Link>
                <li className="hover:text-yellow-400 transition border-b-2 border-slate-800 hover:border-yellow-400 cursor-pointer">
                  Members
                </li>
              </Link>
              <Link>
                <li className="hover:text-yellow-400 transition border-b-2 border-slate-800 hover:border-yellow-400 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
