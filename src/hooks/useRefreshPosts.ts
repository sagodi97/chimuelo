import { dummyDependency } from "features/postsFeed/postsFeed.state";
import { useSetRecoilState } from "recoil";

export const useRefreshPosts = () => {
  const setDummy = useSetRecoilState(dummyDependency);
  const refresh = () => {
    setDummy((n) => n + 1);
  };
  return { refresh };
};
