import AcdoDropdown from "components/Dropdown/AcdoDropdown";
import AcdoInputField from "components/InputField/AcdoInputField";
import AcdoSwitch from "components/Switch/AcdoSwitch";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const dropdownData = ['All region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('')
  const handleTextField = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSwitch = (e) => {
    setChecked(e.target.checked)
  }

  const handleDropdown = (val) => {
    setDropdownValue(val)
  }
  return (
    <div>
      <div className="flex flex-col items-start space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center w-full">
        <AcdoInputField
          value={searchValue}
          onChange={handleTextField}
          placeholder='Search for a country'
          startAdornment={<MdSearch size={20} className="text-acdo-grayText" />}
          className={`w-full md:w-auto`}
        />
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <AcdoDropdown options={dropdownData} value={dropdownValue} onChange={handleDropdown} className={`min-w-0 w-full md:w-auto md:min-w-[250px]`} />
          <div className="flex items-center space-x-3">
            <p className="text-caption">Table</p>
            <AcdoSwitch
              checked={checked}
              onChange={handleSwitch}
            />
            <p className="text-caption">Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
