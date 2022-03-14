import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { AuthTypeNameSpace } from "../../IType/IType";
import { login } from "../../api/login";
const resolver: Resolver<AuthTypeNameSpace.UserLoginInput> = async (values) => {
  return {
    values: !values.email ? {} : values,
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const FormLogin = () => {
  const [errLogin, setErrLogin] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthTypeNameSpace.UserLoginInput>({ resolver });
  const onSubmit: SubmitHandler<AuthTypeNameSpace.UserLoginInput> = async (
    data: AuthTypeNameSpace.UserLoginInput
  ) => {
    console.log(data);
    const res = await login(data);
    if (res.statusText === "OK") {
    } else {
      setErrLogin(true);
    }
  };
  console.log(errors);
  return (
    <Box maxWidth={"30%"} mx={"auto"}>
      <FormControl isInvalid={errLogin}>
        <FormControl isInvalid={errors.email ? true : false}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            placeholder="Username"
            id="username"
            type={"text"}
            {...register("email", { required: true })}
          ></Input>

          <FormErrorMessage>
            {errors.email ? errors.email?.message : ""}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password ? true : false}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type={"password"}
            {...register("password", { required: true, minLength: 6 })}
          ></Input>
          <FormErrorMessage>
            {errors.password?.type === "minLength"
              ? "Password length at least 6"
              : "Password is required"}
          </FormErrorMessage>
        </FormControl>
        <FormErrorMessage textAlign={"center"}>
          {"Tài khoản mật khẩu không đúng"}
        </FormErrorMessage>
        <Box mt={"2"}>
          <Button
            colorScheme={"blue"}
            width={"100%"}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default FormLogin;
