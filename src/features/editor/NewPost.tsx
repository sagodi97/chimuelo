import { useState, useEffect } from "react";
import marked from "marked";
import postService from "services/post.service";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "features/auth/auth.state";
import { useHistory } from "react-router-dom";
import { Input, Textarea } from "components/Input/Input";
import { Button } from "components/Button/Button";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mdContent, setMdContent] = useState("");
  const user = useRecoilValue(currentUserAtom);
  const history = useHistory();

  useEffect(() => {
    if (content) setMdContent(marked(content));
  }, [content]);

  const uploadPost = async () => {
    if (!content.trim() || !user) return;
    await postService.createPost({
      authorId: user.$id,
      authorName: user.name,
      title,
      content,
    });
    history.push("/");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          uploadPost();
        }}
      >
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder="Write your thoughts here..."
          />
          <div dangerouslySetInnerHTML={{ __html: mdContent }}></div>
        </div>
        <Button color="primary" type="submit">
          Upload!
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
