import { hasLength, isEmail, isNotEmpty } from "@mantine/form";

export const validateForm = {
  firstName: isNotEmpty("first name is required"),
  lastName: isNotEmpty("last name is required"),
  email: isEmail("Invalid email format"),
  password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
  confirmPassword: (value: string, values: { password: string }) =>
    value !== values.password ? "The specified password does not match." : null,
};
