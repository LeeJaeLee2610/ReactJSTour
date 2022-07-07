import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 char or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 char or less";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 char or less")
        .required("required"),
      lastName: Yup.string()
        .max(20, "Must be 20 char or less")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          //   name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-600"
          //   value={formik.values.firstName}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          //   name="lastName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-600"
          {...formik.getFieldProps("lastName")}
          //   value={formik.values.lastName}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
