import {TextInputWrapper} from "./style";
import {Dispatch, SetStateAction} from "react";

interface ITextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
}

function TextInput({value, setValue, type, placeholder}: ITextInputProps) {
  return (
    <TextInputWrapper>
      <input
        className="input-text"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </TextInputWrapper>
  );
}

export default TextInput;
