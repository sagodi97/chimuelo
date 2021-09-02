import { useRefreshPosts } from "hooks/useRefreshPosts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { postsSelector } from "./postsFeed.state";
import { Button } from "components/Button/Button";
import { FeedColumn, FeedGrid } from "./PostsFeed.styled";
import { PostFeedItem } from "./PostFeedItem";
import { Post } from "models/Post.model";

const PostFeed = () => {
  const posts = useRecoilValue(postsSelector);
  const { refresh } = useRefreshPosts();
  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const splitToChunks = (array: Post[], parts: number) => {
    const copy = [...array];
    const result = [];
    for (let i = parts; i > 0; i--) {
      result.push(copy.splice(0, Math.ceil(copy.length / i)));
    }
    return result;
  };
  return (
    <div>
      <Link to="/new-post">
        <Button color="primary">New Post</Button>
      </Link>
      <FeedGrid>
        <FeedColumn>
          {splitToChunks(posts, 4)[0].map((post) => (
            <PostFeedItem
              key={post.$id}
              author={post.authorName}
              title={post.title}
              content={post.content}
            />
          ))}
        </FeedColumn>
        <FeedColumn>
          {splitToChunks(posts, 4)[1].map((post) => (
            <PostFeedItem
              key={post.$id}
              author={post.authorName}
              title={post.title}
              content={post.content}
            />
          ))}
        </FeedColumn>
        <FeedColumn>
          {splitToChunks(posts, 4)[2].map((post) => (
            <PostFeedItem
              key={post.$id}
              author={post.authorName}
              title={post.title}
              content={post.content}
            />
          ))}
        </FeedColumn>
        <FeedColumn>
          {splitToChunks(posts, 4)[3].map((post) => (
            <PostFeedItem
              key={post.$id}
              author={post.authorName}
              title={post.title}
              content={post.content}
            />
          ))}
        </FeedColumn>
      </FeedGrid>
    </div>
  );
};

export default PostFeed;
