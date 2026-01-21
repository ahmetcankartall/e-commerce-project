import { useState, useEffect } from "react";

function SectionOne() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // currentCard'ı tanımla
  const currentCard = cards[currentCardIndex];

  useEffect(() => {
    fetch('http://localhost:5000/api/cards')
      .then(response => response.json())
      .then(data => {
        setCards(data.cards);
        setLoading(false);
        console.log('Veriler geldi:', data.cards);
      })
      .catch(error => {
        console.error('API hatası:', error);
        setLoading(false);
      });
  }, []);

  // Navigation fonksiyonları
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div className="flex justify-center items-center h-[610px]">Loading...</div>;
  }

  return (
    <section
      className="relative w-full min-h-screen mt-16 md:mt-[91px] border border-black/10 overflow-hidden"
      style={{
        backgroundImage: `url('${currentCard?.image || "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Ortadaki içerik */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {currentCard?.title || "MOCK DATA"}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          {currentCard?.description || "We know how large objects will act, but things on a small scale just do not act that way."}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
          {currentCard?.buttonText || "Start Now"}
        </button>
      </div>

      {/* Slider navigation arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button 
          onClick={handlePrev}
          className="text-white text-3xl hover:text-gray-300"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button 
          onClick={handleNext}
          className="text-white text-3xl hover:text-gray-300"
        >
          &gt;
        </button>
      </div>

      {/* Slider progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <span 
            key={index}
            className={`w-8 h-1 rounded ${
              index === currentCardIndex ? 'bg-white' : 'bg-white/50'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default SectionOne;