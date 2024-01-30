import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link , useNavigate } from 'react-router-dom'
import { signup } from '../Redux/UserSlice'
import { object, string } from "yup" 

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        username :"",
        email : "",
        password : "",
        
    }
    const validationSchema = object({
        username : string()
        .required("User name is Required"),
        email: string()
        .email("Please enter a valid email.")
        .required("Email is required."),
      password: string()
        .max(20, "Password should max of 20 digits")
        .min(8, "Password should min of 8 digits")
        .required("Password is required."),
      })
      function formSubmit(value){
        console.log('value',value);
        dispatch(signup({formvalue : value, navigate}))
      }
    
  return (
    <>
    
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-lg">
  <h1 className="text-center text-2xl font-bold text-sky-700 sm:text-3xl">Get started today</h1>

  <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
    inventore quaerat mollitia?
  </p>
   <Formik 
   initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={formSubmit}
    >
   {() => {
    return (
      <>
      <Form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <p className="text-center text-lg font-medium">Sign in to your account</p>

        <div>
        <label htmlFor="Username" className="sr-only">Username</label>
  
        <div className="relative">
          <Field
            type="username"
            name="username"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Username"
          />
  
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
        <ErrorMessage name="username" component="div" />
      </div>
    
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
    
          <div className="relative">
            <Field
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
    
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
          <ErrorMessage name="email" component="div" />
        </div>
    
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
    
          <div className="relative">
            <Field
              type="password"
              name="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
    
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
          <ErrorMessage name="password" component="div" />
        </div>
    
        <button
         
          type="submit"
          className="block w-full rounded-lg bg-sky-700 px-5 py-3 text-sm font-medium text-white"
        >
          Register
        </button>
    
        <p className="text-center text-sm text-gray-500">
          No account?
          <Link className="underline" to="/login" >Login</Link>
        </p>
      </Form>
      </>
    )

   }}
   </Formik>
 
</div>
</div>
    </>
  )
}

export default Register