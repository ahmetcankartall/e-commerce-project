import { useState } from "react";

export default function PricingBody() {
  const [billing, setBilling] = useState("monthly");

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  return (
    <section className="w-full lg:min-h-[900px] min-h-[1000px] flex flex-col mx-auto lg:max-w-[1050px] max-w-[414px] justify-center items-center  ">

      {/* ORTA CONTAINER */}
      <div className="lg:max-w-[607px] max-w-[302px] flex flex-col items-center gap-2.5">
        <h2 className="font-montserrat font-bold text-[40px] leading-12.5 tracking-[0.2px] text-center">
          Pricing
        </h2>
        <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
<div className=" flex flex-row items-center justify-center ">
{/* SLIDE TOGGLE */}
<div className=" flex items-center gap-4 px-4 py-2 rounded-lg">
  <span  className={`text-sm font-bold font-montserrat text-gray-700 ${billing === "monthly" ? "opacity-100" : "opacity-50"}`}>
            Monthly
          </span>
        <div
          onClick={toggleBilling}
          className="w-24 h-10 bg-gray-200 rounded-full  cursor-pointer flex items-center px-1"
        >
          {/* Yuvarlak */}
          <div
            className={`bg-blue-600 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
              billing === "yearly" ? "translate-x-14" : "translate-x-0"
            }`}
          ></div>

          {/* Labels */}
        
        
        </div>
         <span className={` text-sm font-bold font-montserrat text-gray-700 ${billing === "yearly" ? "opacity-100" : "opacity-50"}`}>
            Yearly
          </span>
          </div>
          <p className=" text-gray-700 font-bold text-lg font-montserrat  border rounded-lg w-[110px] h-[45px] flex items-center justify-center bg-sky-100 border-gray-200">
  {billing === "monthly" ? "save %25" : "save %50"}
</p>
</div>


{/* 3 Fiyat Kartı */}
<div className="flex flex-col lg:flex-row w-full justify-center items-end lg:h-[800px] ">
  {/* Free */}
  <div className="flex-1  rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow h-[600px] border-2 border-sky-500">
    <h3 className="font-bold text-lg font-montserrat">FREE</h3>
    <p className="text-sm text-gray-600 text-center font-montserrat">Organize across all apps by hand</p>
    <p className="font-bold text-2xl font-montserrat">{billing === "monthly" ? "$0" : "$0"}</p>
    <p className="text-xs text-gray-500 font-montserrat">Per Month</p>
    <ul className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
      <li>✅ Unlimited product updates</li>
      <li>✅ 1GB Cloud storage</li>
      <li>✅ Email and community support</li>
    </ul>
    <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg">Try for free</button>
  </div>

  {/* Standard (Büyük) */}
  <div className="flex-[1.3]  rounded-lg p-8 flex flex-col items-center gap-4 bg-gray-900 text-white hover:shadow-lg transition-shadow h-[704px] ">
    <h3 className="font-bold text-xl font-montserrat">STANDARD</h3>
    <p className="text-sm text-gray-300 text-center font-montserrat">Organize across all apps by hand</p>
    <p className="font-bold text-3xl font-montserrat">{billing === "monthly" ? "$9.99" : "$99.99"}</p>
    <p className="text-xs text-gray-300 font-montserrat">Per Month</p>
    <ul className="flex flex-col gap-3 mt-4 text-sm text-gray-300">
      <li>✅ Unlimited product updates</li>
      <li>✅ 1GB Cloud storage</li>
      
        <li>✅ Unlimited product updates</li>
      <li>✅ 1GB Cloud storage</li>
      <li>❌ Email and community support</li>
      <li>❌ Email and community support</li>
    </ul>
    <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold font-montserrat">Try for free</button>
  </div>

  {/* Premium */}
  <div className="flex-1  rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow h-[600px] border-2 border-sky-500">
    <h3 className="font-bold text-lg font-montserrat">PREMIUM</h3>
    <p className="text-sm text-gray-600 text-center font-montserrat">Organize across all apps by hand</p>
    <p className="font-bold text-2xl font-montserrat">{billing === "monthly" ? "$19.99" : "$199.99"}</p>
    <p className="text-xs text-gray-500 font-montserrat">Per Month</p>
    <ul className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
      <li>✅ Unlimited product updates</li>
      <li>✅ 1GB Cloud storage</li>
      <li>✅ Email and community support</li>
    </ul>
    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-montserrat">Try for free</button>
  </div>
</div>






    
        </div>
    </section>
  );    
}
