import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "@/context/MovieContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { CONSTANTS } from "@/utilities/constants";
import { ChevronRightIcon } from "@/assets/icons/Icons";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Footer from "@/layouts/Footer/Footer";
import * as Yup from "yup";
import "./Login.scss";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(CONSTANTS.LOGIN.VALIDATION.EMAIL_INVALID)
    .required(CONSTANTS.LOGIN.VALIDATION.EMAIL_REQUIRED),
  password: Yup.string()
    .required(CONSTANTS.LOGIN.VALIDATION.PASSWORD_REQUIRED)
    .min(8, CONSTANTS.LOGIN.VALIDATION.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, CONSTANTS.LOGIN.VALIDATION.PASSWORD_UPPERCASE)
    .matches(/\d/, CONSTANTS.LOGIN.VALIDATION.PASSWORD_NUMBER),
});

const Login = () => {
  const navigate = useNavigate();
  const { getMovies } = useMovieContext();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: unknown) => {
    localStorage.setItem("isAuthenticated", "true");
    getMovies();
    navigate("/movies");
  };

  return (
    <>
      <div className="loginContainer">
        <h1 className="appTitle">{CONSTANTS.APP_TITLE}</h1>
        <div className="loginBox">
          <h2 className="loginTitle">{CONSTANTS.LOGIN.TITLE}</h2>
          <FormProvider {...methods}>
            <Form onSubmit={handleLogin}>
              <Input
                name="email"
                control={methods.control}
                placeholder={CONSTANTS.LOGIN.EMAIL_PLACEHOLDER}
              />
              <Input
                name="password"
                control={methods.control}
                placeholder={CONSTANTS.LOGIN.PASSWORD_PLACEHOLDER}
                type="password"
              />
              <Button type="submit">{CONSTANTS.LOGIN.BUTTON_TEXT} <ChevronRightIcon /></Button>
            </Form>
          </FormProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
