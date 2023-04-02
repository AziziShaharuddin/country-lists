import populationValueConversion from "pages/util/populationConversion"

const CountryTable = ({ data }) => {
  return (
    <table className="table-auto">
      <thead className="py-4">
        <tr className=" space-y-3 text-left bg-acdo-primary text-acdo-white">
          <th></th>
          <th>Population</th>
          <th>Region</th>
          <th>Capital</th>
          <th>Country</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((country) => {
            const currencies = country.currencies ? Object.entries(country.currencies).map(([key, value]) => ({ [key]: value })) : null
            return (
              <tr>
                <td>
                  <div
                    style={{ backgroundImage: `url(${country?.flags?.png})` }}
                    className="w-[70px] h-[50px] bg-contain bg-center bg-no-repeat"
                  />
                </td>
                <td>{populationValueConversion(country.population)}</td>
                <td>{country.region}</td>
                <td>{country.capital && country.capital.map((cap, index) => (`${cap}${country.capital?.length !== index + 1 ? ', ' : ''}`))}</td>
                <td>{country.name.common}</td>
                <td className="flex items-center space-x-2 w-auto">{currencies?.map((obj) => <div className="rounded-[4.5px] w-auto p-1 border border-acdo-darkText bg-acdo-grayLine text-caption text-acdo-secondary">{obj[Object.keys(obj)[0]]?.symbol} {Object.keys(obj)[0]}</div>)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default CountryTable