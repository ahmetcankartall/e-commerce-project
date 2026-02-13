

import { Instagram, Facebook, Twitter,Linkedin } from "lucide-react";

export default function FreeTrial() {
  return (
    <section className="relative overflow-hidden w-full lg:min-h-[282px] min-h-[352px] lg:max-w-[607px] max-w-[302px] flex justify-center items-center flex-col   gap-9 mx-auto py-10">

      
<h2 className="font-montserrat font-bold text-[40px] leading-12.5 tracking-[0.2px] text-center">Start your 14 days free trial</h2>
      <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center text-[#737373] text-center">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent.</p>
      
        <button className="border border-[#977DF4] text-[#977DF4] font-montserrat font-bold text-[16px] leading-6 tracking-[0.2px] px-8 py-4 rounded-full hover:bg-[#977DF4] hover:text-white transition-colors cursor-pointer">Try it free now</button>
        <div className=" flex flex-row gap-6">
            <button className=""><Instagram className="w-6 h-6 text-[#3eb2f2]" /></button>
            <button className=""><Facebook className="w-6 h-6 text-[#3eb2f2]" /></button>
            <button className=""><Twitter className="w-6 h-6 text-[#3eb2f2]" /></button>
            <button className=""><Linkedin className="w-6 h-6 text-[#3eb2f2]" /></button>
        </div>
    </section>
  );
}
