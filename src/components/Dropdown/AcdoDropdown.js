import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const AcdoDropdown = ({
  options, //set of data for menu items in the dropdown
  value, //value selected
  onChange,
  placeholder = "Filter by region",
  className,
}) => {
  const selectRef = useRef();
  const menuRef = useRef();

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the list is open and the clicked target is not within the menu, then close the list
      if (
        isFocus &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        selectRef.current &&
        !selectRef.current.contains(e.target)
      ) {
        setIsFocus(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  return (
    <div className={`relative min-w-[200px] ${className}`}>
      <div
        ref={selectRef}
        onClick={() => setIsFocus(!isFocus)}
        className={`bg-white dark:bg-acdo-grayLine w-full part border p-3 flex items-center cursor-default justify-between rounded ${isFocus ? "border-acdo-secondary" : "border-acdo-grayLine"
          } ${!value && "text-gray-700"}`}
      >
        <div>
          {value
            ? value?.length > 25
              ? value?.substring(0, 25) + "..."
              : value
            : placeholder}
        </div>
        <AiOutlineCaretDown
          size={15}
          className={`${isFocus
              ? "rotate-180 transition-all duration-200"
              : "-rotate-0 transition-all duration-200"
            } text-acdo-grayText dark:text-acdo-primary`}
        />
      </div>
      <ul
        ref={menuRef}
        className={`absolute z-50 w-full bg-white dark:bg-acdo-background rounded-[4.5px] mt-2 max-h-60 overflow-y-auto ${isFocus ? "block" : "hidden opacity-0"
          } `}
      >
        {options?.map((item, index) => (
          <li
            key={index}
            value={item}
            className={`p-2 m-1 cursor-pointer rounded-[4.5px] text-caption hover:bg-acdo-grayText hover:text-white
        ${item?.toLowerCase() === value?.toLowerCase() &&
              "bg-acdo-secondary text-white"
              }`}
            onClick={() => {
              if (item?.toLowerCase() !== value.toLowerCase()) {
                onChange(item);
                setIsFocus(false);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcdoDropdown;
