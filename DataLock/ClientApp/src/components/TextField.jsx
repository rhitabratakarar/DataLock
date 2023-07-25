export default function TextField({ className, label, value, onChange, id }) {
  return (
    <div className="pt-1 w-9/12 mb-3">
      <label
        htmlFor={id}
        className="block text-lg font-medium leading-6 text-gray-900 mb-1"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
