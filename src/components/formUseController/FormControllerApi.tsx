import { useForm, useController, UseControllerProps } from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
}

function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  //   console.log(field, fieldState);
  //   console.log(props.rules);
  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

const FormControllerApi = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="username" rules={{ required: true }} />
      <Input control={control} name="password" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};

export default FormControllerApi;
