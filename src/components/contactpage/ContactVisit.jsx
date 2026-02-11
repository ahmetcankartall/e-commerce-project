import { MapPin,Phone,Mail } from 'lucide-react';

export default function ContactVisit() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 py-12 lg:gap-[80px] ">
    <div className=" w-full lg:max-w-[633px] max-w-[310px] min-h-[184px] lg:min-h-[134px] flex flex-col items-center justify-center lg:gap-[10px] gap-0 ">
      <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">Visit our office</p>
      <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center">We help small businesses 
with big ideas</h2>
    </div>
    
     <div className=" w-full lg:max-w-[985px] max-w-[330px] min-h-[1453px] lg:min-h-[184px] flex lg:flex-row flex-col items-center justify-center ">
    <div className=" w-full max-w-[328px] min-h-[393px] lg:min-h-[403px] gap-[15px] flex flex-col items-center justify-between  py-12">
        <Phone size={55} className='text-[#23A6F0] mt-6'/>
        <div className="flex flex-col items-center">
          <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">georgia.young@example.com</h6>
          <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">georgia.young@ple.com</h6>
        </div>
    
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">Get Support</h5>
          <button className="border border-[#23A6F0] rounded-full w-[189px] h-[54px] text-[#23A6F0]">Submit Request</button>
        
    </div>

     <div className=" w-full max-w-[328px] min-h-[393px] lg:min-h-[403px] gap-[15px] bg-[#252B42] flex flex-col items-center justify-between  py-12"> 
      <MapPin size={55} stroke="#252B42" fill="#23a6f0" className="mt-6"/>
      <div className="flex flex-col items-center">
        <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-white">georgia.young@example.com</h6>
        <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-white">georgia.young@ple.com</h6>
      </div>
     
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-white">Get Support</h5>
        <button className="border border-[#23A6F0] bg-[#252B42] rounded-full w-[189px] h-[54px] text-[#23A6F0]">Submit Request</button>
      
    </div>

      <div className=" w-full max-w-[328px] min-h-[393px] lg:min-h-[403px] gap-[15px] flex flex-col items-center justify-between  py-12">
        <Mail size={55} className='text-[#23A6F0] mt-6'/>
        <div className="flex flex-col items-center">
          <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">georgia.young@example.com</h6>
          <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">georgia.young@ple.com</h6>
        </div>
      
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">Get Support</h5>
          <button className="border border-[#23A6F0] rounded-full w-[189px] h-[54px] text-[#23A6F0]">Submit Request</button>
        
      </div>
 </div>
    </div>
  );
}