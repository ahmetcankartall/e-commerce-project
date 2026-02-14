import axios from "axios";
import { useQuery } from "@tanstack/react-query";






export default function SectionFour() {
 





  return (
    <div className="w-full lg:max-w-[1440px] lg:mx-auto 
  min-h-[700px] lg:min-h-[886px] flex flex-col gap-6 lg:gap-0 
  pt-12 lg:pt-0 pb-12 lg:pb-0 px-4 lg:px-0 items-center flex justify-center">

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
    <div className=" w-full lg:basis-[401px] lg:grow-0 lg:shrink-0 lg:max-h-[649px] flex lg:flex-col lg:py-[80px] items-center bg-[#fafafa] box-border py-6">
      <div className=" max-w-[348px] w-full h-[604px] flex flex-col gap-[19px] mx-auto">
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
        <div className="w-full lg:h-[188px] h-[188px] pt-[25px] pb-9 gap-2.5 flex flex-col justify-center items-center">
              <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center">
                English Department
              </h5>

              <p className="w-[146px] h-[24px] overflow-hidden whitespace-nowrap text-ellipsis font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373]">
                English Department
              </p>

              <div className="w-[108px] h-[34px] flex justify-between items-center">
                <span className="line-through text-[#BDBDBD] font-bold">
                  $1533
                </span>
                <span className="text-[#23856D] font-bold">
                  $1333
                </span>
              </div>

              {/* renk noktaları (dummy) */}
              <div className="w-[82px] h-[16px] flex justify-between">
                <div className="w-3 h-3 rounded-full bg-[#23A6F0]" />
                <div className="w-3 h-3 rounded-full bg-[#23856D]" />
                <div className="w-3 h-3 rounded-full bg-[#E77C40]" />
                <div className="w-3 h-3 rounded-full bg-[#23856D]" />
              </div>
            </div>
      </div>
    </div>
  </div>

  {/* ALT BAR: Sayılar */}
  <div className=" w-full h-[444px] lg:max-w-[1069px] lg:h-[111px] max-w-[349px] mx-auto flex flex-col lg:flex-row  gap-4 lg:mt-4">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="  lg:my-auto w-full h-[100px] bg-white flex flex-row items-center gap-4 p-4">
        <div className="flex-shrink-0 text-[#E74040] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[60px] h-[60px] flex items-center justify-center rounded">
          {num}.
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
            Easy to Use
          </p>
          <p className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px]">
            Things on a very small that you have any direct
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


  );
}
