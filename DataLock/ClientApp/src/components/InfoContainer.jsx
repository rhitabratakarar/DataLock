export default function InfoContainer({ children, className = "" }) {
  return (
    <div
      className={`w-full h-screen min-h-[100px] flex flex-col items-center rounded-md overflow-y-scroll bg-inherit ${className}`}
    >
      {children}
    </div>
  );
}
