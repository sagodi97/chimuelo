import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { Title } from "components/Title/Title";
import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import authService from "services/auth.service";
import { currentUserAtom } from "./auth.state";

const Login = () => {
  const [user, setUser] = useRecoilState(currentUserAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) return;
    try {
      await authService.login(email, password);
      const user: any = await authService.getMe();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  if (user) return <Redirect to="/" />;
  return (
    <div>
      <Title>Login to your account</Title>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Button type="submit" color="secondary">
          Login
        </Button>
      </form>
      <small>
        No account? <Link to="signup">Sign up</Link>
      </small>
    </div>
  );
};

export default Login;
