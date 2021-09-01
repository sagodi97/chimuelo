import { CurrentUser } from "models/CurrentUser.model";
import { atom } from "recoil";

export const currentUserAtom = atom<CurrentUser | null>({
  key: "currentUser",
  default: null,
});
