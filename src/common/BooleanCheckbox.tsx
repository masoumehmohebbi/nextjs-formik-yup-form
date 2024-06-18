import React from "react";

const BooleanCheckbox = ({ formik, name }) => {
  return (
    <div>
      <span className="ml-2">تایید قوانین و مقررات</span>
      <input type="checkbox" value={name} className="w-4 h-4" />
    </div>
  );
};

export default BooleanCheckbox;
