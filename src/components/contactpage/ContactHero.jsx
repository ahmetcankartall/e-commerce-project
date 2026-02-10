import family from "../../assets/images/family.png"
import { Instagram,Facebook,Twitter,Linkedin } from "lucide-react";


export default function ContactHero() {
  return (
    <section className="relative overflow-hidden w-full lg:min-h-[742px] min-h-[1080px]  flex justify-center items-center">
      {/* ARKA PLAN ELİPSLER */}
      <div className="absolute top-11 left-185 w-[77px] h-[77px] bg-[#FFE9EA] rounded-full z-0  " />
     <div className="absolute top-11 left-185 w-[484px] h-[484px] bg-[#FFE9EA] rounded-full z-0 " />
      <div className="absolute top-40 left-315 w-[15px] h-[15px] bg-[#977DF4] rounded-full z-0 " />
    <div className="absolute top-68 left-308 w-[30px] h-[30px] bg-[#FFE9EA] rounded-full z-0 " />
    <div className="absolute top-100 left-186 w-[15px] h-[15px] bg-[#977DF4] rounded-full z-0 " />
    
      {/* İÇERİK */}
      <div className="z-20 lg:max-w-[1044px] lg:h-[518px] max-w-[418px] h-[1080px]   flex flex-col items-center justify-center lg:flex-row ">
       <div className=" lg:max-w-[599px] z-20 lg:h-[518px] max-w-[418px] h-[590px] flex flex-col justify-between  lg:items-start items-center text-center lg:text-left gap-6">
    <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
      CONTACT US
    </h5>
    <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px]"
>
      Get in touch <br /> today!
    </h1>
    <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]"
>
      We know how large objects will act,
      but things on a small scale
    </h4>
 
    <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">Phone: +451 215 215</p>
    <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">Fax: +451 215 215</p>

    <div className="flex gap-4 mt-6">
       <button><Instagram className="w-8 h-8 text-[#252B42] cursor-pointer hover:text-[#977DF4] transition-colors duration-300" /></button>
        <button><Facebook className="w-8 h-8 text-[#252B42] cursor-pointer hover:text-[#977DF4] transition-colors duration-300" /></button>
        <button><Twitter className="w-8 h-8 text-[#252B42] cursor-pointer hover:text-[#977DF4] transition-colors duration-300" /></button>
        <button><Linkedin className="w-8 h-8 text-[#252B42] cursor-pointer hover:text-[#977DF4] transition-colors duration-300" /></button>
    </div>
  
</div>

        {/* SAĞ RESİM */}
        <div className="z-20">
          <img
            src={family}
            alt="Shopping family"
            className="w-full lg:max-w-[650px] lg:h-[826px] max-w-[418px] h-[590px] object-cover   py-12 "
          />
        </div>
      </div>
    </section>
  );
}
