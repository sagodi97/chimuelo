import { currentUserAtom } from "features/auth/auth.state";
import { useRecoilValue } from "recoil";

const MyAccount = () => {
  const user = useRecoilValue(currentUserAtom);
  if (!user) return <></>;
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <p>
        <strong>Email: </strong> <em>{user.email}</em>
      </p>
      <p>
        <strong>Joined on: </strong>
        {new Date(user.registration * 1000).toLocaleDateString()}
      </p>
    </div>
  );
};

export default MyAccount;
