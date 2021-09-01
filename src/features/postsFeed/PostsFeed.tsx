import { useRefreshPosts } from "hooks/useRefreshPosts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import marked from "marked";
import { useRecoilValue } from "recoil";
import { postsSelector } from "./postsFeed.state";
import { Button } from "components/Button/Button";

const PostFeed = () => {
  const posts = useRecoilValue(postsSelector);
  const { refresh } = useRefreshPosts();
  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Link to="/new-post">
        <Button color="primary">New Post</Button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.$id}>
            <h3>{post.title}</h3>
            <small>{post.authorName}</small>
            <div
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostFeed;
