import { Button, PasswordInput, TextInput } from "@mantine/core";
import Typography from "../Typography";
import { hasLength, isEmail, useForm } from "@mantine/form";
import InputStyleLogin from "@/styles/inputLogin";

export interface LoginUser {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (data: LoginUser) => void;
}

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const form = useForm<LoginUser>({
    initialValues: initialValues,

    validate: {
      email: isEmail("invalid email format"),
      password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={form.onSubmit((values) => onLogin(values))}
        className="w-[490px] p-8 rounded-xl border-gray-50 flex flex-col items-center shadow-[0_0_12px_3px_rgba(107,114,128,0.5)]"
      >
        <Typography className="p-6 font-bold text-blue-25 text-xl">
          Login
        </Typography>
        <TextInput
          styles={InputStyleLogin}
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          styles={InputStyleLogin}
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <Button className="w-[80%] mt-4 mb-2 text-base" type="submit">
          Login
        </Button>
        {/* //TODO: Link react router */}
        <a className="text-blue-25 text-base opacity-80" href="/Register">
          New user? Register Now
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
