function Header() {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <img
            className="phoneImage"
            alt="iPhone_01"
            src="img/fooiting_logo.png"
          />
        </div>

        <div className="relative w-3/5 mx-auto">
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 rounded bg-gray-200 focus:outline-none focus:shadow-outline"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            className="font-bold px-2 py-1 rounded hover:text-amber-300 transition duration-200"
          >
            실시간 TOP
          </a>
          <a
            href="#"
            className="font-bold px-2 py-1 rounded hover:text-amber-300 transition duration-200"
          >
            식당 목록
          </a>
          <a
            href="#"
            className="font-bold px-2 py-1 rounded hover:text-amber-300 transition duration-200"
          >
            회원가입
          </a>
          <a
            href="#"
            className="font-bold px-2 py-1 rounded hover:text-amber-300 transition duration-200"
          >
            로그인
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
