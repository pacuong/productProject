import Typography from "../Typography";
import { useForm } from "@mantine/form";
import InputStyleRegister from "../../styles/inputRegister";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { validateForm } from "../../utils/initialValues";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onUserName: (data: User) => void;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = ({ onUserName }: RegisterFormProps) => {
  const form = useForm<User>({
    initialValues: initialValues,
    validate: validateForm
  });

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={form.onSubmit((values) => onUserName(values))}
        className="w-[490px] p-6 rounded-xl border-gray-50 flex flex-col items-center shadow-[0_0_12px_3px_rgba(107,114,128,0.5)]"
      >
        <Typography className="p-2 font-bold text-blue-25 text-3xl">
          Register
        </Typography>
        <TextInput
          {...form.getInputProps("firstName")}
          styles={InputStyleRegister}
          label="FirstName"
          placeholder="FirstName"
        />
        <TextInput
          {...form.getInputProps("lastName")}
          styles={InputStyleRegister}
          label="LastName"
          placeholder="LastName"
        />
        <TextInput
          {...form.getInputProps("email")}
          styles={InputStyleRegister}
          label="Email"
          placeholder="Email"
        />
        <PasswordInput
          {...form.getInputProps("password")}
          styles={InputStyleRegister}
          label="Password"
          placeholder="Password"
        />
        <PasswordInput
          {...form.getInputProps("confirmPassword")}
          styles={InputStyleRegister}
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <Button className="w-[80%] mt-8 mb-2 text-base" type="submit">
          Register
        </Button>
        {/* //TODO: Link react router */}
        <a href="./index.tsx" className="text-blue-500 text-base opacity-80">
          Already have an account? Login now!
        </a>
      </form>
    </div>
  );
};

export default RegisterForm;
