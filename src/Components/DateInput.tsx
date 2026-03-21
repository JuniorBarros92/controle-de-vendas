import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput: React.FC<IDateInput> = ({label, ...props}) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input type="date" id={label} name={label} {...props} />
    </div>
  );
};

export default DateInput;