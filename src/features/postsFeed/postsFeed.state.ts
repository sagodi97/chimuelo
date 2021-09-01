import { Post } from "models/Post.model";
import { selector, atom } from "recoil";
import postService from "services/post.service";

export const dummyDependency = atom({
  key: "dummyDependency",
  default: 0,
});

export const postsSelector = selector<Post[]>({
  key: "posts",
  get: async ({ get }) => {
    get(dummyDependency);
    return postService.getAll();
  },
});
