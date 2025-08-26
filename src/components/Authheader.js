export default function Authheader({ userName, onNavigate }) {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">QuickMart</h1>
      <div className="space-x-4">
        <span className="text-gray-700 font-medium">Hi, {userName}</span>
        <button
          onClick={() => onNavigate("home")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
