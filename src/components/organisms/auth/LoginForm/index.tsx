import {LoginFormContainer} from "./style";
import {useState} from "react";
import LoginButton from "../../../atoms/auth/LoginButton";
import TextInput from "../../../atoms/auth/TextInput";

function LoginForm() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <LoginFormContainer>
      <img className="logo-img" src={process.env.PUBLIC_URL + '/assets/main/main-logo.png'} alt=''/>
      <TextInput value={id} setValue={setId} type={"text"} placeholder={"이메일 입력"}/>
      <TextInput value={pwd} setValue={setPwd} type={"password"} placeholder={"비밀번호 입력"}/>
      <p className="forget">로그인 정보를 잊으셨나요?</p>
      <LoginButton/>
    </LoginFormContainer>
  );
}

export default LoginForm;