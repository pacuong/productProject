import { CSSObject } from "@mantine/core";

const InputStyleLogin: Partial<Record<"root" | "input" | "label", CSSObject>> =
  {
    root: { width: "80%", margin: "10px 0", textAlign: "left",},
    input: {
      padding: "20px 15px",
      color: "#2D60FF",
      border: "0.5px solid #2D60FF",
    },
    label: {
      color: "#2D60FF",
      fontSize: "16px",
      margin: "5px 0",
    },
  };

export default InputStyleLogin;
