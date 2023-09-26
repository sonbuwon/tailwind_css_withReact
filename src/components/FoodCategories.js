function FoodCategories() {
  const categories = [
    "피자",
    "치킨",
    "햄버거",
    "파스타",
    "초밥",
    "분식",
    "뷔페",
    "스테이크",
  ];

  return (
    <div className="container mx-auto mt-12 mb-52 grid grid-cols-4 gap-2 w-4/12">
      {categories.map((category, index) => (
        <a
          key={index}
          href="#"
          className="bg-white p-2 rounded shadow-md text-center hover:bg-gray-100 transition duration-200 flex flex-col items-center justify-center w-32 h-32"
        >
          {/* 임시 SVG 이미지 */}
          <svg
            className="w-16 h-16 mb-2 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
          </svg>
          {category}
        </a>
      ))}
    </div>
  );
}

export default FoodCategories;
