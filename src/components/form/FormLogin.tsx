import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { FormEvent, SyntheticEvent } from "react";

interface IInput {
  email: string;
  password: string;
}
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email không được trống")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Mật khẩu không được trống")
    .min(6, "Mật khẩu ít nhất là 6 kí tự"),
});

const FormLogin: React.FC<{}> = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    handleSubmit,
    // watch,
  } = useForm<IInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IInput> = async (data: IInput) => {
    console.log(data);
    console.log(errors); // only print if go through yup check
  };
  return (
    <Box maxWidth={"30%"} mx={"auto"}>
      <FormControl isInvalid={!isSubmitSuccessful && isSubmitted}>
        <FormControl isInvalid={errors.email ? true : false}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            placeholder="Username"
            id="username"
            type={"text"}
            {...register("email")}
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
            {...register("password")}
          ></Input>
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormErrorMessage textAlign={"center"}>
          {errors.password ? errors.password?.message : ""}
        </FormErrorMessage>
        <Box mt={"2"}>
          <Button onClick={handleSubmit(onSubmit)} colorScheme={"red"}>
            Login
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default FormLogin;
