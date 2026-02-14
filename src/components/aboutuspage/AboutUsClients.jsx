import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Vector4 from "../../assets/images/Vector4.png";
import Vector5 from "../../assets/images/Vector5.png";
import Vector from "../../assets/images/Vector.png";

export default function AboutUsClients() {
 
  return (
<section className="w-full bg-[#FAFAFA] flex flex-col justify-center py-20 ">
      <div className=" flex flex-col items-center justify-center lg:max-w-[547px] max-w-[310px] w-full mx-auto gap-7.5 ">
            <h2 className="font-montserrat font-bold text-[40px] leading-12.5 tracking-[0.2px] text-[#252B42] text-center "
>
               Big Companies Are Here
            </h2>
            <h3 className="font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-center text-[#737373]">
              Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
            </h3>
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
