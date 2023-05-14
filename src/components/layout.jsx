export default function Layout({ children }) {
  return (
    <div className="container-full h-[calc(100vh-96px)] w-full flex">
      {children}
    </div>
  );
}
