




function Breadcrumb() {
 
  return (
<div className=" w-full bg-white flex justify-center ">
  <div className="w-full lg:max-w-[1049px] lg:h-[92px] max-w-[414px] h-[202px] flex lg:flex-row flex-col justify-between items-center lg:py-0 py-6   lg:gap-[30px]">
    {/* Sol baştaki başlık */}
    <div className=" lg:max-w-[510px] lg:h-[44px] max-w-[414px] flex items-center lg:justify-start justify-center">
      <h3 className=" font-bold text-[24px] leading-[32px] tracking-[0.1px] text-black ">
        Shop
      </h3>
    </div>

    {/* Sağdaki breadcrumb */}
    <div className=" lg:max-w-[510px] lg:max-h-[44px] max-h-[44px] max-w-[414px] flex  items-center lg:justify-end justify-center">
      <nav className="flex gap-2 items-center">
        <a
          href="/"
          className=" font-bold text-[14px] leading-[24px] tracking-[0.2px] text-black hover:underline"
        >
          Home
        </a>
        <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-black">
          &gt;
        </span>
        <a
          href="/shop"
          className=" font-bold text-[14px] leading-[24px] tracking-[0.2px] text-black hover:underline"
        >
          Shop
        </a>
      </nav>
    </div>
  </div>
</div>



  );
}
export default Breadcrumb