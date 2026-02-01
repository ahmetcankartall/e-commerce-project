import hero from "../../assets/images/hero.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SectionOne() {
  return (
    <div
      className="w-full min-h-screen
                 flex items-center justify-center
                 bg-cover bg-center bg-no-repeat
                 relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="w-full max-w-[1440px] px-4
                      flex justify-center items-center
                      relative z-10 flex-col">

        <div className="w-full max-w-[700px] h-[330px]
                        flex flex-col items-center justify-center gap-6  ">

          <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center text-white">
            GROCERIES DELIVERY
          </h1>

          <h4 className="max-w-[536px] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center text-white">
            We know how large objects will act, but things on a small scale just do not act that way.
          </h4>

        </div>
        <div className="flex flex-row justify-between items-center w-full">
         <button className="hover:text-white hover:cursor-pointer"><ChevronLeft size={50} /></button> 
            <button
            className="w-[204px] h-[62px] flex items-center justify-center gap-[10px]
                       bg-[#23a6f0] rounded-lg text-white
                       font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]"
          >
            Start Now
          </button>
          <button className="hover:text-white hover:cursor-pointer"><ChevronRight size={50} /></button> 
        </div>
      </div>
    </div>
  );
}
