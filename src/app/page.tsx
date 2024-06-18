"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import RadioInput from "../common/RadioInput";
import CheckboxInput from "../common/CheckboxInput";
import BooleanCheckbox from "../common/BooleanCheckbox";
import Select from "../common/Select";

const radioOptions = [
  { label: "زن", value: "1" },
  { label: "مرد", value: "0" },
];

const checkboxOptions = [
  { label: "ریکت", value: "React.js" },
  { label: "ویو", value: "Vue.js" },
];

const selectOptions = [
  { label: "انتخاب ملیت", value: "" },
  { label: "ایران", value: "IR" },
  { label: "آلمان", value: "GER" },
  { label: "آمریکا", value: "USA" },
];

export default function Home() {
  const onSubmit = () => {};

  // second step - vadilation inputs with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("نوشتن نام الزامیست")
      .min(2, "نام باید حداقل 2 کاراکتر باشد"),

    email: Yup.string()
      .email("ایمیل نامعتبر است")
      .required("نوشتن ایمیل الزامیست"),

    phoneNumber: Yup.string()
      .required("شماره تلفن الزامیست")
      .matches(/^[0-9]{11}$/, "موبایل معتبر نیست")
      .nullable(),

    password: Yup.string()
      .required("رمز الزامیست")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز باید شامل 8 کاراکتر، حروف کوچک و بزرگ، عدد و یک کاراکتر خاص باشد"
      ),

    passwordConfirm: Yup.string()
      .required("تکرار رمز الزامیست")
      .oneOf([Yup.ref("password"), null], "پسوردها یکی نیستند"),

    gender: Yup.string().required("جنسیت الزامیست"),

    interest: Yup.array().min(1).required("علاقه مندی الزامیست"),

    nationality: Yup.string().required("ملیت الزامیست "),
  });

  // First Step - states
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
      gender: "",
      interest: [], //[react, vue]
      nationality: "",
      terms: false,
    },
    onSubmit,
    validationSchema,
  });
  return (
    <div className="bg-slate-100 text-gray-800 ">
      <main className="container mx-auto sm:p-3 sm:max-w-screen-sm">
        <div className=" bg-white min-h-screen sm:m-3 rounded-md py-3 px-4">
          <h1 className="font-bold text-3xl text-center py-3">ثبت نام</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-6"
          >
            <TextField formik={formik} label="نام:" name="name" />
            <TextField formik={formik} label="ایمیل:" name="email" />
            <TextField
              formik={formik}
              label="موبایل:"
              name="phoneNumber"
              type="number"
            />
            <TextField
              formik={formik}
              label="رمز:"
              name="password"
              type="password"
            />
            <TextField
              formik={formik}
              label="تکرار رمز:"
              name="passwordConfirm"
              type="password"
            />

            <RadioInput
              formik={formik}
              radioOptions={radioOptions}
              name="gender"
            />

            <Select
              name="nationality"
              formik={formik}
              selectOptions={selectOptions}
            />

            <CheckboxInput
              formik={formik}
              checkboxOptions={checkboxOptions}
              name="interest"
            />

            <BooleanCheckbox formik={formik} name="terms" />
            <button
              onSubmit={formik.handleSubmit}
              className="w-full transition-all text-xl duration-300 hover:bg-blue-400 bg-blue-500 text-white rounded-xl p-2 shadow-lg shadow-blue-200"
            >
              ثبت نام
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}