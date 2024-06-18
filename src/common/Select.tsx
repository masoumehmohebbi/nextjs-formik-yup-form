import React from "react";

const Select = ({ formik, name, selectOptions }) => {
  return (
    <div>
      <select
        name={name}
        {...formik.getFieldProps(name)}
        className="w-full transition bg-slate-100 duration-300 rounded-lg p-3 border focus:outline-none focus:bg-white focus:border-blue-300 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-100"
      >
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Select;
