function SectionThree() {
  const cards = [
    {
      title: "Your Space",
      subtitle: "Unique Life",
      buttonText: "Explore Items",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      imageAlt: "Ice cream"
    },
    {
      title: "Ends Today",
      subtitle: "Elements Style",
      buttonText: "Explore Items",
      image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=300&fit=crop",
      imageAlt: "Green apples"
    },
    {
      title: "Ends Today",
      subtitle: "Elements Style",
      buttonText: "Explore Items",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      imageAlt: "Ham dish"
    }
  ];

  return (
    <section className="bg-white snap-start flex flex-col items-center justify-center py-2 md:py-25 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-row bg-black">
                {/* Text Content - Left Side */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center ">
                  <p className="text-sm text-gray-500 mb-2 lg:text-blue-500 md:text-red-500">{card.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 lg:text-blue-500 md:text-red-500 ">{card.subtitle}</h3>
                  <button className="text-[#23a6f0] font-semibold hover:text-blue-700 transition-colors text-left">
                    {card.buttonText} →
                  </button>
                </div>

                {/* Image - Right Side */}
                <div className="flex-1 flex  items-center justify-center bg-gray-50 p-4 ">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-48 md:h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionThree;