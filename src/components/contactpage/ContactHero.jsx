import family from "../../assets/images/family.png"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden w-full lg:min-h-[742px] min-h-[1080px] flex justify-center items-center">

      {/* ORTA CONTAINER */}
      <div className="relative z-20 lg:max-w-[1044px] w-full flex flex-col lg:flex-row items-center justify-between">

        {/* SOL METİN */}
        <div className="lg:max-w-[500px] w-full px-4 lg:px-0 flex flex-col justify-between gap-6 text-center lg:text-left ">
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
            CONTACT US
          </h5>

          <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            Get in touch <br /> today!
          </h1>

          <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
            We know how large objects will act,
            but things on a small scale
          </h4>

          <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Phone: +451 215 215
          </p>
          <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Fax: +451 215 215
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <Instagram className="w-8 h-8 cursor-pointer hover:text-[#977DF4] transition-colors" />
            <Facebook className="w-8 h-8 cursor-pointer hover:text-[#977DF4] transition-colors" />
            <Twitter className="w-8 h-8 cursor-pointer hover:text-[#977DF4] transition-colors" />
            <Linkedin className="w-8 h-8 cursor-pointer hover:text-[#977DF4] transition-colors" />
          </div>
        </div>

        {/* SAĞ TARAF – RESİM + TOPLAR */}
        <div className="relative lg:w-[650px] lg:h-[826px] w-[414px] h-[590px] ">

          {/* ARKA PLAN TOPLARI */}
          <div className="absolute inset-0 z-0 pointer-events-none ">

           {/* ARKA PLAN ELİPSLER */} 
           <div className="absolute left-[15%] top-[7%]  w-[295px] h-[295px] lg:left-10 lg:top-[11%] lg:w-[484px] lg:h-[484px] bg-[#FFE9EA] rounded-full z-0" />
            <div className="absolute left-[15%] top-[7%]  w-[42px] h-[42px] lg:left-0 -translate-x-[20%] lg:top-1/10 lg:w-[77px] lg:h-[77px] bg-[#FFE9EA] rounded-full z-0 " /> 
            <div className="absolute right-0 top-2/10 -translate-x-9/10  lg:right-0 lg:top-2/10 lg:translate-x-9/10  w-[9px] h-[9px] lg:w-[15px] lg:h-[15px] bg-[#977DF4] rounded-full z-0 " /> 
            <div className="absolute right-2 top-4/10 -translate-x-9/10  lg:right-0 lg:top-5/10 lg:-translate-x-1/10  w-[18px] h-[18px] lg:w-[30px] lg:h-[30px] bg-[#FFE9EA] rounded-full z-0 " />
            

          </div>

          {/* RESİM */}
          <img
            src={family}
            alt="Shopping family"
            className="relative z-10 object-cover  h-full w-full "
          />
        </div>

      </div>
    </section>
  );
}
