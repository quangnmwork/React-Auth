import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
interface IFormInputs {
  firstName: string;
  checkbox: boolean;
}

const FormLoginApi = () => {
  const { register, handleSubmit, unregister, watch } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      checkbox: true,
    },
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  const checkbox = watch("checkbox");
  useEffect(() => {
    console.log(checkbox);
    if (checkbox) {
      unregister("firstName");
    }
  }, [checkbox, unregister]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("checkbox")} type="checkbox" />

      <input type="submit" />
    </form>
  );
};

export default FormLoginApi;
