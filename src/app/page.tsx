"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "../common/TextField";

export default function Home() {
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
  });
  const onSubmit = () => {};
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit,
    validationSchema,
  });
  return (
    <div className="bg-slate-100">
      <main className="container mx-auto sm:p-3 sm:max-w-screen-sm">
        <div className=" bg-white min-h-screen sm:m-3 rounded-md p-3">
          <h1 className="font-bold text-2xl text-center py-3">ثبت نام</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4"
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
