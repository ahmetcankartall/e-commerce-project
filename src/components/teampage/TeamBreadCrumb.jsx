




export default function TeamBreadCrumb() {
 
  return (
<div className=" w-full flex justify-center ">
  <div className="w-full lg:max-w-[1040px] lg:min-h-[180px] max-w-[414px] min-h-[202px] flex flex-col justify-center items-center lg:py-0 py-6   lg:gap-7.5 ">
   <div className="border"></div>
    <h5 className="font-bold text-[16px] leading-6 tracking-[0.1px] text-center font-montserrat">WHAT WE DO</h5>
    <h1 className="font-bold text-[58px] leading-20 tracking-[0.2px] text-center font-montserrat">Innovation tailored for you</h1>

    
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
