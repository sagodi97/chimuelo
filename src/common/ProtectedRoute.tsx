import { RouteProps, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "features/auth/auth.state";

export const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const user = useRecoilValue(currentUserAtom);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};
