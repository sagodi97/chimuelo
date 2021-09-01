import appwrite from "config/appwrite";
import { Post } from "models/Post.model";

const COLLECTION_ID = "612e17b23a232";

class PostService {
  async getAll(): Promise<Post[]> {
    const { documents } = await appwrite.database.listDocuments(COLLECTION_ID);
    return documents;
  }
  async createPost(post: Post) {
    return appwrite.database.createDocument(
      COLLECTION_ID,
      post,
      ["*"],
      [`user:${post.authorId}`]
    );
  }
}

export default new PostService();
