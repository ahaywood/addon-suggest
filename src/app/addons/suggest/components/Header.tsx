const Header = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {children}
    </div>
  );
};

export { Header };
