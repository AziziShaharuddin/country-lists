import populationValueConversion from "util/populationConversion"
import { useNavigate } from "react-router-dom"

const CountryTable = ({ data }) => {
  const navigate = useNavigate()
  const handleNavigate = (country) => {
    navigate(`/country/${country?.name.common}`)
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left bg-acdo-primary text-acdo-white dark:bg-acdo-primaryDark">
            <th></th>
            <th className="py-3 px-2">Population</th>
            <th className="py-3 px-2">Region</th>
            <th className="py-3 px-2">Capital</th>
            <th className="py-3 px-2">Country</th>
            <th className="py-3 px-2">Currency</th>
          </tr>
        </thead>
        <tbody className="py-6">
          {
            data?.map((country, index) => {
              const currencies = country.currencies ? Object.entries(country.currencies).map(([key, value]) => ({ [key]: value })) : null
              return (
                <tr key={index} className={`cursor-pointer dark:hover:bg-acdo-background dark:hover:text-acdo-primary hover:bg-acdo-grayLine hover:transition-all dark:text-acdo-grayLine hover:duration-200 ${data?.length !== index + 1 && 'border-b'}`} onClick={() => handleNavigate(country)}>
                  <td className="py-2 px-2">
                    <div
                      style={{ backgroundImage: `url(${country?.flags?.png})` }}
                      className="w-[70px] h-[50px] bg-contain bg-center bg-no-repeat"
                    />
                  </td>
                  <td className="py-2 px-2">{populationValueConversion(country.population)}</td>
                  <td className="py-2 px-2">{country.region}</td>
                  <td className="py-2 px-2">{country.capital && country.capital.map((cap, index) => (`${cap}${country.capital?.length !== index + 1 ? ', ' : ''}`))}</td>
                  <td className="py-2 px-2">{country.name.common}</td>
                  <td className="py-2 px-2"><div className="flex space-x-2">{currencies?.map((obj, objId) => <div key={objId} className="rounded-[4.5px] dark:bg-acdo-secondary dark:text-acdo-white dark:border-none w-auto p-1 border border-acdo-darkText bg-acdo-white  text-caption text-acdo-secondary">{obj[Object.keys(obj)[0]]?.symbol} {Object.keys(obj)[0]}</div>)}</div></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CountryTable