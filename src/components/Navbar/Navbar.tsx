import { Button } from "components/Button/Button";
import { currentUserAtom } from "features/auth/auth.state";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import authService from "services/auth.service";
import { Logo, LogoBox } from "./Navbar.styled";
import logoImg from "assets/chimuelo.png";
import { Title } from "components/Text/Text";

const Navbar = () => {
  const [user, setUser] = useRecoilState(currentUserAtom);

  const logout = async () => {
    try {
      await setUser(null);
      await authService.logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <LogoBox>
        <Logo src={logoImg} />
        <Title>Chimuelo blog</Title>
      </LogoBox>
      {user && (
        <>
          <Button color="primary" onClick={logout}>
            Logout
          </Button>
          <Link to="/">
            <Button color="secondary">Posts feed</Button>
          </Link>
          <Link to="/my-account">
            <Button color="secondary">My Account</Button>
          </Link>
        </>
      )}
    </nav>
  );
};

export { Navbar };
