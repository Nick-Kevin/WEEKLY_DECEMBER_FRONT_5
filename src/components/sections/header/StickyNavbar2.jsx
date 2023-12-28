import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function StickyNavbar2() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mr-10 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-9">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex f-medium text-white items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex f-medium text-white items-center">
          Product
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex f-medium text-white items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex f-medium text-white items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="fixed bg-black px-4 sm:px-16 lg:px-32 xl:px-[14.5rem] xxl:px-60 py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <h3>Logo</h3>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
          <div className="flex items-center gap-x-1">
            <Button
              variant="gradient"
              className="inline-block active:underline text-xs lg:text-sm border-white border-1 px-7 md:px-10 py-2 md:py-3 hover:bg-white hover:text-black"
            >
              <span className="f-medium">Login</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="w-6 text-inherit !border-none active:!border-none focus:border-none hover:!border-none ml-4 sm:ml-12 md:ml-16 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}