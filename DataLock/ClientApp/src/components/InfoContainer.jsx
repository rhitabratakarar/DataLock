export default function InfoContainer({ children, className = "", id }) {
  return (
    <div
      id={(id)? id : null}
      className={`w-full h-screen min-h-[100px] flex flex-col items-center rounded-md overflow-y-scroll bg-inherit ${className}`}
    >
      {children}
    </div>
  );
}
