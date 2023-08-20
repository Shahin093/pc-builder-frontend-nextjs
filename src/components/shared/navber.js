import { useGetFeaturesQuery } from "@/redux/api/api";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { data: session } = useSession();
  const { data, isLoading, isError, error } = useGetFeaturesQuery(undefined);
  return (
    <div className="navbar fixed   bg-gradient-to-b from-orange-400 to-blue-400 text-black py-2 px-4 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-2xl font-bold shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Features</a>
              <ul className="p-2">
                {data?.data.map((feature) => (
                  <li key={feature?._id}>
                    <a>
                      <Link
                        href={`/categoryProduct/${feature?._id}`}
                        className="flex"
                      >
                        <img
                          src={feature?.image}
                          className="w-6 h-4 mr-2 stroke-current"
                        />{" "}
                        {feature?.categoryName}
                      </Link>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {session?.user ? (
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            ) : (
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href={"/"}>
          {" "}
          <img
            src="https://techbd.com.bd/wp-content/uploads/2021/04/logo-1.png"
            alt="df"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-bold">
          <li>
            <a>About</a>
          </li>
          <li tabIndex={0}>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="">
                Features
              </a>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 text-2xl font-bold shadow bg-base-100 rounded-box w-72  lg:mt-80"
              >
                {data?.data.map((feature) => (
                  <li key={feature?._id}>
                    <a>
                      <Link
                        href={`/categoryProduct/${feature?._id}`}
                        className="flex"
                      >
                        <img
                          src={feature?.image}
                          className="w-6 h-4 mr-2 stroke-current"
                        />{" "}
                        {feature?.categoryName}
                      </Link>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {session?.user ? (
            <li>
              <a onClick={() => signOut()}>Logout</a>
            </li>
          ) : (
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end ml-4">
        <div className="w-10 rounded-full mr-4">
          <img src={session?.user?.image} />
        </div>
        <h2 className="text-2xl font-bold text-white mr-4 hidden sm:block">
          {session?.user?.name}
        </h2>
        <Link href={"/pcBuilder"} className="btn">
          {" "}
          Pc Builder
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
