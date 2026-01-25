import axios from "axios";
import { useQuery } from "@tanstack/react-query";






export default function SectionSix() {
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
    <div className="w-full lg:max-w-[1440px] lg:mx-auto lg:min-h-[886px]  lg:py-12  ">

      <div className="w-full lg:max-w-[1069px] lg:mx-auto lg:min-h-[649px] flex ">


        {/* SOL KOLON */}
        <div className="lg:basis-[401px] lg:grow-0 lg:shrink-0 lg:max-h-[649px] flex lg:flex-col lg:py-[80px] items-center bg-[#fafafa] box-border" >
          <div className="lg:w-[348px] lg:grow-0 lg:shrink-0 lg:min-h-[526px] flex lg:flex-col lg:gap-[19px] ">
         
           <h5 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-center text-[#252B42]"> MOST POPULAR </h5>
            <p className="font-montserrat font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="lg:w-[348px] lg:h-[300px] lg:mx-auto " >
              <div className="lg:w-[348px] lg:h-[226px] lg:my-[37px] " >
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="Ürün fotoğrafı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#252B42]">

  BUY NOW
</p>
<p className="lg:px-[5px] lg:py-[3px] lg:w-[108px] lg:h-[34px] lg:mx-auto text-center" >3 Dollars</p>
            

          </div>
        </div>

        {/* SAĞ KOLON */}
        
        <div className="lg:basis-[674px] lg:grow-0 lg:shrink-0 lg:min-h-[649px] flex flex-col lg:flex-row ">
          <img
            src="https://images.unsplash.com/photo-1768185595109-18aded979f9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="Ürün fotoğrafı"
            className="w-full lg:w-[674px] lg:h-[649px] object-cover"
          />
        </div>
      </div>
    </div>










  );
}
