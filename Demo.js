import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material"


export function Demo(){
    return(
        <div className="container-fluid">
          <Formik
           initialValues={
             {
                "FirstName": "",
                "LastName": "",
                "Mobile": "",
                "CompanyName": ""
             }
           }

           validationSchema = {
             yup.object({
                "FirstName": yup.string()
                               .required("First Name Required")
                               .min(4, "Name too short")
                               .max(10, "Name too long"),
                "LastName": yup.string()
                               .required("Last Name Required")
                               .min(4, "Name too short")
                               .max(10, "Name too long"),
                "Mobile": yup.string()
                             .matches(/\+91\d{10}/,"Invalid Mobile"),
                "CompanyName": yup.string()
                               .required("Company Name Required")
                               .min(7, "Name too short")
                               .max(15, "Name too long"),
             })
           }

           onSubmit = {
             (values)=> {
                alert(JSON.stringify(values));
             }
           }
          >
             <Form>
                {
                    <div>
                    <h2>Register User</h2>
                    <dl>
                        <dt>First Name</dt>
                        <dd> <Field type="text" name="FirstName"></Field> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="FirstName"></ErrorMessage>
                        </dd>
                        <dt>Last Name</dt>
                        <dd> <Field type="text" name="LastName"></Field> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="LastName"></ErrorMessage>
                        </dd>
                        <dt>Mobile</dt>
                        <dd>
                            <Field type="text" name="Mobile"></Field>
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Mobile"></ErrorMessage>
                        </dd>
                        <dt>Company Name</dt>
                        <dd> <Field type="text" name="CompanyName"></Field> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="CompanyName"></ErrorMessage>
                        </dd>
                    </dl>

                    <Button  variant="outlined" color="success">Register User</Button>
                    </div>
                }
             </Form>
          </Formik>
        </div>
    )
}