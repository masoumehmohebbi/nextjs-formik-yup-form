import React from "react";

const TextField = ({ formik, label, name, type = "text" }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="name">{label}</label>
      <input
        {...formik.getFieldProps(name)}
        value={formik.values[name]}
        type={type}
        id={name}
        className="w-full transition bg-slate-100 duration-300 rounded-lg p-3 border focus:outline-none focus:bg-white focus:border-blue-300 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-100"
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default TextField;
