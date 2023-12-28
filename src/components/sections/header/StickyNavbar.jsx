import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import Dropdown from "./Dropdown";
 
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-4 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 f-bold mr-6 text-md"
      >
        <a href="#" className="flex black items-center hover:underline hover:text-black">
          Episodes
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 f-bold mr-6 text-md"
      >
        <a href="#" className="flex black items-center hover:underline hover:text-black">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 f-bold text-md"
      >
        <Dropdown/>
      </Typography>
    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 z-50 w-full bg-green-400 rounded-none px-8 md:px-24 lg:px-32 py-6">
        <div className="flex items-center justify-between text-blue-gray-900">
          <h2 className="text-4xl text-black">Logo</h2>
          <div className="flex items-center ml-32 w-full justify-between gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden f-bold text-sm border-black border-2 px-5 border-solid lg:inline-block hover:bg-black hover:text-white hover:border-black"
              >
                <span>RECENT EPISODES</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden f-bold text-sm border-black border-2 px-5 ml-4 guide-shadow border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black"
              >
                <span>SUBSCRIBE</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit !border-none active:!border-none focus:border-none hover:!border-none lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="hover:border-transparent">
          {navList}
          <div className="flex flex-col items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="f-bold text-sm border-black border-2 px-5 border-solid lg:inline-block hover:bg-black hover:text-white hover:border-black">
              <span>RECENT EPISODES</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="f-bold text-sm border-black border-2 px-5 mt-5 guide-shadow border-solid text-white bg-black lg:inline-block hover:bg-transparent hover:text-black hover:border-black">
              <span>SUBSCRIBE</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
  );
}