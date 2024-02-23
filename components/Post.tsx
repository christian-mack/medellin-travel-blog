interface PostProps {
  title: string;
  category: string;
  authorName: string;
  authorImgUrl: string;
  publishDate: string;
}

const Post = ({
  title,
  category,
  authorName,
  authorImgUrl,
  publishDate,
}: PostProps) => {
  return <div>Post</div>;
};

export default Post;
