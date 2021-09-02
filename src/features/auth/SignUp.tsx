import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import authService from "services/auth.service";
import { currentUserAtom } from "./auth.state";

const SignUp = () => {
  const [user, setUser] = useRecoilState(currentUserAtom);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) return;
    try {
      const newUser = await authService.signup(name, email, password);
      await authService.login(email, password);
      setUser(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  if (user) return <Redirect to="/" />;
  return (
    <div>
      <h1>Create an account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </form>
      <small>
        Already have an account? <Link to="signup">Sign in</Link>
      </small>
    </div>
  );
};

export default SignUp;
