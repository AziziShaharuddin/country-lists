import populationValueConversion from "util/populationConversion";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/country/${data?.name.common}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer bg-acdo-background dark:backdrop-blur-md dark:bg-white/20 hover:drop-shadow-xl hover:transition-all hover:duration-200"
    >
      <div
        style={{ backgroundImage: `url(${data?.flags?.png})` }}
        className="w-full h-[180px] bg-contain bg-center bg-no-repeat"
      />
      <div className="bg-acdo-white dark:backdrop-blur-md dark:bg-acdo-secondaryDark/50 p-3 space-y-2">
        <p className="font-medium mb-1 dark:text-acdo-white">
          {data?.name.common}
        </p>
        <p className="dark:text-acdo-white font-medium">
          Population:{" "}
          <span className="text-acdo-grayText text-caption dark:text-acdo-background">
            {populationValueConversion(data?.population)}
          </span>
        </p>
        <p className="dark:text-acdo-white font-medium">
          Region:{" "}
          <span className="text-acdo-grayText text-caption dark:text-acdo-background">
            {data?.region}
          </span>
        </p>
        <p className="dark:text-acdo-white font-medium">
          Capital:{" "}
          <span className="text-acdo-grayText text-caption dark:text-acdo-background">
            {data?.capital &&
              data?.capital?.map(
                (cap, index) =>
                  `${cap}${data.capital?.length !== index + 1 ? ", " : ""}`
              )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
