import { useFormik } from "formik";
import * as yup from "yup";



const formValidationSchema = yup.object({
  password: yup.string().min(8, "we need 8 characters").required("fill up pannu da vendru"),
  email : yup.string().min(10, "min 8 da dai").required("fill up pannu da vendru")
})


export function Form() {
  const formik = useFormik({
    initialValues : { email : "",password: ""},
    validationSchema : formValidationSchema,
    onSubmit : (values) => {
      console.log("submit values", values)
    }
  })
 return (
  <form onSubmit={formik.handleSubmit}>
  <input
  name="email"
  id="email"
  onChange={formik.handleChange}
  onBlur = {formik.handleChange}

  value={formik.values.email}
  type="email"
  placeholder= "enter your name"
  />
  <br />
  {formik.touched.email &&   formik.errors.email ? formik.errors.email : " "}
  <br />
  <input
  name="password"
  id="password"
  onChange={formik.handleChange}
  onBlur = {formik.handleChange}
  value={formik.values.password}
  type="password"
  placeholder= "enter your password"
    />
    <br />
  {formik.touched.password &&   formik.errors.password ? formik.errors.password : " "}
  <br />
  <button type="submit">Submit</button>
</form>

 )
}
