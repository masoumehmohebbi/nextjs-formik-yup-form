import { FormValues } from "@/types/common";
import { FormikProps } from "formik";
import React from "react";

type RadioInputProps = {
  radioOptions: {
    label: string;
    value: string;
  }[];
  name: keyof FormValues;
  formik: FormikProps<FormValues>;
};

const RadioInput = ({ formik, radioOptions, name }: RadioInputProps) => {
  return (
    <div className="flex flex-row gap-x-4">
      {radioOptions.map((item) => (
        <div key={item.value}>
          <label className="ml-1" htmlFor={item.value}>
            {item.label}
          </label>
          <input
            name={name}
            className="cursor-pointer w-4 h-4"
            id={item.value}
            value={item.value}
            type="radio"
            onChange={formik.handleChange}
            checked={formik.values.gender === item.value}
          />
        </div>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default RadioInput;
