import React from "react";

const BooleanCheckbox = ({ formik, name }) => {
  return (
    <div>
      <label htmlFor={name} className="ml-2">
        تایید قوانین و مقررات
      </label>
      <input
        name={name}
        id={name}
        onChange={formik.handleChange}
        type="checkbox"
        value={true}
        className="w-4 h-4"
        checked={formik.values[name]}
      />

      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default BooleanCheckbox;
