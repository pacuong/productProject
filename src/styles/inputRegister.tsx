import { CSSObject } from "@mantine/core";

const InputStyleRegister: Partial<Record<'root' | 'input' | 'label', CSSObject>> = {
  root: { width: '80%', margin: '10px 0', textAlign: 'left', },
  input: {
    padding: '10px 12px',
    border: '0.5px solid #2D60FF',
    color: '#2D60FF',
  },
  label: {
    color: '#2D60FF',
    fontSize: '16px',
    marginBottom: '5px',
  },
}

export default InputStyleRegister
