import populationValueConversion from "pages/util/populationConversion"
import { useNavigate } from "react-router-dom"

const CountryCard = ({ data }) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/country/${data?.name.common}`)
  }
  return (
    <div onClick={handleNavigate} className="cursor-pointer bg-acdo-background hover:drop-shadow-xl hover:transition-all hover:duration-200">
      <div
        style={{ backgroundImage: `url(${data?.flags?.png})` }}
        className="w-full h-[180px] bg-contain bg-center bg-no-repeat"
      />
      <div className="bg-acdo-white p-3 space-y-2">
        <p className="font-medium mb-1">{data?.name.common}</p>
        <p>Population: <span className="text-acdo-grayText">{populationValueConversion(data?.population)}</span></p>
        <p>Region: <span className="text-acdo-grayText">{data?.region}</span></p>
        <p>Capital: <span className="text-acdo-grayText">{data?.capital && data?.capital?.map((cap, index) => (`${cap}${data.capital?.length !== index + 1 ? ', ' : ''}`))}</span></p>
      </div>
    </div>
  )
}

export default CountryCard