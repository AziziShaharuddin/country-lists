const AcdoInputField = ({
  type = "search",
  className,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  return (
    <div
      className={`relative border focus-within:border-acdo-secondary flex items-center rounded-[4.5px] bg-acdo-white ${className}`}
    >
      {startAdornment && (
        <span className={`ml-4 cursor-default `}>{startAdornment}</span>
      )}
      <input
        {...rest}
        type={type}
        className="rounded-[4.5px] focus:outline-none bg-transparent p-4"
      />
      {endAdornment && (
        <span className="mr-4 cursor-default ">{endAdornment}</span>
      )}
    </div>
  );
};

export default AcdoInputField;
