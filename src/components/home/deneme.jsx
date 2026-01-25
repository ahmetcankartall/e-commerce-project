import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SectionEnd() {
  const URL = "http://localhost:5000/api/cards"; // Backend URL'si

  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"], // Query key'i "cards" olarak değiştirdim
    queryFn: () => axios.get(URL).then(res => res.data), // Axios ile API çağrısı
    staleTime: 1000 * 10, // 10 saniye boyunca "taze" kalır
  });
 console.log("isLoading:", isLoading); // 👈 Takip et!
  console.log("error:", error); 
  // DİKKAT: useQuery'de "isPending" değil "isLoading" kullanılır!
  if (isLoading) return (<span>Loading...</span>);
  if (error) return (<span>Error: {error.message}</span>);

  // DİKKAT 2: Data yapısı { cards: [...] } şeklinde geliyor!
  // Önce data.cards'a erişmeliyiz
  const cards = data?.cards || [];
  console.log("Cards SectionEnd", cards);
  console.log("Data SectionEnd", data);
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <li key={card.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <img 
                src={card.image} 
                alt={card.imageAlt} 
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <h3 className="text-gray-600 mb-2">{card.subtitle}</h3>
            <p className="text-gray-700 mb-3">{card.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {card.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-blue-600">{card.price}</span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-600">{card.rating}</span>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                {card.buttonText}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionEnd;