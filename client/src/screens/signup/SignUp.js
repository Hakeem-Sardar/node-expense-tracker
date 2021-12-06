import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { CardButton } from "../../components/button/CardButton";
import { CardInput } from "../../components/input/CardInput";
import {
  P1,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Footer,
} from "../../GlobalStyles";
import { CheckBoxInput } from "../../components/input/CheckBoxInput";
import { http } from "../../axios/axios.js";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const History = useHistory();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log("clicked");
    http
      .post("user/createUser/", userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user) {
          History.push("/Home");
        }
      })
      .catch((error) => alert("User already exits please login"));
  };

  return (
    <Card>
      <Heading>Sign Up</Heading>
      <CardInput
        name="firstname"
        type="text"
        placeholder="First Name"
        onChange={onChange}
      />
      <CardInput
        name="lastname"
        type="text"
        placeholder="Last Name"
        onChange={onChange}
      />
      <CardInput
        name="email"
        type="text"
        placeholder="E-mail Address"
        onChange={onChange}
      />
      <CardInput
        name="password"
        type="password"
        placeholder="Create Password"
        onChange={onChange}
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput />
          <P1>I Accept the</P1>
          <A>Terms and Conditions </A>
        </CheckDiv>
      </TermsContainer>
      <CardButton title="Sign Up" onClick={onSubmit} />
      <Footer>
        <P1>
          Already have a account?
          <Link to="/">
            <A>Log In</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};
