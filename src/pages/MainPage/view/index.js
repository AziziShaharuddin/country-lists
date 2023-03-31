import AcdoInputField from "components/InputField/AcdoInputField";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const handleTextField = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div>
      <div className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
        <AcdoInputField
          value={searchValue}
          onChange={handleTextField}
          placeholder='Search for a country'
          startAdornment={<MdSearch size={20} className="text-acdo-grayText" />}
        />
        <div className="flex items-center space-x-2"></div>
      </div>
    </div>
  );
};

export default MainPage;
