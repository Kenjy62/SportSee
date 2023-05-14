export default function Container({ children }) {
  return (
    <div className="w-full h-full p-20 overflow-hidden overflow-y-scroll">
      {children}
    </div>
  );
}
