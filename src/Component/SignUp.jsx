import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("FullName is required"),
    email: Yup.string()
      .email("Valid email is required")
      .required("Email is required"),
    phone: Yup.string()
      
      .matches(/^\+\d{2}\d{10}$/, "phone num shoulkd be +xx and 10 digits")
      .required("Phone num is required"),
    password: Yup.string()
      .min(6, "minimum 6 characters required")
      .required("password is required "),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema,
    onSubmit: async (values,{resetForm}) => {
      console.log("Form-submit", values);
      await saveToFirebase(values);
      resetForm();
    },
  });

 
  const saveToFirebase = async (values) => {
    try {
      const res = await fetch(
        "https://reactsignuplogin-default-rtdb.firebaseio.com/ReactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values), 
        }
      );
      if (res.ok) {
        console.log("Data saved successfully!");
      } else {
        console.log("Error saving data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">

          <form onSubmit={formik.handleSubmit}>

            <div className="mb-4">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder="Enter your fullName"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div style={{ color: "red" }}>{formik.errors.fullName}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Enter your phone number with country code"
                className="form-control"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div style={{ color: "red "}}>{formik.errors.phone}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
                className="form-control"
              />

              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red "}}>{formik.errors.password}</div>
              )}

              <div className="mb-4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                   value={formik.values.confirmPassword}
                  className="form-control"
                />
                 {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
              )}
              </div>

              <button type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default SignUp;


