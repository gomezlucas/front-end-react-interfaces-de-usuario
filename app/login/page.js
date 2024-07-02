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
  const [backError, setBackError] = useState(false);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
       email: "",
      password: ""
     },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido")
        .required("Email requerido"),
      password: Yup.string().required("Ingrese la contraseña"),

    }),
    onSubmit: async (values) => {
    const user =   await loginUser(values)
      console.log("a ver ", user)
      if (user.error){
        setBackError(true)
        setTimeout(() => {
          setBackError(false)
        }, 3000);
        return
      }

      dispatch(loginSuccess(values))
      router.push('/dashboard/main')
    
      
    },
  });
  
  const loginUser = async(user) => {
    try {
      const response = await fetch(`/api/users/login?email=${user.email}&password=${user.password}`); 
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
}



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
                  } ${
                    backError &&                    
                    "border-solid border-1 border-red-500"
                  }`}
                  name="email"
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
                } ${
                  backError &&                    
                  "border-solid border-1 border-red-500"
                }`              
              }
                name="password"
                placeholder="Contraseña"
                {...getFieldProps("password")}

              />
                {touched.password && errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
         {
              backError &&
              <span className="text-red-500 mb-5"> Usuario/Password inexistente </span>
            }              </div>
            
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
