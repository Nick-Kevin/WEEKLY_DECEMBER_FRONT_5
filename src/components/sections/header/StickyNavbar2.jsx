import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Dropdown from "./Dropdown";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
 
export default function StickyNavbar2() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 lg:my-0 flex flex-col gap-2 lg:flex-row lg:w-auto">
      <Dropdown
        label="Product"
        item1="Actions"
        item2="Packages"
        item3="Securities"
      />
      <Dropdown
        label="Solutions"
        item1="Actions"
        item2="Packages"
        item3="Securities"
      />
      <Dropdown
        label="Open Source"
        item1="Actions"
        item2="Packages"
        item3="Securities"
      />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 lg:ml-2 font-medium"
      >
        <a href="#" className="flex f-medium text-slate-900 lg:text-white text-xl lg:text-base font-semibold lg:font-medium ml-8 mt-5 lg:m-0 items-center">
          Pricing
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="bg-transparent border-[0px] relative z-50 px-0 py-4 lg:py-5">
      <div className="flex items-center justify-between mx-4 sm:mx-11 lg:mx-4 text-blue-gray-900">
        <div className="flex items-center lg:items-centergap-x-1">
          <Button
            variant="gradient"
            className="inline-block rounded-md mr-[4.2rem] lg:hidden text-sm border-slate-300 border-[1px] px-2 py-1 hover:border-white"
          >
            <span>Sign in</span>
          </Button>
          <a class="lg:mr-4 color-fg-inherit flex-order-2" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
              <path fill="white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <div className="hidden lg:block">{navList}</div>
        </div>
        <div className="hidden lg:flex">
          <div>
            <button className="w-full lg:w-80 lg:border-slate-600 lg:border-[1px] flex justify-between rounded-md p-2 bg-header-search-desktop">
                <div className="flex">
                  <MagnifyingGlassIcon className="w-4 opacity-20" />
                  <input
                    type="text"
                    defaultValue="Search or jump to..."
                    className="bg-transparent ml-2 focus:outline-none text-slate-300 text-sm focus:!border-none"
                  />
                </div>
                <h6 className="text-white opacity-20 px-2 rounded-[4px] text-xs leading-normal">
                  /
                </h6>
            </button>
          </div>
            <button className="ml-6 bg-transparent">Sign in</button>
            <button className="border-slate-300 border-[1px] py-0 px-2 rounded-md ml-4 bg-transparent text-white">
              Sign up
            </button>
        </div>  
          <IconButton
            variant="text"
            className="w-6 text-inherit pt-2 !flex !border-none active:!border-none focus:border-none hover:!border-none ml-4 sm:ml-12 md:ml-16 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:!hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                className="h-6 w-10"
                fill="none"
                stroke="white"
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
      <MobileNav open={openNav}>
        <div className="fixed z-50 w-[95%] sm:w-80 right-0 top-16 container bg-white rounded-tl-md rounded-bl-md mx-auto">
          {navList}
          <div className="ml-8 mr-10 mt-20 sm:mt-40 mb-4">
            <button className="w-full flex justify-between rounded-md p-2 bg-header-search">
                <div className="flex">
                  <MagnifyingGlassIcon className="w-4 opacity-20" />
                  <input
                    type="text"
                    defaultValue="Search or jump to..."
                    className="bg-transparent ml-2 focus:outline-none text-slate-300 text-sm focus:!border-none"
                  />
                </div>
                <h6 className="text-white opacity-20 px-2 rounded-[4px] text-xs leading-normal">
                  /
                </h6>
            </button>
          </div>
          <div className="ml-8 mr-10">
            <button className="bg-dark py-2 rounded-md font-semibold mb-10 w-full">
              Sign in
            </button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}