"use client";
import { useDispatch, useSelector } from "react-redux";
//import { authService } from './authService';
import { useState } from "react";
import { loginSuccess, logoutSuccess } from "../lib/features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
       email: "test1@gmail.com",
      password: "123456"
     },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido")
        .required("Email requerido"),
      password: Yup.string().required("Ingrese la contraseña"),

    }),
    onSubmit: (values) => {
      dispatch(loginSuccess(values))
      /* Se agrega condición a fines de ejemplo del prototipo*/ 
      if (values.email === "test1@gmail.com" && password === "123456"){
        console.log(values)
        console.log(errors);
        router.push('/dashboard/main')
      }else{

      }
      
    },
  });
  
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-blue-950 w-full">
            <h1 className="mb-8 text-3xl text-center">Inicia sesión</h1>
            <form noValidate onSubmit={handleSubmit}>
          
              <div className="mb-4">
                <input
                  type="text"
                  className={`block border border-grey-light w-full p-3 rounded  ${
                    touched.email &&
                    errors.email &&
                    "border-solid border-1 border-red-500"
                  }`}
                  name="enail"
                  placeholder="Email"
                  {...getFieldProps("email")}
                />
                {touched.email && errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="mb-4">

              <input
                type="password"
                 className={`block border border-grey-light w-full p-3 rounded  ${
                  touched.password &&
                  errors.password &&
                  "border-solid border-1 border-red-500"
                }`}
                name="password"
                placeholder="Contraseña"
                {...getFieldProps("password")}

              />
                {touched.password && errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
              </div>
            
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-950 text-white hover:bg-blue-900 focus:outline-none my-1"
              >
                Inicia
              </button>
            </form>
            <div className="text-center text-sm text-blue-950 mt-4">
              Al iniciar sesión, acepta los Términos de Servicio y las Políticas de
              Privacidad
            </div>
          </div>

          <div className="text-blue-950 mt-6 text-center">
            Aún no tienes cuenta?
            <br />
            <a
              className="border-b border-blue text-blue cursor-pointer  underline  underline-offset-2	"
              onClick={() => router.push('/signup')}
            >
              Crear una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
