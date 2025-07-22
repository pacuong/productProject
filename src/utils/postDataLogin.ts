import { LoginUser } from "@/component/Login";
import { getData } from "@/server/getData";

import bcrypt from "bcryptjs";

const handleLoginForm = async (userCredentials: LoginUser) => {
  try {
    const users: Array<{ email: string; password: string }> = await getData(
      "user"
    );

    const matchedUser = users.find((u) => u.email === userCredentials.email);
    if (!matchedUser) {
      throw new Error("Email không tồn tại");
    }

    const isPasswordCorrect = await bcrypt.compare(
      userCredentials.password,
      matchedUser.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Mật khẩu không đúng");
    }

    console.log("Đăng nhập thành công:", matchedUser);
    return matchedUser;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định";
    console.error("Lỗi đăng nhập:", message);
    throw new Error(message);
  }
};

export default handleLoginForm;
