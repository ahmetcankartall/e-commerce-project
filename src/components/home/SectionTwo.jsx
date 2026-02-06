function SectionTwo() {
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
<section className="flex justify-center bg-[#FAFAFA] pt-16 pb-16 md:pt-20 md:pb-20 snap-start flex items-center justify-center">
  <div className="w-full max-w-[1077px] flex flex-col md:flex-row items-center justify-between ">

    {cards.map((card, index) => (
      <div
        key={index}
        className="relative w-full md:w-[333px] h-[232px] bg-white  border-[#ECECEC] overflow-hidden  flex-shrink-0"
      >
        {/* Yazı */}
        <div className="w-1/2 p-6 relative z-10">
          <span className="text-sm text-gray-500">{card.title}</span>
          <h2 className="text-xl font-bold">{card.subtitle}</h2>
          <a href="#" className="text-sm mt-4 inline-block">
            {card.buttonText} →
          </a>
        </div>

        {/* Görsel */}
        <img
          src={card.image}
          alt={card.imageAlt}
          className="absolute bottom-0 right-0 w-1/2 h-full object-cover"
        />
      </div>
    ))}

  </div>
</section>




  );
}
export default SectionTwo;