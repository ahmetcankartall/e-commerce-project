import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Vector4 from "../../assets/images/Vector4.png";
import Vector5 from "../../assets/images/Vector5.png";
import Vector from "../../assets/images/Vector.png";

export default function PricingClients() {
 
  return (
<section className="w-full bg-[#FAFAFA] flex flex-col justify-center py-20 ">
      <div className=" flex flex-col items-center justify-center lg:max-w-[547px] max-w-[310px] w-full mx-auto gap-7.5 ">
            <h2 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center"
>
               Trusted By Over 4000 Big Companies
            </h2>
      
        </div>
  <div className="w-full lg:max-w-[1054px] max-w-[327px] lg:min-h-[175px] min-h-[957px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0  mx-auto py-16">
    
    <div className="flex justify-center items-center">
      <img src={Vector} alt="Logo" />
    </div>

    <div className="flex justify-center items-center">
      <img src={Vector1} alt="Logo" />
    </div>

    <div className="flex justify-center items-center">
      <img src={Vector2} alt="Logo" />
    </div>

    <div className="flex justify-center items-center">
      <img src={Vector3} alt="Logo" />
    </div>

    <div className="flex justify-center items-center">
      <img src={Vector4} alt="Logo" />
    </div>

    <div className="flex justify-center items-center">
      <img src={Vector5} alt="Logo" />
    </div>

  </div>
</section>





  );
}
