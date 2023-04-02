const AcdoSwitch = ({ trackClassName, checkClassName, ...rest }) => {
  return (
    <label
      htmlFor="check"
      className={`bg-acdo-white dark:bg-acdo-grayLine border border-acdo-primary cursor-pointer relative w-[40px] h-[25px] rounded-full ${trackClassName}`}
    >
      <input id="check" type="checkbox" className="sr-only peer" {...rest} />
      <span
        className={`w-2/4 h-4/5 bg-acdo-primary absolute rounded-full left-[2.5px] top-[2.5px] peer-checked:left-[17px] transition-all duration-100 ${checkClassName}`}
      />
    </label>
  );
};

export default AcdoSwitch;
