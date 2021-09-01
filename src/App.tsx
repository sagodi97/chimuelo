import React from "react";
import { useRecoilState } from "recoil";
import authService from "services/auth.service";
import Login from "features/auth/Login";
import PostFeed from "features/postsFeed/PostsFeed";
import MyAccount from "features/myAccount/MyAccount";
import { Link, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "common/ProtectedRoute";
import SignUp from "features/auth/SignUp";
import NewPost from "features/editor/NewPost";
import { useEffect } from "react";
import { currentUserAtom } from "features/auth/auth.state";

function App() {
  const [user, setUser] = useRecoilState(currentUserAtom);

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = async () => {
    try {
      const fetchedUser = await authService.getMe();
      setUser(fetchedUser);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await setUser(null);
      await authService.logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav>
        {user && (
          <>
            <button onClick={logout}>Logout</button>
            <Link to="/">Posts feed</Link>
            <Link to="/my-account">My Account</Link>
          </>
        )}
      </nav>
      <Switch>
        <ProtectedRoute path="/" exact>
          <PostFeed />
        </ProtectedRoute>
        <ProtectedRoute path="/new-post" exact>
          <NewPost />
        </ProtectedRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <ProtectedRoute path="/my-account">
          <MyAccount />
        </ProtectedRoute>
        <Route>NOT FOUND</Route>
      </Switch>
    </>
  );
}

export default App;
