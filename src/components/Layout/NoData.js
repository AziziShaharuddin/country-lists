const NoData = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 h-1/2 text-center p-10 rounded-xl bg-acdo-white dark:backdrop-blur-md dark:bg-white/40">
      <h1 className="text-h1 font-bold">Ops</h1>
      <p>We could not find the country you search for</p>
    </div>
  );
};

export default NoData;
