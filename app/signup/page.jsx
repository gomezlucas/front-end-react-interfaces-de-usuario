"use client";
import { useDispatch, useSelector } from "react-redux";
//import { authService } from './authService';
import { useEffect, useLayoutEffect, useState } from "react";
import { loginSuccess, logoutSuccess } from "../lib/features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [users, setUsers] = useState([]);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Mínimo 3 cáracteres")
        .required("Campo requerido"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email requerido"),
      password: Yup.string().required("Ingrese la contraseña"),
      confirmPassword: Yup.string()
      .required('Reingrese su contraseña.')
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
    }),
    onSubmit: (values) => {
      dispatch(loginSuccess(values))
      console.log(values)
      console.log(errors);
      postData(values)
      router.push('/dashboard/main')
    },
  });

  const postData = async (user) =>{
     try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  user }),
      });  
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
/*
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api');
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUsers();
}, []);
 */
  return (
    <div> 
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-blue-950 w-full">
            <h1 className="mb-8 text-3xl text-center">Registrarse</h1>
            <form noValidate onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className={`block border border-grey-light w-full p-3 rounded  ${
                    touched.name &&
                    errors.name &&
                    "border-solid border-1 border-red-500"
                  }`}
                  name="name"
                  placeholder="Nombre completo"
                  {...getFieldProps("name")}
                />
                {touched.name && errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>
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
              <div className="mb-4">

              <input
                type="password"
                className={`block border border-grey-light w-full p-3 rounded  ${
                  touched.confirmPassword &&
                  errors.confirmPassword &&
                  "border-solid border-1 border-red-500"
                }`}                
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                {...getFieldProps("confirmPassword")}

              />
               {touched.confirmPassword && errors.confirmPassword && (
                  <span className="text-red-500">{errors.confirmPassword}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-950 text-white hover:bg-blue-900 focus:outline-none my-1"
              >
                Crear cuenta
              </button>
            </form>
            <div className="text-center text-sm text-blue-950 mt-4">
              Al registrarse, acepta los Términos de Servicio y las Políticas de
              Privacidad
            </div>
          </div>

          <div className="text-blue-950 mt-6 text-center">
            Ya tienes cuenta?
            <br />
            <a
              className="border-b border-blue text-blue cursor-pointer  underline  underline-offset-2	"
              onClick={() => router.push('/login')}
            >
              Loguearse
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
