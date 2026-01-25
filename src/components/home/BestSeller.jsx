import axios from "axios";
import { useQuery } from "@tanstack/react-query";






export default function BestSeller() {

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
     <section className="w-full ">
  <div className="lg:max-w-[1124px] mx-auto min-h-[620px] lg:py-[48px] flex flex-col gap-[24px] items-center">

    {/* TITLE */}
    <div className="lg:w-[1040px] min-h-[32px] flex items-center">
      <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
        BEST SELLER PRODUCTS
      </p>
    </div>

    {/* DIVIDER */}
    <div className="w-full lg:w-[1040px] h-[2px] bg-[#ECECEC]" />

    {/* CARDS */}
    <div className="lg:w-[1049px] min-h-[442px] flex justify-between gap-[24px] flex-wrap">
      {cards.slice(0, 4).map((card) => (
        <div
          key={card.id}
          className="lg:w-[238px] h-[442px]  flex flex-col items-center"
        >
          {/* IMAGE */}
          <div className="lg:w-full h-[280px]  flex items-center justify-center">
             <img
            src={card.image} 
            alt="Ürün fotoğrafı"
            className="w-full lg:w-[674px] lg:h-[280px] object-cover"
          />
          </div>

          {/* CONTENT */}
          <div className="lg:w-full lg:h-[162px] lg:pt-[25px] lg:px-[25px] lg:pb-[35px] flex flex-col gap-[10px]">
             <p className="font-montserrat font-bold text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px]">BUY NOW</p>
             <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text[#737373]">English Department</p>
             <div className="flex flex-row lg:gap-[10px]">
                <p className="font-montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] tracking-[0.1px] text-center">3.21$</p>
                <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D] text-center">2.80$</p>
             </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>









    );
}
