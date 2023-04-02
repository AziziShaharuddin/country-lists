import populationValueConversion from "util/populationConversion";
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useCallback, useEffect, useState } from "react";
import { fetchCountries } from "services";
import NoData from "components/Layout/NoData";

const DetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const fetchApi = useCallback(async () => {
    try {
      const res = await fetchCountries();
      // find the selected country from the API
      const data = res.find(
        (obj) => obj.name.common.toLowerCase() === name.toLowerCase()
      );
      // manipulate the borders attributes because the value return from the API is in the shortform
      setData(
        data
          ? {
            ...data,
            borders: data?.borders?.map((item) => {
              if (item === res.find((obj) => obj.cca3 === item).cca3) {
                return res.find((obj) => obj.cca3 === item).name.common;
              } else {
                return null;
              }
            }),
          }
          : null
      );
    } catch (error) {
      console.log("error", error);
    }
  }, [name]);
  useEffect(() => {
    const abortController = new AbortController();
    fetchApi();
    // cleanup on unmount
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nativeNameArray = data?.name?.nativeName
    ? Object.entries(data?.name?.nativeName).map(([_, value]) => value?.common)
    : null;
  const currencies = data?.currencies
    ? Object.entries(data?.currencies).map(([key, value]) => ({ [key]: value }))
    : null;
  const lang = data?.languages
    ? Object.entries(data?.languages).map(([_, value]) => value)
    : null;
  const detailsArray = [
    {
      title: "Native name",
      value:
        nativeNameArray &&
        nativeNameArray?.map(
          (nat, index) =>
            `${nat}${nativeNameArray?.length !== index + 1 ? ", " : ""}`
        ),
    },
    {
      title: "Population",
      value: populationValueConversion(data?.population),
    },
    {
      title: "Region",
      value: data?.region,
    },
    {
      title: "Sub region",
      value: data?.subregion,
    },
    {
      title: "Capital",
      value:
        data?.capital &&
        data?.capital?.map(
          (cap, index) =>
            `${cap}${data.capital?.length !== index + 1 ? ", " : ""}`
        ),
    },
    {
      title: "Top level domain",
      value:
        data?.tld &&
        data?.tld?.map(
          (item, index) =>
            `${item}${data.tld?.length !== index + 1 ? ", " : ""}`
        ),
    },
    {
      title: "Currencies",
      value: currencies?.map((obj) => `${obj[Object.keys(obj)[0]]?.name}`),
    },
    {
      title: "Languages",
      value:
        lang &&
        lang?.map(
          (item, index) => `${item}${lang?.length !== index + 1 ? ", " : ""}`
        ),
    },
  ];
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-start space-y-4 w-full">
      <button
        onClick={handleNavigate}
        className="bg-acdo-white dark:bg-acdo-grayLine flex items-center w-auto hover:bg-acdo-grayLine text-acdo-secondary py-2 px-4 border border-acdo-secondary rounded-[4.5px]"
      >
        <HiOutlineArrowSmLeft size={25} className="mr-2" />
        Back
      </button>
      {data ? (
        <div className="flex flex-col w-full lg:flex-row items-start h-auto space-y-4 lg:space-y-0 lg:space-x-10">
          <img
            src={data?.flags?.png}
            alt={data?.flags?.alt}
            className="w-full lg:w-2/5"
          />
          <div className="flex flex-1 flex-col justify-between self-stretch w-full h-auto">
            <div>
              <h1 className="text-h1 mb-4 lg:mb-2 dark:text-acdo-grayLine">
                {data?.name?.common}
              </h1>
              <div className="w-full flex flex-col mb-10 lg:mb-0  md:flex-row space-y-10 md:space-y-0 items-start">
                <div className="flex w-full md:w-1/2 flex-col space-y-2">
                  {detailsArray?.slice(0, 5)?.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <p className="font-medium dark:text-acdo-grayLine">
                        {detail?.title}:
                      </p>
                      <p className="text-acdo-grayText">{detail?.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {detailsArray?.slice(5)?.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <p className="font-medium dark:text-acdo-grayLine">
                        {detail?.title}:
                      </p>
                      <p className="text-acdo-grayText">{detail?.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <p className="font-medium dark:text-acdo-grayLine">
                Border countries:
              </p>
              <div className="flex items-start space-x-2">
                {data?.borders?.map((border, index) => (
                  <div
                    key={index}
                    className="rounded-[4.5px] bg-acdo-secondary text-acdo-white px-2 py-1"
                  >
                    <p className="text-caption">{border}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default DetailPage;
