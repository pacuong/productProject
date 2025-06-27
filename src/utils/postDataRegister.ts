import { User } from "../component/Register";
import { postData } from "../server/postData";
import bcrypt from "bcryptjs";

const handleRegisterForm = async (userData: User) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, password, ...rest } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const dataToSave = {
      ...rest,
      password: hashedPassword,
    };
    const response = await postData("user", dataToSave);
    alert("Đăng ký thành công!");
    return response;
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    alert("Đăng ký thất bại. Vui lòng thử lại!");
    return null;
  }
};

export default handleRegisterForm;
