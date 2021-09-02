import { PostTitle, PostParagraph } from "components/Text/Text";
import marked from "marked";
import { render2text } from "utils/markdown.utils";
import { PostItemCard } from "./PostFeedItem.styled";

const MAX_LENGTH = 150;

interface PostFeedItemProps {
  title: string;
  content: string;
  author: string;
}
const PostFeedItem = ({ author, content, title }: PostFeedItemProps) => {
  const trimContent = (content: string) => {
    const text = marked(content, { renderer: render2text });
    if (text.length >= MAX_LENGTH)
      return text.substring(0, MAX_LENGTH - 3) + "...";
    return text;
  };
  return (
    <PostItemCard>
      <PostTitle>{title}</PostTitle>
      <PostParagraph
        dangerouslySetInnerHTML={{ __html: trimContent(content) }}
      />
      <small>{author}</small>
    </PostItemCard>
  );
};

export { PostFeedItem };
