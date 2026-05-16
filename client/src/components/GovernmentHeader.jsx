function GovernmentHeader() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 p-4 shadow-xl">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-extrabold text-red-700">
          🇮🇳 Rashtriya Digital Seva Portal
        </h1>

        <button className="bg-red-600 text-white px-4 py-2 border-4 border-yellow-300 animate-bounce">
          Emergency Logout
        </button>

      </div>

    </div>
  );
}

export default GovernmentHeader;