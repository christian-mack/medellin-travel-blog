export const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-8 flex-1" id="postWrapper">
      {children}
    </div>
  );
};
