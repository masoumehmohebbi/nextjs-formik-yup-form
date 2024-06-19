import { FormValues } from "@/types/common";
import { FormikProps } from "formik";
import React from "react";

type BooleanCheckboxProps = {
  name: keyof FormValues;
  formik: FormikProps<FormValues>;
};

const BooleanCheckbox = ({ formik, name }: BooleanCheckboxProps) => {
  return (
    <div>
      <label htmlFor={name} className="ml-2">
        تایید قوانین و مقررات
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        value="true"
        onChange={formik.handleChange}
        checked={formik.values[name] as boolean}
        className="w-4 h-4 cursor-pointer"
      />

      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default BooleanCheckbox;
