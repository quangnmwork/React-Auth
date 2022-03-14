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
import React from "react";
const resolver: Resolver<AuthTypeNameSpace.UserLoginInput> = async (values) => {
  return {
    values: !values.email || !values.password ? {} : values,
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
  const {
    register,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitted,
      isDirty,
      dirtyFields,
    },
    handleSubmit,
    // watch,
  } = useForm<AuthTypeNameSpace.UserLoginInput>({ resolver });
  const onSubmit: SubmitHandler<AuthTypeNameSpace.UserLoginInput> = async (
    data: AuthTypeNameSpace.UserLoginInput
  ) => {
    console.log(data);
    const res = await login(data);
    if (res.statusText === "OK") {
    } else {
    }
  };
  // const emailInputWatching = watch("email"); // watching something like text change event
  // console.log(emailInputWatching);
  // console.log(isSubmitted); so this is check if the user has submitted
  // isSubmitSuccessful is very convenient cause you dont need to use useState
  React.useEffect(() => {
    console.log(isDirty, dirtyFields);
  }, [isDirty, dirtyFields]);
  return (
    <Box maxWidth={"30%"} mx={"auto"}>
      <FormControl
        isInvalid={
          !isSubmitSuccessful &&
          isSubmitted &&
          !errors.email &&
          !errors.password
        }
      >
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
