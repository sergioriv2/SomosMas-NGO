import { setLoginFulfilled } from "../../features/actions/loginActions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import * as Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "./TextField";
import ButtonComponent from "../Button";
import * as Bootstrap from "react-bootstrap";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postRegister = (formValues) => {
    return new Promise(async (resolve, reject) => {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-Api-Key": window.localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        };

        const response = await fetch(
          process.env.REACT_APP_REGISTER_ENDPOINT,
          requestOptions
        );

        resolve(response.ok);
      } catch (err) {
        reject();
        console.log(err);
      }
    });
  };

  const postLogin = async (formValues) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
      };

      const response = await fetch(
        process.env.REACT_APP_LOGIN_ENDPOINT,
        requestOptions
      );

      const data = await response.json();

      dispatch(setLoginFulfilled(data.results));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (values) => {
    const { passwordConfirmation, ...formValues } = values;

    postRegister(formValues)
      .then((response) => {
        if (response) postLogin(formValues);
        else
          Swal.fire({
            title: "Error al crear tu cuenta",
            text: "Ocurrió un error inesperado al crear tu cuenta, intentalo de nuevo",
            type: "error",
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Bootstrap.Container fluid>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Este campo es obligatorio.")
            .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras.")
            .min(4, "El nombre tiene que contener al menos 4 caracteres."),
          lastName: Yup.string()
            .required("Este campo es obligatorio.")
            .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras.")
            .min(4, "El apellido tiene que contener al menos 4 caracteres."),
          password: Yup.string()
            .required("Este campo es obligatorio.")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/,
              "Debe contener 7 caracteres, una mayúscula, una minúscula."
            ),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Las contraseñas deben coincidir."
          ),
          email: Yup.string()
            .required("Este campo es obligatorio.")
            .email("Por favor, ingrese un email válido"),
        })}
        onSubmit={handleSubmit}
      >
        <Bootstrap.Form as={Form}>
          <TextField name="firstName" label="Nombre" placeholder="Nombre" />
          <TextField name="lastName" label="Apellido" placeholder="Apellido" />
          <TextField
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
          />
          <TextField
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
          />
          <TextField
            name="passwordConfirmation"
            label="Confirmación contraseña"
            placeholder="Contraseña"
            type="password"
          />
          <ButtonComponent type="submit" className="primary login-button">
            Crear usuario
          </ButtonComponent>
        </Bootstrap.Form>
      </Formik>
    </Bootstrap.Container>
  );
};

export default RegisterForm;
