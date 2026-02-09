






export default function SectionSix() {






  return (
     <div className=" w-full lg:max-w-[1440px] lg:mx-auto 
  min-h-[700px] lg:min-h-[886px] flex flex-col gap-6 lg:gap-0 
  pt-12 lg:pt-0 pb-12 lg:pb-0 px-4 lg:px-0  items-center flex justify-center">

  {/* ÜST KISIM: iki kolon */}
  <div className="w-full lg:max-w-[1077px] lg:mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 ">

    {/* SOL KOLON */}
   <div className=" w-full lg:basis-[401px] lg:grow-0 lg:shrink-0 lg:max-h-[784px] flex lg:flex-col lg:py-[80px] items-center bg-[#fafafa] box-border py-6">
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

    {/* SAĞ KOLON */}
     <div className="w-full h-[505px] lg:basis-[674px] lg:grow-0 lg:shrink-0 lg:min-h-[784px] flex">
      <img
        src="https://images.unsplash.com/photo-1768185595109-18aded979f9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt="Ürün fotoğrafı"
        className="w-full h-full lg:w-[674px] lg:h-[784px] object-cover"
      />
    </div>
  </div>

   
</div>

  );
}
