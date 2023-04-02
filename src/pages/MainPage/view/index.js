import AcdoDropdown from "components/Dropdown/AcdoDropdown";
import AcdoInputField from "components/InputField/AcdoInputField";
import AcdoSwitch from "components/Switch/AcdoSwitch";
import { useCallback, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import CountryCard from "../components/CountryCard";
import CountryTable from "../components/CountryTable";
import { fetchCountries } from "services";
import NoData from "components/Layout/NoData";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [dropdownValue, setDropdownValue] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleTextField = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSwitch = (e) => {
    setChecked(e.target.checked)
  }

  const handleDropdown = (val) => {
    setDropdownValue(val)
  }

  const fetchApi = useCallback(async () => {
    setIsLoading(true)
    let array = []
    try {
      const res = await fetchCountries()
      for (let i = 0; i < res.length; i++) {
        if (!array.includes(res[i].region)) {
          array.push(res[i].region)
        }
      }
      array.splice(0, 0, 'All region')
      setDropdownOptions(array)
      setCountries(res)
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const filteredData = countries
      ?.filter((item) => {
        if (dropdownValue === '' || dropdownValue.toLowerCase() === 'All region'.toLowerCase()) {
          return item
        } else if (item.region.toLowerCase().includes(dropdownValue.toLowerCase())) {
          return item
        } else {
          return null
        }
      })?.filter((countrySearch) => {
        if (searchValue === '') {
          return countrySearch
        } else if (countrySearch.name.common.toLowerCase().includes(searchValue.toLowerCase())) {
          return countrySearch
        } else {
          return null
        }
      })
    setFilteredCountries(filteredData)
  }, [countries, dropdownValue, searchValue])

  useEffect(() => {
    const abortController = new AbortController()
    fetchApi()
    // cleanup on unmount
    return () => {
      abortController.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col items-start space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center w-full">
        <AcdoInputField
          value={searchValue}
          onChange={handleTextField}
          placeholder='Search for a country'
          startAdornment={<MdSearch size={20} className="text-acdo-grayText" />}
          className={`w-full md:w-auto`}
        />
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <AcdoDropdown options={dropdownOptions} value={dropdownValue} onChange={handleDropdown} className={`min-w-0 w-full md:w-auto md:min-w-[250px]`} />
          <div className="flex items-center space-x-3">
            <p className="text-caption dark:text-acdo-grayLine">Table</p>
            <AcdoSwitch
              checked={checked}
              onChange={handleSwitch}
            />
            <p className="text-caption dark:text-acdo-grayLine">Card</p>
          </div>
        </div>
      </div>
      {
        isLoading || !filteredCountries ? <p>Loading...</p> : filteredCountries?.length < 1 ? <NoData /> : checked ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            filteredCountries?.map((country, index) => (
              <CountryCard key={index} data={country} />
            ))
          }
        </div> : <CountryTable data={filteredCountries} />
      }
    </div>
  );
};

export default MainPage;
