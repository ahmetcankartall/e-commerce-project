




export default function PricingBreadCrumb() {
 
  return (
<div className=" w-full flex justify-center   py-10">
  <div className="w-full lg:max-w-[1040px] lg:min-h-[180px] max-w-[414px] min-h-[202px] flex flex-col justify-center items-center  lg:gap-7.5 gap-10">
   
    <h5 className="font-bold text-[16px] leading-6 tracking-[0.1px] text-center font-montserrat text-[#737373]">PRICING</h5>
    <h1 className="font-bold text-[58px] leading-20 tracking-[0.2px] text-center font-montserrat">SIMPLE PRICING</h1>

    
    <div className=" lg:max-w-[510px] lg:max-h-[44px] max-h-[44px] max-w-[414px] flex  items-center lg:justify-end justify-center px-2">
      <nav className="flex gap-2 items-center">
        <a
          href="/"
          className=" font-bold text-[14px] leading-6 tracking-[0.2px] text-black hover:underline font-montserrat"
        >
          Home
        </a>
        <span className="font-bold text-[14px] leading-6 tracking-[0.2px] text-black font-montserrat">
          &gt;
        </span>
        <a
          href="/team"
          className=" font-bold text-[14px] leading-6 tracking-[0.2px] text-gray-500 hover:underline font-montserrat"
        >
          Team
        </a>
      </nav>
    </div>
  </div>
</div>



  );
}
