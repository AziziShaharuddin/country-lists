import { themeContext } from "context/ThemeContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MdNightlight, MdOutlineWbSunny } from "react-icons/md";

const Header = () => {
  const { pathname } = useLocation();
  const { theme, handleDarkMode: handleTheme } = useContext(themeContext);

  return (
    <div className="sticky top-0 z-10 border-acdo-grayText bg-acdo-white dark:border-b dark:backdrop-blur-md dark:border-acdo-grayText/40 dark:bg-acdo-primaryDark py-5 px-[30px] drop-shadow-lg">
      <div className="relative m-auto flex max-w-[1200px] flex-row items-center justify-end md:justify-between">
        <h1 className="text-h1 dark:text-acdo-white hidden md:block">
          {pathname === "/" ? "Country Lists" : "Country Details"}
        </h1>
        <div
          onClick={handleTheme}
          className="cursor-pointer flex items-center justify-end space-x-5"
        >
          {theme === "dark" ? (
            <MdNightlight size={20} className="text-acdo-grayText" />
          ) : (
            <MdOutlineWbSunny size={20} className="text-acdo-primary" />
          )}
          <p className="dark:text-acdo-white">
            Switch {theme === "dark" ? "light" : "dark"} mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
