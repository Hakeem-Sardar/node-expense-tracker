import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { CardButton } from "../../components/button/CardButton";
import { CardInput } from "../../components/input/CardInput";
import {
  P1,
  Hr,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Icons,
  Footer,
} from "../../GlobalStyles";
import { CheckBoxInput } from "../../components/input/CheckBoxInput";
import { IconDiv } from "../../components/icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { http } from "../../axios/axios";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/AppState";

export const LogIn = () => {
  const { addUser } = useContext(GlobalContext);
  const History = useHistory();
  const [userData, setUserData] = useState({ userName: "", password: "" });
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    http
      .post("user/login/", userData)
      .then((response) => {
        console.log(response.data, "login");
        console.log({addUser});
        // addUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user) {
          History.push("/Home");
        }
      })
      .catch((error) => alert({error}));
  };

  return (
    <Card>
      <Heading>Login</Heading>
      <CardInput
        className="loginInput"
        name="email"
        onChange={onChange}
        type="text"
        placeholder="email"
      />
      <CardInput
        name="password"
        className="loginInput"
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput />
          <P1>Remember Me</P1>
        </CheckDiv>
        <A>Forget Password? </A>
      </TermsContainer>
      <CardButton onClick={onSubmit} title="Log In" />
      <Hr>Or</Hr>
      <Icons>
        <IconDiv>
          <FontAwesomeIcon icon={faFacebookF} color="#202442" />
        </IconDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faGoogle} color="#202442" />
        </IconDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faTwitter} color="#202442" />
        </IconDiv>
      </Icons>
      <Footer>
        <P1>
          Don't have an account?
          <Link to="/SignUp">
            <A>Sign Up</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};
