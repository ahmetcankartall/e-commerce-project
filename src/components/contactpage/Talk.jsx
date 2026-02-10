
import Arrow from "../../assets/images/Arrow.png"


export default function Talk() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:py-[80px] py-6 gap-[36px]  relative ">
      <img
        src={Arrow}
        alt="Arrow"
        className="absolute top-0 "
      />
      <div className=" w-full lg:max-w-[607px] max-w-[321px] min-h-[440px] lg:min-h-[188px] flex flex-col items-center justify-center lg:gap-[16px] gap-[30px]  "> 
         {/* OK */}
      
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center"> WE Can't WAIT TO MEET YOU</h5>
    <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center">Let’s Talk</h1>
    <button className="border w-[186px] h-[52px] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center bg-[#23A6F0] rounded-lg text-white">Try it free now</button></div>
  
   
    </div>
  );
}
