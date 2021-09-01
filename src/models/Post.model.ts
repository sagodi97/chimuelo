export type Post = {
  $id?: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
};

// const getPosts = async () => {
//     try {
//       const { documents }: any = await postService.getAll();
//       setPosts(documents);
//     } catch (error) {
//       setPosts([]);
//     }
//   };
