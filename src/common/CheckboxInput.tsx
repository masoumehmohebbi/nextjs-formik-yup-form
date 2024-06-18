import React from "react";

const CheckboxInput = ({ formik, name, checkboxOptions }) => {
  return (
    <div className="flex flex-row gap-x-4">
      {checkboxOptions.map((item) => (
        <div key={item.value}>
          <label className="ml-1" htmlFor={item.value}>
            {item.label}
          </label>
          <input
            name={name}
            className="cursor-pointer w-4 h-4"
            id={item.value}
            value={item.value}
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
          />
        </div>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default CheckboxInput;
