export const TwoColumnPostWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-6 gap-8 flex-1"
      id="postWrapper"
    >
      {children}
    </div>
  );
};
