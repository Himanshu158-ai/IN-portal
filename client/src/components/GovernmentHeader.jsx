function GovernmentHeader() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 p-3 sm:p-4 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-xl sm:text-3xl font-extrabold text-red-700 leading-tight">
          Rashtriya Digital Seva Portal
        </h1>
        <button className="bg-red-600 text-white px-3 py-2 sm:px-4 text-sm sm:text-base border-4 border-yellow-300 animate-bounce shrink-0">
          Emergency Logout
        </button>
      </div>
    </div>
  );
}

export default GovernmentHeader;