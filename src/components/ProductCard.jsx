import axios from "axios";
import { useQuery } from "@tanstack/react-query";
 
 



export default function ProductCard() {
  const URL = "http://localhost:5000/api/cards";
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
  console.log("productcard", cards);
  console.log("productcard", data);





  return (
    <div className="w-screen h-[895px] bg-[#ffffff] flex justify-center items-center">
      <div className="w-[389px] h-[664px] md:h-full md:w-full flex flex-col md:flex-row justify-center md:max-w-7xl gap-6 py-16 px-6 md:px-0 ">

        <div className=" bg-white md:flex-1 h-[799px] overflow-hidden border-2 border-sky-200 rounded-lg">
  <img
    src="https://images.unsplash.com/photo-1768797767742-353a378404b8?w=600&auto=format&fit=crop&q=60"
    alt="Ürün fotoğrafı"
    className="w-full h-full object-cover"
  />
</div>

        <div className="hidden md:flex md:flex-col bg-white md:flex-[2] md:h-[799px] ">

      <nav className="border-b border-gray-200 md:flex md:flex-row h-[50px]" >
  <div className=" md:flex md:flex-row w-full md:justify-between items-center md:p-4">
    <span className="text-xl font-bold">BESTSELLER PRODUCTS</span>
    <ul className="md:flex md:flex-row gap-16 text-l font-bold">
      <li className="text- font-bold">Men</li>
      <li>Women</li>
      <li>Accessories</li>
    </ul>
    <div className="flex gap-4">
     <button className=" w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-2xl">
  ↻
</button>
    <button className=" w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-2xl">
  ↻
</button>
  </div>
  </div>
</nav>


 <div className=" md:p-2 md:h-[746px] md:px-3 
                flex flex-col flex-wrap justify-start
                "> {/* 👈 BU ÇOK ÖNEMLİ! */}
  
  {/* KARTLAR */}
  {cards.slice(0, 6).map((card) => (
    <div key={card.id} 
         className="md:w-[32%] h-[49%] mb-1 
                    flex flex-col  ">
      
      
      <div className="h-3/5 ">
        <img src={card.image} className="w-full h-full object-cover rounded-lg " />
      </div>
      
      
      <div className="h-2/5 flex flex-col justify-end p-2 gap-2">
        <div>
          <h2 className="font-bold ">{card.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{card.description}</p>
        </div>
        
          <span className="font-bold flex justify-end">{card.price}</span>
          
        
      </div>
      
    </div>
  ))}
  
</div>



      
        </div>

      </div>
    </div>
  );
}
