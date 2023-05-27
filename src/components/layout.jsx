export default function Layout({ children }) {
  return (
    <div className="container-full flex h-[calc(100vh-96px)] w-full">
      {children}
    </div>
  );
}
