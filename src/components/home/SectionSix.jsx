import axios from "axios";
import { useQuery } from "@tanstack/react-query";






export default function SectionSix() {
  const URL = "http://192.168.1.6:5000/api/cards";
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
     <div className=" w-full lg:max-w-[1440px] lg:mx-auto 
  min-h-[700px] lg:min-h-[886px] flex flex-col gap-6 lg:gap-0 
  pt-12 lg:pt-0 pb-12 lg:pb-0 px-4 lg:px-0">

  {/* ÜST KISIM: iki kolon */}
  <div className="w-full lg:max-w-[1069px] lg:mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0">

    {/* SOL KOLON */}
    <div className="w-full h-[505px] lg:basis-[674px] lg:grow-0 lg:shrink-0 lg:min-h-[649px] flex">
      <img
        src="https://images.unsplash.com/photo-1768185595109-18aded979f9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt="Ürün fotoğrafı"
        className="w-full h-full lg:w-[674px] lg:h-[649px] object-cover"
      />
    </div>

    {/* SAĞ KOLON */}
    <div className=" w-full lg:basis-[401px] lg:grow-0 lg:shrink-0 lg:max-h-[649px] flex lg:flex-col lg:py-[80px] items-center bg-[#fafafa] box-border">
      <div className="max-w-[348px] w-full h-[604px] flex flex-col gap-[19px] mx-auto">
        <h5 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-center text-[#252B42]">
          MOST POPULAR
        </h5>
        <p className="font-montserrat font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
        <div className="w-full h-[300px] flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt="Ürün fotoğrafı"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#252B42]">
          BUY NOW
        </p>
        <p className="lg:px-[5px] lg:py-[3px] w-[108px] h-[34px] mx-auto text-center">
          3 Dollars
        </p>
      </div>
    </div>
  </div>

  {/* ALT BAR: Sayılar */}
  <div className="hidden lg:block w-full h-[444px] max-w-[349px] mx-auto flex flex-col gap-4">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="w-full h-[100px] bg-white flex flex-row items-center gap-4 p-4">
        <div className="flex-shrink-0 text-[#E74040] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[60px] h-[60px] flex items-center justify-center rounded">
          {num}.
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
            Buraya metni yazabilirsiniz
          </p>
          <p className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px]">
            Buraya metni yazabilirsiniz
          </p>
        </div>
      </div>
    ))}
  </div>
</div>










  );
}
